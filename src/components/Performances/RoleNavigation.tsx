import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { roles } from './roleData';

interface RoleNavigationProps {
  currentSlug: string;
}

export function RoleNavigation({ currentSlug }: RoleNavigationProps) {
  const slugs = Object.keys(roles);
  const currentIndex = slugs.indexOf(currentSlug);
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center mt-12 border-t border-gray-800 pt-8">
      {prevSlug ? (
        <Link
          to={`/roles/${prevSlug}`}
          className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          <div>
            <div className="text-sm text-gray-400">Previous Role</div>
            <div className="font-['Playfair_Display']">{roles[prevSlug].role} in {roles[prevSlug].opera}</div>
          </div>
        </Link>
      ) : <div />}

      {nextSlug ? (
        <Link
          to={`/roles/${nextSlug}`}
          className="flex items-center text-white hover:text-gray-300 transition-colors duration-200 text-right"
        >
          <div>
            <div className="text-sm text-gray-400">Next Role</div>
            <div className="font-['Playfair_Display']">{roles[nextSlug].role} in {roles[nextSlug].opera}</div>
          </div>
          <ChevronRight className="h-5 w-5 ml-2" />
        </Link>
      ) : <div />}
    </div>
  );
}