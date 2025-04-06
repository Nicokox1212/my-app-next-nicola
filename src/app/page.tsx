'use client'; 
import { useState, useEffect } from 'react';
import Carousel from './components/Carousel';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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
    <>
      <section className="sekcja-powitalna">
        <div className="tekst">
          <h1>Witamy na stronie głównej</h1>
          <p>Twoje miejsce na start w wielkim stylu</p>
          <div className="przyciski">
            <button className="przycisk animowany">Zacznij</button>
            <button className="przycisk animowany jasny">Więcej informacji</button>
          </div>
        </div>
      </section>


      <Carousel darkMode={darkMode} />
    </>
  );
}
