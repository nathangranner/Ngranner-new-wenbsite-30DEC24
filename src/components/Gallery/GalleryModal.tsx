import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Photo } from './types';

interface GalleryModalProps {
  photo: Photo | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export function GalleryModal({ photo, isOpen, onClose, onNext, onPrevious }: GalleryModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && onNext) onNext();
      if (event.key === 'ArrowLeft' && onPrevious) onPrevious();
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !photo) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        aria-label="Close modal"
      >
        <X className="h-8 w-8" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative">
          <img
            src={photo.url}
            alt={photo.caption}
            className="max-h-[85vh] mx-auto object-contain"
            loading="eager"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
            <h3 className="font-['Playfair_Display'] text-2xl mb-2">{photo.title}</h3>
            <p className="font-['Open_Sans'] text-gray-300">{photo.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}