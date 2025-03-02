import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
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
  );
}

