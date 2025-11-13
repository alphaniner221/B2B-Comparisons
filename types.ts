export type Category = 'Business Software' | 'Marketing Tech';

export interface Post {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  excerpt: string;
  content: string; // Content will be a string of HTML
}

// FIX: Define and export ArticleType enum for content generation.
export enum ArticleType {
    Listicle = 'listicle',
    Comparison = 'comparison',
}

// FIX: Define and export Tone enum for content generation.
export enum Tone {
    Informative = 'Informative',
    Professional = 'Professional',
    Casual = 'Casual',
    Witty = 'Witty',
}

// FIX: Define and export GenerationParams interface for content generation.
export interface GenerationParams {
    articleType: ArticleType;
    topic: string;
    tone: Tone;
}
