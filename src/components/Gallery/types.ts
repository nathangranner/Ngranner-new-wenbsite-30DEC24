export type Category = 'All' | 'Performance' | 'Portrait' | 'Behind the Scenes';

export interface Photo {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: Exclude<Category, 'All'>;
}