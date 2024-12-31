import { useState, useCallback } from 'react';
import { galleryData } from './galleryData';
import type { Photo } from './types';

export function useGalleryModal() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = useCallback((photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  }, []);

  const currentIndex = selectedPhoto ? galleryData.findIndex(p => p.id === selectedPhoto.id) : -1;

  const showNext = useCallback(() => {
    if (currentIndex < galleryData.length - 1) {
      setSelectedPhoto(galleryData[currentIndex + 1]);
    }
  }, [currentIndex]);

  const showPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedPhoto(galleryData[currentIndex - 1]);
    }
  }, [currentIndex]);

  return {
    selectedPhoto,
    openModal,
    closeModal,
    showNext,
    showPrevious
  };
}