import { Role } from './types';

export const roles: Record<string, Role> = {
  'aida-radames': {
    title: 'Aïda',
    role: 'Radames',
    opera: 'Aïda',
    company: 'Dayton Opera',
    year: '2025',
    description: `Nathan Granner makes his role debut as Radames in Verdi's grand opera Aïda. This monumental work showcases the complex character of Radames, an Egyptian military commander torn between his duty to his country and his love for Aïda, an Ethiopian princess enslaved in Egypt.`,
    reviews: 'Upcoming performance - reviews will be added after the premiere.',
    imageUrl: 'https://images.unsplash.com/photo-1533636721434-0e2d61030955?auto=format&fit=crop&q=80',
    imageAlt: 'Nathan Granner as Radames in Aïda'
  },
  
  'the-central-park-five-korey-wise': {
    title: 'The Central Park Five',
    role: 'Korey Wise',
    opera: 'The Central Park Five',
    company: 'Detroit Opera',
    year: '2025',
    description: `Nathan Granner returns to the powerful role of Korey Wise in Anthony Davis's Pulitzer Prize-winning opera. This contemporary masterpiece tells the harrowing true story of five teenagers wrongly convicted of a brutal crime in Central Park, focusing on their fight for justice and eventual exoneration.`,
    reviews: `"Granner's portrayal of Korey Wise was nothing short of extraordinary, bringing both vulnerability and strength to this challenging role." - Opera News`,
    externalLinks: [
      {
        title: 'Portland Opera Production Page',
        url: 'https://www.portlandopera.org/performance/the-central-park-five/'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80',
    imageAlt: 'Nathan Granner as Korey Wise'
  },

  'the-shining-ullman-grady': {
    title: 'The Shining',
    role: 'Ullman/Grady',
    opera: 'The Shining',
    company: 'Portland Opera',
    year: '2024',
    description: `In this chilling adaptation of Stephen King's The Shining, Nathan Granner takes on the dual roles of Stuart Ullman and Delbert Grady. These pivotal characters represent the malevolent influence of the Overlook Hotel, with Granner bringing distinct characterization to each role while maintaining their supernatural connection.`,
    reviews: `"Granner's portrayal of the dual roles adds layers of psychological complexity to the opera's supernatural elements." - Portland Monthly`,
    imageUrl: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80',
    imageAlt: 'Nathan Granner in The Shining'
  },

  'la-boheme-rodolfo': {
    title: 'La Bohème',
    role: 'Rodolfo',
    opera: 'La Bohème',
    company: 'Tacoma Opera',
    year: '2024',
    description: `Nathan Granner brings his signature warmth and passion to the role of Rodolfo in Puccini's beloved La Bohème. His interpretation of the struggling poet captures both the character's youthful optimism and deep emotional complexity, particularly in the famous aria "Che gelida manina" and the heart-wrenching final scene.`,
    reviews: `"Granner's Rodolfo was a revelation, combining vocal power with subtle dramatic nuance." - Seattle Times`,
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
    imageAlt: 'Nathan Granner as Rodolfo'
  },

  'tosca-mario-cavaradossi': {
    title: 'Tosca',
    role: 'Mario Cavaradossi',
    opera: 'Tosca',
    company: 'Opera Orlando',
    year: '2023',
    description: `In Puccini's thrilling Tosca, Nathan Granner embodies the passionate painter Mario Cavaradossi. His portrayal brings out both the character's artistic sensitivity and revolutionary fervor, culminating in a deeply moving "E lucevan le stelle" in the final act.`,
    reviews: `"Granner's Cavaradossi was masterfully sung and acted, bringing both heroic power and tender lyricism to this demanding role." - Orlando Sentinel`,
    imageUrl: 'https://images.unsplash.com/photo-1543964198-d54e4f0e44e3?auto=format&fit=crop&q=80',
    imageAlt: 'Nathan Granner as Mario Cavaradossi'
  },

  'carmen-don-jose': {
    title: 'Carmen',
    role: 'Don José',
    opera: 'Carmen',
    company: 'Opera Santa Barbara',
    year: '2023',
    description: `Nathan Granner tackles the complex role of Don José in Bizet's Carmen, portraying the character's dramatic descent from dutiful soldier to obsessed lover. His interpretation highlights the psychological transformation of Don José, bringing particular intensity to the famous Flower Song and the devastating final scene.`,
    reviews: `"Granner's Don José was a tour de force, charting the character's descent into obsession with frightening conviction." - Santa Barbara Independent`,
    imageUrl: 'https://images.unsplash.com/photo-1533636721434-0e2d61030955?auto=format&fit=crop&q=80',
    imageAlt: 'Nathan Granner as Don José'
  }
};