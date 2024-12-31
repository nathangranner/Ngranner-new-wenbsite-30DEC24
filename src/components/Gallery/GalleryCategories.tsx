import React from 'react';
import { Category } from './types';

interface GalleryCategoriesProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function GalleryCategories({ activeCategory, onCategoryChange }: GalleryCategoriesProps) {
  const categories: Category[] = ['All', 'Performance', 'Portrait', 'Behind the Scenes'];

  return (
    <div className="mt-12 flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-['Open_Sans'] transition-colors duration-200
            ${activeCategory === category
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}