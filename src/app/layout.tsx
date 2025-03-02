import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';  

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="tlo-gradient">
          <header className="naglowek">
            <Image src="/loremipsum.png" alt="Logo" width={50} height={50} />
            <nav>
              <ul className="nawigacja">
                <li><Link href="/">Strona główna</Link></li>
                <li><Link href="/about">O nas</Link></li>
                <li><Link href="/contact">Kontakt</Link></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="stopka">
            (c) 2025 Firma Nicokokololo
          </footer>
        </div>
      </body>
    </html>
  );
}
