export type Category = 'Business Software' | 'Marketing Tech';

export interface Post {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  excerpt: string;
  content: string; // Content will be a string of HTML
}

// FIX: Add ArticleType enum to define the types of articles that can be generated.
export enum ArticleType {
    Listicle = 'listicle',
    Comparison = 'comparison',
}

// FIX: Add Tone enum to specify the tone of voice for the generated content. Values are lowercase for use in prompts.
export enum Tone {
    Informative = 'Informative',
    Professional = 'Professional',
    Casual = 'Casual',
    Witty = 'Witty',
}

// FIX: Add GenerationParams interface to type the parameters for the article generation service call.
export interface GenerationParams {
    articleType: ArticleType;
    topic: string;
    tone: Tone;
}
