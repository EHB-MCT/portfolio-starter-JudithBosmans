import React, { useState } from "react";

function Request() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3300/postMatchaRating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: email }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMessage(data);
    } catch (error) {
      console.error("Error posting review:", error);
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <div className="brand-title">MATCHA REVIEW</div>
      <form onSubmit={handleSubmit} className="inputs">
        <label>Leave a review on matcha</label>
        <input
          type="email"
          placeholder="example@test.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Matcha review</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Request;
