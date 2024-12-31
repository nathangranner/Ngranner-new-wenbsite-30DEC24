import React from 'react';
import { GalleryModal } from './GalleryModal';
import { useGalleryModal } from './useGalleryModal';
import type { Photo } from './types';

interface GalleryGridProps {
  photos: Photo[];
}

export function GalleryGrid({ photos }: GalleryGridProps) {
  const { selectedPhoto, openModal, closeModal, showNext, showPrevious } = useGalleryModal();

  return (
    <>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <div 
            key={photo.id}
            className="aspect-[3/4] cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => openModal(photo)}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="font-['Playfair_Display'] text-xl mb-2">{photo.title}</div>
                <div className="font-['Open_Sans'] text-sm text-gray-300">{photo.caption}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <GalleryModal
        photo={selectedPhoto}
        isOpen={!!selectedPhoto}
        onClose={closeModal}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </>
  );
}