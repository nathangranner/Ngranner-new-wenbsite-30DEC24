import React from 'react';

interface AudioPlayerProps {
  url: string;
  title: string;
}

export function AudioPlayer({ url, title }: AudioPlayerProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={url}
        title={title}
        className="w-full"
      />
    </div>
  );
}