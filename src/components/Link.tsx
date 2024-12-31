import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="text-white hover:text-gray-300 transition-colors duration-200 font-['Open_Sans']"
    >
      {children}
    </a>
  );
}