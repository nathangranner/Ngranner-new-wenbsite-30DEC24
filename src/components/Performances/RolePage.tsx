import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { roles } from './roleData';
import { RoleNavigation } from './RoleNavigation';

export function RolePage() {
  const { slug } = useParams();
  const roleInfo = roles[slug ?? ''] ?? {
    title: 'Role Not Found',
    description: 'This role information is not available.',
    reviews: '',
    imageUrl: '',
    imageAlt: ''
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link 
          to="/" 
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200 mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-5xl font-bold font-['Playfair_Display'] mb-4">
          {roleInfo.title}
        </h1>
        
        <div className="text-xl text-gray-300 mb-12 font-['Open_Sans']">
          {roleInfo.role} - {roleInfo.company}, {roleInfo.year}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
            {roleInfo.imageUrl ? (
              <img 
                src={roleInfo.imageUrl} 
                alt={roleInfo.imageAlt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Role Image Placeholder
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-['Playfair_Display'] mb-4">
                Description
              </h2>
              <p className="text-lg font-['Open_Sans'] text-gray-300">
                {roleInfo.description}
              </p>
            </div>

            {roleInfo.reviews && (
              <div>
                <h2 className="text-2xl font-bold font-['Playfair_Display'] mb-4">
                  Reviews
                </h2>
                <p className="text-lg font-['Open_Sans'] text-gray-300">
                  {roleInfo.reviews}
                </p>
              </div>
            )}

            {roleInfo.externalLinks && roleInfo.externalLinks.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold font-['Playfair_Display'] mb-4">
                  External Links
                </h2>
                <ul className="space-y-2">
                  {roleInfo.externalLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200"
                      >
                        {link.title}
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {slug && <RoleNavigation currentSlug={slug} />}
      </div>
    </div>
  );
}