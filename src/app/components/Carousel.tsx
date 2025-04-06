'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import '../globals.css';

const images = [
  '/batman.jpg',
  '/theflash.jpg',
  '/arrow.jpg'
];

export default function Carousel({ darkMode }: { darkMode: boolean }) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className={`embla ${darkMode ? 'dark-carousel' : 'light-carousel'}`} ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className="embla__slide" key={index}>
            <Image src={src} alt={`Slide ${index}`} width={800} height={400} />
          </div>
        ))}
      </div>
    </div>
  );
}
