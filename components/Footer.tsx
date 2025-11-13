
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Content Spark. AI-powered content generation.</p>
      </div>
    </footer>
  );
};

export default Footer;
