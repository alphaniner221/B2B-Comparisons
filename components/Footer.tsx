import React from 'react';

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                &copy; {new Date().getFullYear()} B2B Comparisons. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    <TwitterIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    <LinkedinIcon className="h-5 w-5" />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;