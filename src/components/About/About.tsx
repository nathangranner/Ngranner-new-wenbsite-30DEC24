import React from 'react';
import { Biography } from './Biography';
import { SectionHeading } from '../common/SectionHeading';

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>About Nathan</SectionHeading>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="aspect-square w-full max-w-[500px] mx-auto overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1520516415634-923c06bfd5eb?auto=format&fit=crop&q=80"
                alt="Nathan Granner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <Biography />
        </div>
      </div>
    </section>
  );
}