
import React, { useState, useCallback } from 'react';
import { ArticleType, Tone } from '../types';
import { generateArticle } from '../services/geminiService';
import Tabs from './ui/Tabs';
import Input from './ui/Input';
import Button from './ui/Button';
import Spinner from './ui/Spinner';
import Select from './ui/Select';

// Define ReactMarkdown component outside of ContentGenerator
const ReactMarkdown: any = (window as any).ReactMarkdown;
const remarkGfm: any = (window as any).remarkGfm;

const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
);

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"></polyline></svg>
);


const ContentGenerator: React.FC = () => {
  const [articleType, setArticleType] = useState<ArticleType>(ArticleType.Listicle);
  const [topic, setTopic] = useState<string>('');
  const [tone, setTone] = useState<Tone>(Tone.Informative);
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleGenerate = useCallback(async () => {
    if (!topic.trim()) {
      setError('Please enter a topic.');
      return;
    }
    setError('');
    setIsLoading(true);
    setGeneratedContent('');
    try {
      const content = await generateArticle({ articleType, topic, tone });
      setGeneratedContent(content);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [articleType, topic, tone]);
  
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const getPlaceholderText = () => {
    return articleType === ArticleType.Listicle
      ? 'e.g., "Top 10 sci-fi movies of all time"'
      : 'e.g., "React vs. Vue.js"';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Panel */}
      <div className="flex flex-col space-y-6">
        <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">1. Choose Article Type</h2>
          <Tabs
            options={[
              { label: 'Listicle', value: ArticleType.Listicle },
              { label: 'Comparison', value: ArticleType.Comparison },
            ]}
            selectedValue={articleType}
            onChange={(value) => setArticleType(value as ArticleType)}
          />
        </div>
        
        <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">2. Define Your Topic</h2>
          <div className="space-y-4">
              <Input
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder={getPlaceholderText()}
              />
              <Select
                id="tone"
                label="Select Tone"
                value={tone}
                onChange={(e) => setTone(e.target.value as Tone)}
                options={[
                    { value: Tone.Informative, label: 'Informative' },
                    { value: Tone.Professional, label: 'Professional' },
                    { value: Tone.Casual, label: 'Casual' },
                    { value: Tone.Witty, label: 'Witty' },
                ]}
              />
          </div>
        </div>

        <Button onClick={handleGenerate} disabled={isLoading || !topic.trim()} className="w-full">
          {isLoading ? <><Spinner className="mr-2" /> Generating...</> : 'Spark Content'}
        </Button>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </div>

      {/* Output Panel */}
      <div className="relative p-6 bg-gray-800/50 border border-gray-700 rounded-lg min-h-[500px] lg:min-h-full">
         <div className="absolute top-4 right-4">
             {generatedContent && !isLoading && (
                 <Button onClick={handleCopyToClipboard} variant="secondary" size="sm">
                     {isCopied ? <CheckIcon className="h-4 w-4 mr-2 text-green-400"/> : <CopyIcon className="h-4 w-4 mr-2"/>}
                     {isCopied ? 'Copied!' : 'Copy Markdown'}
                 </Button>
             )}
         </div>
        <h2 className="text-xl font-semibold mb-4 text-white">Generated Content</h2>
        <div className="prose prose-invert prose-sm sm:prose-base max-w-none h-[calc(100%-40px)] overflow-y-auto">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <Spinner className="h-8 w-8 mb-4"/>
              <p className="font-medium">Generating your article...</p>
              <p className="text-sm">This might take a moment.</p>
            </div>
          )}
          {!isLoading && !generatedContent && (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>Your generated article will appear here.</p>
            </div>
          )}
          {generatedContent && (
            <div dangerouslySetInnerHTML={{ __html: generatedContent.replace(/\n/g, '<br />').replace(/### (.*?)<br \/>/g, '<h3>$1</h3>').replace(/# (.*?)<br \/>/g, '<h1>$1</h1>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator;
