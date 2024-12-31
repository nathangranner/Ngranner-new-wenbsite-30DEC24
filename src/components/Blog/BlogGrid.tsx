import React from 'react';
import { blogPosts } from './blogData';
import { Calendar } from 'lucide-react';

export function BlogGrid() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center text-gray-500 mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <time className="text-sm">{post.date}</time>
            </div>
            <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2">
              {post.title}
            </h3>
            <p className="font-['Open_Sans'] text-gray-600 mb-4">
              {post.excerpt}
            </p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}