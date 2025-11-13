
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentGenerator from './components/ContentGenerator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-900 text-gray-200">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ContentGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default App;
