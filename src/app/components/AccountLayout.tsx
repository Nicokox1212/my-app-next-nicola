"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UkladKonta({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const rysujOdn = (href: string, label: string) => {
    const aktywny = pathname === href;
    return aktywny ? (
      <span className="aktywny" aria-disabled="true" tabIndex={-1}>
        {label}
      </span>
    ) : (
      <Link href={href} className="odn">
        {label}
      </Link>
    );
  };

  return (
    <div className="uklad">
      <aside className="panel">
        <nav>
          <ul>
            <li>{rysujOdn('/account/profile', 'Profil')}</li>
            <li>{rysujOdn('/account/settings', 'Ustawienia')}</li>
            <li>{rysujOdn('/account/orders', 'Zamówienia')}</li>
          </ul>
        </nav>
      </aside>
      <main className="zawartosc">
        {children}
      </main>
    </div>
  );
}
