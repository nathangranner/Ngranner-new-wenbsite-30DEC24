import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-5xl font-bold font-['Playfair_Display'] text-center text-inherit">
      {children}
    </h2>
  );
}