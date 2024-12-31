import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PastPerformances } from './PastPerformances';

export function Performances() {
  return (
    <section id="performances" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Performances</SectionHeading>
        <div className="mt-16">
          <PastPerformances />
        </div>
      </div>
    </section>
  );
}