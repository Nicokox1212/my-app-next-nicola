'use client';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="tlo-gradient">
          <header className={`naglowek ${darkMode ? 'dark-header' : ''}`}>
            <div className="logo">
              <Image src="/loremipsum.png" alt="Logo" width={50} height={50} />
            </div>

      
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
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
                onClick={() => setDarkMode(!darkMode)}
              >
                <Image
                  src={darkMode ? "/moon.png" : "/sun.jpg"}
                  alt="Dark/Light Toggle"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </header>

          <main>{children}</main>

          <footer className={`stopka ${darkMode ? 'dark-footer' : ''}`}>
            <div className="stopka-siatka">
              <div>Kontakt: <a href="mailto:nikolinko@gmail.com"><img id="gmail" src="/gmail.png" alt="Gmail" /></a></div>
              <div>© 2025 Firma Nicokokololo</div>
              <div>
                <a href="https://www.facebook.com/nicola.allocca">
                  <img id="gmail" src="/facebook.png" alt="Facebook" />
                </a> |
                <a href="https://www.instagram.com/nikolinko1212">
                  <img id="gmail" src="/instagram.png" alt="Instagram" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
