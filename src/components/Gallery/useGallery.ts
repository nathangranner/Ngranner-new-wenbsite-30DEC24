import { useState, useMemo } from 'react';
import { galleryData } from './galleryData';
import type { Category } from './types';

export function useGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const photos = useMemo(() => {
    if (activeCategory === 'All') {
      return galleryData;
    }
    return galleryData.filter(photo => photo.category === activeCategory);
  }, [activeCategory]);

  return {
    photos,
    activeCategory,
    setActiveCategory
  };
}