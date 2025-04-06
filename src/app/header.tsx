'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import './globals.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <header className="naglowek">
      <div className="logo">
        <Image src="/loremipsum.png" alt="Logo" width={50} height={50} />
      </div>

   
      <nav className={`nawigacja ${menuOpen ? 'otwarte' : ''}`}>
        <ul>
          <li><Link href="/">Strona główna</Link></li>
          <li><Link href="/about">O nas</Link></li>
          <li><Link href="/contact">Kontakt</Link></li>
        </ul>
      </nav>

   
      <div className="menu-and-toggle">
        <button
          className="dark-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            src="/moon.png"
            alt="Dark/Light Toggle"
            width={30}
            height={30}
          />
        </button>
      </div>

   
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
}
