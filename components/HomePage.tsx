import React from 'react';
import { Post, Category } from '../types';
import BlogPostCard from './BlogPostCard';

interface HomePageProps {
  posts: Post[];
  onSelectPost: (post: Post) => void;
  category: Category | 'all';
}

const HomePage: React.FC<HomePageProps> = ({ posts, onSelectPost, category }) => {
  const getTitle = () => {
    if (category === 'all') {
      return "B2B Insights & Comparisons";
    }
    return category;
  }
  
  const getSubtitle = () => {
     if (category === 'all') {
      return "In-depth reviews and analysis of business software and marketing technology.";
    }
    return `Articles in the ${category} category.`
  }

  return (
    <div className="space-y-12">
      <div className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          {getTitle()}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          {getSubtitle()}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogPostCard key={post.id} post={post} onSelectPost={onSelectPost} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;