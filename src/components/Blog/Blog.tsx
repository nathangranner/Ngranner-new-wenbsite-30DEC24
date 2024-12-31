import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { BlogGrid } from './BlogGrid';

export function Blog() {
  return (
    <section id="blog" className="bg-[#f5f5f5] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Latest News</SectionHeading>
        <BlogGrid />
      </div>
    </section>
  );
}