import React from 'react';
import { Mail } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold font-['Playfair_Display']">
        Get in Touch
      </h3>
      
      <p className="text-lg font-['Open_Sans']">
        For booking inquiries and other professional matters, please contact:
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5" />
          <span className="text-lg font-['Open_Sans']">
            nathan.granner@example.com
          </span>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-xl font-bold font-['Playfair_Display'] mb-4">
          Management
        </h4>
        <p className="text-lg font-['Open_Sans']">
          Jane Doe<br />
          jane.doe@management.com
        </p>
      </div>
    </div>
  );
}