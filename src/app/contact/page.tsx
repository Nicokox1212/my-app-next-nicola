"use client";

import { useState } from 'react';

export default function Kontakt() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Wiadomość wysłana');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Treść wiadomości:</label>
          <br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}
