
import React from 'react';

const SparkleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3L9.5 8.5L4 11L9.5 13.5L12 19L14.5 13.5L20 11L14.5 8.5L12 3Z" />
        <path d="M5 3L6 5" />
        <path d="M19 21L18 19" />
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-600/20 rounded-lg">
            <SparkleIcon className="text-purple-400 h-6 w-6"/>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Content Spark
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
