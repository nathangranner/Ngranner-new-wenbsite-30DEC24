import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function Contact() {
  return (
    <section id="contact" className="bg-[#f5f5f5] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Contact</SectionHeading>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}