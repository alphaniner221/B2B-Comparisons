import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PostPage from './components/PostPage';
import { posts as allPosts } from './data/posts';
import { Post, Category } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'post'>('home');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
    setCurrentView('post');
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSelectedPost(null);
    setSelectedCategory('all');
  };
  
  const handleSelectCategory = (category: Category) => {
      setSelectedCategory(category);
      setCurrentView('home');
      setSelectedPost(null);
  }

  const postsToShow = selectedCategory === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-900 text-gray-200">
      <Header 
        onNavigateHome={handleNavigateHome}
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        {currentView === 'home' && <HomePage posts={postsToShow} onSelectPost={handleSelectPost} category={selectedCategory} />}
        {currentView === 'post' && selectedPost && <PostPage post={selectedPost} onNavigateHome={handleNavigateHome} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;