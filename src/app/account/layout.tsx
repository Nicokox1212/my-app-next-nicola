"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UkladKonta({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const rysujOdn = (href: string, label: string) => {
    const aktywny = pathname === href;
    return aktywny ? (
      <span className="aktywne" aria-disabled="true" tabIndex={-1}>
        {label}
      </span>
    ) : (
      <Link href={href}>{label}</Link>
    );
  };

  return (
    <div className="konto-uklad">
      <aside className="konto-panel">
        <nav>
          <ul>
            <li>{rysujOdn('/account/profile', 'Profil')}</li>
            <li>{rysujOdn('/account/settings', 'Ustawienia')}</li>
            <li>{rysujOdn('/account/orders', 'Zamówienia')}</li>
          </ul>
        </nav>
      </aside>
      <main className="konto-zawartosc">
        {children}
      </main>
    </div>
  );
}