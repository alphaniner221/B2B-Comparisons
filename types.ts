export type Category = 'Business Software' | 'Marketing Tech';

export interface Post {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  excerpt: string;
  content: string; // Content will be a string of HTML
}

// FIX: Define and export ArticleType enum to resolve import errors.
export enum ArticleType {
  Listicle = 'listicle',
  Comparison = 'comparison',
}

// FIX: Define and export Tone enum to resolve import errors.
export enum Tone {
    Informative = 'Informative',
    Professional = 'Professional',
    Casual = 'Casual',
    Witty = 'Witty',
}

// FIX: Define and export GenerationParams interface to resolve import errors.
export interface GenerationParams {
  articleType: ArticleType;
  topic: string;
  tone: Tone;
}
