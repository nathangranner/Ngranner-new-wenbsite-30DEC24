import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { GalleryGrid } from './GalleryGrid';
import { GalleryCategories } from './GalleryCategories';
import { useGallery } from './useGallery';

export function Gallery() {
  const { photos, activeCategory, setActiveCategory } = useGallery();

  return (
    <section id="gallery" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Gallery</SectionHeading>
        
        <GalleryCategories 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        <GalleryGrid photos={photos} />
      </div>
    </section>
  );
}