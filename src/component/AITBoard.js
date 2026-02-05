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
    });

    return () => unsub();
  }, []);

  // Add (ADMIN ONLY)
  const addAnnouncement = async () => {
    if (!isAdmin) return alert("Admin only");

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

  return (
    <div className="ait-board">
      <h2>Announcements</h2>

      <div className="auth-container">
  {!user ? (
    <button className="auth-btn" onClick={login}>
      Login with Google
    </button>
  ) : (
    <>
      <p>
        {user.email}
        {isAdmin && <span className="admin-badge">ADMIN</span>}
      </p>
      <button className="auth-btn" onClick={logout}>
        Logout
      </button>
    </>
  )}
</div>


      {isAdmin && (
        <div className="add-form">
          <input
            placeholder="Title"
            value={newAnnouncement.title}
            onChange={(e) =>
              setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
            }
          />
          <input
            placeholder="Message"
            value={newAnnouncement.message}
            onChange={(e) =>
              setNewAnnouncement({ ...newAnnouncement, message: e.target.value })
            }
          />
          <input
            type="date"
            value={newAnnouncement.date}
            onChange={(e) =>
              setNewAnnouncement({ ...newAnnouncement, date: e.target.value })
            }
          />
          <button onClick={addAnnouncement}>Add</button>
        </div>
      )}

      {announcements.map((a) => (
        <div key={a.id} className="announcement-card">
          <b>{a.title}</b>
          <p>{a.message}</p>
          <small>{a.date}</small>

          {isAdmin && (
            <button onClick={() => deleteAnnouncement(a.id)}>
            Delete
            </button>
          )}
        </div>
        
      ))}
    </div>
    
  );
}
