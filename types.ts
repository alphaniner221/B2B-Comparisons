
export enum ArticleType {
  Listicle = 'listicle',
  Comparison = 'comparison',
}

export enum Tone {
    Professional = 'professional',
    Casual = 'casual',
    Witty = 'witty',
    Informative = 'informative',
}

export interface GenerationParams {
    articleType: ArticleType;
    topic: string;
    tone: Tone;
}
