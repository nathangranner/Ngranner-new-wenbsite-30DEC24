import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { AudioPlayer } from './AudioPlayer';
import { VideoPlayer } from './VideoPlayer';

const mediaContent = {
  audio: [
    {
      url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/DUMMY_TRACK_1',
      title: 'La Bohème - Che gelida manina'
    },
    {
      url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/DUMMY_TRACK_2',
      title: 'Carmen - La fleur que tu m\'avais jetée'
    }
  ],
  video: [
    {
      url: 'https://www.youtube.com/embed/DUMMY_VIDEO_1',
      title: 'Nathan Granner - Opera Highlights'
    },
    {
      url: 'https://www.youtube.com/embed/DUMMY_VIDEO_2',
      title: 'Behind the Scenes - The Central Park Five'
    }
  ]
};

export function Media() {
  return (
    <section id="media" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Media</SectionHeading>
        
        <div className="mt-16 space-y-16">
          <div>
            <h3 className="text-3xl font-bold font-['Playfair_Display'] mb-8">
              Audio
            </h3>
            <div className="space-y-6">
              {mediaContent.audio.map((audio, index) => (
                <AudioPlayer key={index} {...audio} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold font-['Playfair_Display'] mb-8">
              Video
            </h3>
            <div className="space-y-8">
              {mediaContent.video.map((video, index) => (
                <VideoPlayer key={index} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}