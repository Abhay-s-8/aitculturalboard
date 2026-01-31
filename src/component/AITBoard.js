import React, { useState, useEffect } from "react";
import "./AITBoard.css";

export default function AITBoard(props) {
  const adminEmail = "entc"; 
  const [currentUserEmail, setCurrentUserEmail] = useState(""); 

  const defaultAnnouncements = [
    {
      id: 1,
      title: "Cultural Fest 2K25",
      message: "Join us for the AIT Cultural Board Fest on 25th September!",
      date: "2025-09-10",
    }
  ];

  const [announcements, setAnnouncements] = useState(() => {
    const stored = localStorage.getItem("aitBoardAnnouncements");
    return stored ? JSON.parse(stored) : defaultAnnouncements;
  });

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    message: "",
    date: "",
  });

  useEffect(() => {
    localStorage.setItem("aitBoardAnnouncements", JSON.stringify(announcements));
  }, [announcements]);

  const addAnnouncement = () => {
    if (!newAnnouncement.title || !newAnnouncement.date) return;
    const newItem = {
      id: announcements.length > 0 ? announcements[announcements.length - 1].id + 1 : 1,
      ...newAnnouncement,
    };
    setAnnouncements([...announcements, newItem]);
    setNewAnnouncement({ title: "", message: "", date: "" });
  };

  const deleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter((item) => item.id !== id));
  };

  return (
    <div className="ait-board" style={{ background: props.mode ? " " : "#dededeff" , color:props.mode ? "#ffffff" : "#000"}}>
      <h2>Announcements</h2>

      {/* Mock login for admin access */}
      <div style={{ marginBottom: "15px", textAlign: "center" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={currentUserEmail}
          onChange={(e) => setCurrentUserEmail(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", marginRight: "10px" }}
        />
        <span style={{ color: currentUserEmail === adminEmail ? "#0f0" : "#f00" }}>
          {currentUserEmail === adminEmail ? "Admin Access" : "Normal User"}
        </span>
      </div>

      {/* Add Form - only visible to admin */}
      {currentUserEmail === adminEmail && (
        <div className="add-form">
          <input
            type="text"
            placeholder="Title"
            value={newAnnouncement.title}
            onChange={(e) =>
              setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
            }
          />
          <input
            type="text"
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

      {/* List */}
      <div className="announcement-list">
        {announcements.map((item) => (
          <div key={item.id} className="announcement-card">
            <div className="announcement-date">{item.date}</div>
            <div className="announcement-content">
              <h3>{item.title}</h3>
              <p>{item.message}</p>
            </div>
            {currentUserEmail === adminEmail && (
              <button
                className="delete-btn"
                onClick={() => deleteAnnouncement(item.id)}
              >
                ❌ Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
