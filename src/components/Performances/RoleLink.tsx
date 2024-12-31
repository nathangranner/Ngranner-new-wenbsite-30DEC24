import React from 'react';
import { Link } from 'react-router-dom';

interface RoleLinkProps {
  role: string;
  opera: string;
}

export function RoleLink({ role, opera }: RoleLinkProps) {
  const slug = `${opera.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${role.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  
  return (
    <Link 
      to={`/roles/${slug}`}
      className="text-white hover:text-gray-300 transition-colors duration-200 underline decoration-dotted underline-offset-4"
    >
      {role}
    </Link>
  );
}