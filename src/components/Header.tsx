import React from 'react';
import { Music2 } from 'lucide-react';
import { ConnectButton } from './Web3/ConnectButton';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Music2 className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white font-['Montserrat']">
              Nathan Granner
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-['Open_Sans']"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('performances')} 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-['Open_Sans']"
            >
              Performances
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-['Open_Sans']"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-['Open_Sans']"
            >
              News
            </button>
            <button 
              onClick={() => scrollToSection('media')} 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-['Open_Sans']"
            >
              Media
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white hover:text-gray-300 transition-colors duration-200 font-['Open_Sans']"
            >
              Contact
            </button>
            <ConnectButton />
          </nav>
        </div>
      </div>
    </header>
  );
}