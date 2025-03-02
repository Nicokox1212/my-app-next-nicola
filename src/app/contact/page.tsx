
"use client";

import { useState } from "react";

export default function Kontakt() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Wiadomość wysłana");
  };

  return (
    <div className="formularz">
      <h1 className="tytul">Formularz kontaktowy</h1>
      <form onSubmit={handleSubmit} className="formularz-pola">
        <div>
          <label className="label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <div>
          <label className="label">Treść wiadomości:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea"
            required
          />
        </div>
        <button type="submit" className="przycisk">
          Wyślij
        </button>
      </form>
    </div>
  );
}
