import React from 'react';
import { Post } from '../types';

interface PostPageProps {
  post: Post;
  onNavigateHome: () => void;
}

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const PostPage: React.FC<PostPageProps> = ({ post, onNavigateHome }) => {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <button 
          onClick={onNavigateHome}
          className="inline-flex items-center text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Articles
        </button>
      </div>
      
      <div className="space-y-4">
        <p className="text-base font-semibold text-purple-400">{post.category}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white">{post.title}</h1>
        <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg aspect-video object-cover" />
      </div>

      <div 
        className="prose prose-invert prose-lg max-w-none mt-12"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
  );
};

export default PostPage;