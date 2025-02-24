import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <footer style={{ textAlign: 'center', padding: '1rem' }}>
          (c) 2025 Firma Nico
        </footer>
      </body>
    </html>
  );
}
