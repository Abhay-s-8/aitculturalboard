import React, { useEffect, useState } from "react";
import "./AITBoard.css";

import { db, auth } from "../firebaseConfig";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const ADMIN_EMAIL = "culturalboardait85@gmail.com";

export default function AITBoard() {
  const [announcements, setAnnouncements] = useState([]);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    message: "",
    date: "",
  });

  // Google provider
  const provider = new GoogleAuthProvider();

  // Login
  const login = async () => {
    await signInWithPopup(auth, provider);
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setIsAdmin(false);
  };

  // Auth listener (SAFE)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAdmin(currentUser?.email === ADMIN_EMAIL);
    });

    return () => unsub();
  }, []);

  // Read announcements (PUBLIC)
  useEffect(() => {
    const q = query(
      collection(db, "announcements"),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snap) => {
      setAnnouncements(
        snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      );
      setLoaded(true);
    });

    return () => unsub();
  }, []);

  // Add (ADMIN ONLY)
  const addAnnouncement = async () => {
    if (!isAdmin) return alert("Admin only");
    if (!newAnnouncement.title.trim()) return;

    await addDoc(collection(db, "announcements"), {
      title: newAnnouncement.title,
      message: newAnnouncement.message,
      date: newAnnouncement.date,
      createdAt: serverTimestamp(),
    });

    setNewAnnouncement({ title: "", message: "", date: "" });
  };

  // Delete (ADMIN ONLY)
  const deleteAnnouncement = async (id) => {
    if (!isAdmin) return;
    await deleteDoc(doc(db, "announcements", id));
  };

  // "2026-10-25" -> { day: "25", month: "Oct", year: "2026" }; falls back to the saved timestamp
  const dateParts = (a) => {
    let d = a.date ? new Date(`${a.date}T00:00:00`) : null;
    if (!d || isNaN(d)) d = a.createdAt && a.createdAt.toDate ? a.createdAt.toDate() : null;
    if (!d || isNaN(d)) return null;
    return {
      day: String(d.getDate()).padStart(2, "0"),
      month: d.toLocaleString("en-US", { month: "short" }),
      year: String(d.getFullYear()),
    };
  };

  return (
    <section className="ait-board" aria-labelledby="notices-title">
      <header className="board-head">
        <span className="eyebrow">04 — Notices</span>
        <h2 id="notices-title">Announcements</h2>
        <p className="board-lead">The latest updates from the Cultural Board, newest first.</p>
      </header>

      {isAdmin && (
        <div className="add-form">
          <h3>New announcement</h3>
          <input
            placeholder="Title"
            aria-label="Title"
            value={newAnnouncement.title}
            onChange={(e) =>
              setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
            }
          />
          <input
            placeholder="Message"
            aria-label="Message"
            value={newAnnouncement.message}
            onChange={(e) =>
              setNewAnnouncement({ ...newAnnouncement, message: e.target.value })
            }
          />
          <input
            type="date"
            aria-label="Date"
            value={newAnnouncement.date}
            onChange={(e) =>
              setNewAnnouncement({ ...newAnnouncement, date: e.target.value })
            }
          />
          <button onClick={addAnnouncement}>Add</button>
        </div>
      )}

      {!loaded ? (
        <p className="board-empty" role="status">Loading announcements…</p>
      ) : announcements.length === 0 ? (
        <p className="board-empty">No announcements right now. Check back soon.</p>
      ) : (
        <ol className="board-list">
          {announcements.map((a, i) => {
            const d = dateParts(a);
            return (
              <li key={a.id} className={`announcement-card${i === 0 ? " is-latest" : ""}`}>
                <div className="ann-date" aria-label={d ? `${d.day} ${d.month} ${d.year}` : undefined}>
                  {d ? (
                    <>
                      <strong>{d.day}</strong>
                      <span>{d.month}</span>
                      <small>{d.year}</small>
                    </>
                  ) : (
                    <span>—</span>
                  )}
                </div>
                <div className="ann-body">
                  {i === 0 && <span className="ann-tag">Latest</span>}
                  <h3>{a.title}</h3>
                  <p>{a.message}</p>
                </div>
                {isAdmin && (
                  <button className="ann-delete" onClick={() => deleteAnnouncement(a.id)}>
                    Delete
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      )}

      {/* Board members sign in here to post; kept small so visitors see the notices first */}
      <footer className="board-admin">
        {!user ? (
          <button className="auth-btn" onClick={login}>
            Admin login
          </button>
        ) : (
          <>
            <span>
              {user.email}
              {isAdmin && <span className="admin-badge">ADMIN</span>}
            </span>
            <button className="auth-btn" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </footer>
    </section>
  );
}
