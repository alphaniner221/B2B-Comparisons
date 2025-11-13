import React from 'react';
import { Post } from '../types';
import Button from './ui/Button';

interface BlogPostCardProps {
  post: Post;
  onSelectPost: (post: Post) => void;
}

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onSelectPost }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden flex flex-col group">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-medium text-purple-400 mb-2">{post.category}</p>
        <h3 className="text-xl font-semibold text-white mb-3 flex-grow">{post.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
        <div className="mt-auto">
           <button 
             onClick={() => onSelectPost(post)}
             className="inline-flex items-center text-sm font-semibold text-purple-400 hover:text-purple-300 group-hover:translate-x-1 transition-transform"
           >
              Read More
              <ArrowRightIcon className="ml-2 h-4 w-4" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;