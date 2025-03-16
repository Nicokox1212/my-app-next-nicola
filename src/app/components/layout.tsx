import React from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="tlo-gradient">
      <header className="naglowek">
        <h1>Moja Aplikacja</h1>
        <nav className="nawigacja">
          <Link href="/">Strona Główna</Link>
          <Link href="/about">O Nas</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="stopka">
        <p>&copy; {new Date().getFullYear()} Moja Aplikacja</p>
      </footer>
    </div>
  );
}