
import { GoogleGenAI } from "@google/genai";
import { ArticleType, GenerationParams, Tone } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getListiclePrompt = (topic: string, tone: Tone): string => `
Act as an expert content creator and SEO specialist. Your task is to generate a 'Top 10' listicle about "${topic}".
The article must be engaging, well-structured, and formatted in Markdown. It must include:
1. A catchy, SEO-friendly title (H1 level).
2. A brief, compelling introduction to the topic (2-3 sentences).
3. A numbered list from 1 to 10. Each item in the list must have a bolded title (H3 level: ###) followed by a detailed, informative paragraph.
4. A concise concluding paragraph that summarizes the list and offers a final thought.
The tone of the article should be ${tone}. Do not include any pre-amble or explanation of what you are about to do. Just generate the article.
`;

const getComparisonPrompt = (topic: string, tone: Tone): string => `
Act as an expert analyst and content creator. Your task is to generate a comprehensive comparison article about "${topic}".
The topic will be in the format 'A vs. B'. The article must be balanced, insightful, and formatted in Markdown. It must include:
1. A catchy title for the comparison (H1 level).
2. An introduction that briefly presents both sides of the comparison.
3. Detailed sections comparing key aspects. Use subheadings (H3 level: ###) for each aspect. Where appropriate, use a Markdown table for a side-by-side feature comparison.
4. A 'Pros and Cons' section for each item being compared, using bullet points under H3 subheadings.
5. A conclusion that summarizes the comparison and provides a clear recommendation on who should choose each option.
The tone of the article should be ${tone}. Do not include any pre-amble or explanation of what you are about to do. Just generate the article.
`;

export const generateArticle = async (params: GenerationParams): Promise<string> => {
    const { articleType, topic, tone } = params;

    const prompt = articleType === ArticleType.Listicle
        ? getListiclePrompt(topic, tone)
        : getComparisonPrompt(topic, tone);

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        
        return response.text;
    } catch (error) {
        console.error("Error generating content with Gemini:", error);
        if (error instanceof Error) {
            return `Error: Failed to generate content. ${error.message}`;
        }
        return "Error: An unknown error occurred while generating content.";
    }
};
