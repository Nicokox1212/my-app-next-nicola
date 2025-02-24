import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="/loremipsum.png" alt="Logo" width={50} height={50} />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Strona główna</Link>
          </li>
          <li>
            <Link href="/about">O nas</Link>
          </li>
          <li>
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
