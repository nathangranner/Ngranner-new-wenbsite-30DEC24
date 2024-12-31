import React from 'react';

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-lg font-['Open_Sans'] mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-lg font-['Open_Sans'] mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-lg font-['Open_Sans'] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
      
      <button
        type="submit"
        className="bg-black text-white px-8 py-3 rounded-lg font-['Open_Sans'] font-bold text-lg
                 hover:bg-gray-800 transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}