import React from 'react';
import { Category } from '../types';

const SparkleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3L9.5 8.5L4 11L9.5 13.5L12 19L14.5 13.5L20 11L14.5 8.5L12 3Z" />
        <path d="M5 3L6 5" />
        <path d="M19 21L18 19" />
    </svg>
);

interface HeaderProps {
    onNavigateHome: () => void;
    onSelectCategory: (category: Category) => void;
    selectedCategory: Category | 'all';
}

const categories: Category[] = ['Business Software', 'Marketing Tech'];

const Header: React.FC<HeaderProps> = ({ onNavigateHome, onSelectCategory, selectedCategory }) => {
  return (
    <header className="bg-gray-900/70 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={onNavigateHome}
          >
            <div className="p-2 bg-purple-600/20 rounded-lg">
              <SparkleIcon className="text-purple-400 h-6 w-6"/>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              B2B Comparisons
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-2 sm:space-x-4">
            <button 
                onClick={onNavigateHome}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    selectedCategory === 'all' 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
            >
                Home
            </button>
            {categories.map(cat => (
                 <button 
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        selectedCategory === cat
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                 >
                    {cat}
                 </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;