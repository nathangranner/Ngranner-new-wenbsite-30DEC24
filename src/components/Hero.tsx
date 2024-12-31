import React from 'react';
import { Button } from './common/Button';

export function Hero() {
  const scrollToMedia = () => {
    document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://ngranner.com/wp-content/uploads/2023/10/Nathan-Granner-Headshot-2023-scaled.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <h1 className="font-['Playfair_Display'] font-bold text-6xl md:text-7xl mb-4">
          Nathan Granner
        </h1>
        <h2 className="font-['Open_Sans'] font-light text-2xl md:text-3xl mb-8">
          Tenor
        </h2>
        <Button variant="secondary" onClick={scrollToMedia}>
          Listen Now
        </Button>
      </div>
    </div>
  );
}