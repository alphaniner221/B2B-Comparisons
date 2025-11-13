import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// --- TYPES ---
type Category = 'Business Software' | 'Marketing Tech';

interface Post {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  excerpt: string;
  content: string; // Content will be a string of HTML
}

// --- DATA ---
const posts: Post[] = [
  {
    id: 1,
    title: 'Salesforce vs. HubSpot: Which CRM Reigns Supreme for SMBs?',
    category: 'Business Software',
    imageUrl: 'https://images.unsplash.com/photo-1616587896649-7ca25a7c3a7c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt: 'A deep dive into the features, pricing, and scalability of two of the biggest names in the CRM industry to help you decide.',
    content: `
      <h2>The Core Difference: Philosophy</h2>
      <p>Choosing the right Customer Relationship Management (CRM) system is a critical decision for any small to medium-sized business (SMB). Two of the most dominant players in the market are Salesforce and HubSpot. While both offer robust feature sets, they cater to slightly different needs and business philosophies. This article breaks down the key differences to help you make an informed choice.</p>
      
      <h3>Key Feature Comparison</h3>
      <p>At their core, both platforms help you manage customer relationships, but their approaches differ. HubSpot is renowned for its user-friendly interface and its all-in-one marketing, sales, and service platform built from the ground up. Salesforce, on the other hand, is a powerhouse of customization and scalability, offering a vast ecosystem of apps via its AppExchange.</p>
      
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Salesforce</th>
            <th>HubSpot</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Ease of Use</td><td>Steeper learning curve</td><td>Highly intuitive</td></tr>
          <tr><td>Customization</td><td>Virtually limitless</td><td>Good, but more structured</td></tr>
          <tr><td>App Ecosystem</td><td>Massive (AppExchange)</td><td>Growing, solid integrations</td></tr>
          <tr><td>Pricing Model</td><td>Per-user, per-month</td><td>Freemium, with tiered plans</td></tr>
        </tbody>
      </table>

      <h3>Pros and Cons</h3>
      <h4>Salesforce</h4>
      <ul>
        <li><strong>Pros:</strong> Unmatched scalability, deep customization, extensive third-party app support.</li>
        <li><strong>Cons:</strong> Can be expensive, complex setup requires expertise, overwhelming for small teams.</li>
      </ul>
      <h4>HubSpot</h4>
      <ul>
        <li><strong>Pros:</strong> Excellent user experience, powerful free tools, strong focus on inbound marketing.</li>
        <li><strong>Cons:</strong> Advanced features can get pricey, less customizable than Salesforce at the enterprise level.</li>
      </ul>

      <h3>Conclusion: Who Wins?</h3>
      <p>For SMBs and startups that prioritize ease of use and an integrated inbound marketing and sales process, <strong>HubSpot</strong> is often the superior choice. Its free CRM is incredibly powerful and provides a seamless growth path. For larger businesses or those with very specific, complex requirements that demand deep customization and have the resources for implementation, <strong>Salesforce</strong> remains the undisputed king of scalability.</p>
    `,
  },
  {
    id: 2,
    title: 'Mailchimp vs. ConvertKit: The Email Marketing Platform Battle',
    category: 'Marketing Tech',
    imageUrl: 'https://images.unsplash.com/photo-1589223164103-3112c7849e79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt: 'We compare Mailchimp\'s broad appeal against ConvertKit\'s creator-focused features to see which is better for your audience.',
    content: `
      <h2>Creator-Focused vs. General Purpose</h2>
      <p>Email marketing remains one of the most effective ways to connect with your audience. Mailchimp and ConvertKit are two leading platforms, but they are built for different types of users. Mailchimp is a general-purpose tool perfect for businesses of all sizes, while ConvertKit is laser-focused on bloggers, authors, and online creators.</p>
      
      <h3>Core Philosophy and Audience</h3>
      <p>Mailchimp is designed around traditional email lists. It excels at creating visually appealing campaigns and offers a wide range of features, including landing pages, social media ads, and postcards. ConvertKit operates on a subscriber-centric model. Every person on your list is a single subscriber who can be tagged and segmented based on their actions, making it incredibly powerful for automated funnels and targeted messaging.</p>
      
      <h3>Feature Breakdown</h3>
      <h4>Mailchimp</h4>
      <ul>
        <li><strong>Strengths:</strong> Award-winning UI, beautiful email templates, robust A/B testing, and a generous free plan for beginners.</li>
        <li><strong>Weaknesses:</strong> Automation can be less intuitive than ConvertKit, and managing subscribers across multiple lists can be cumbersome.</li>
      </ul>
      <h4>ConvertKit</h4>
      <ul>
        <li><strong>Strengths:</strong> Powerful and easy-to-use visual automations, flexible tagging and segmentation, creator-focused tools like paid newsletters.</li>
        <li><strong>Weaknesses:</strong> Fewer email template options, free plan is more limited, can be more expensive for larger lists.</li>
      </ul>
      
      <h3>Conclusion: The Verdict</h3>
      <p>If you are a small business, a brick-and-mortar store, or someone who values highly designed, campaign-style emails, <strong>Mailchimp</strong> is a fantastic, user-friendly choice. If you are a professional creator, blogger, or podcaster whose business relies on building a direct relationship with your audience through automated funnels and targeted content, <strong>ConvertKit</strong> is the superior tool built specifically for your needs.</p>
    `,
  },
  {
    id: 3,
    title: 'Slack vs. Microsoft Teams: The Ultimate Team Collaboration Tool?',
    category: 'Business Software',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt: 'In the world of remote work, team communication is key. We break down the differences between the channel-based chat giant and the Microsoft 365 integrated behemoth.',
    content: `
      <h2>Ecosystem vs. Best-in-Class</h2>
      <p>Effective team communication is the backbone of modern business. Slack and Microsoft Teams are the two undisputed leaders in this space, but they offer fundamentally different experiences and integration philosophies.</p>
      
      <h3>Integration and Ecosystem</h3>
      <p>The biggest differentiator is the ecosystem. <strong>Microsoft Teams</strong> is deeply integrated into the Microsoft 365 suite. If your organization runs on Outlook, OneDrive, and Office, Teams is a natural and powerful extension, bundling chat, video meetings, and file storage in one place. <strong>Slack</strong>, while it integrates well with almost everything, is a best-in-class, standalone product. Its vast app directory allows you to connect it to any tool you use, from Google Workspace to Jira, but these are third-party connections.</p>
      
      <h3>User Experience and Features</h3>
      <p>Slack is often praised for its polished, fun, and intuitive user interface. It feels less corporate and more focused on the core chat experience, with features like Huddles for quick audio chats and a powerful search function. Teams has a more structured, corporate feel, but its video conferencing capabilities are generally considered more robust and feature-rich than Slack's.</p>

      <h4>Key Distinctions</h4>
      <ul>
        <li><strong>Video/Meetings:</strong> Teams has a clear advantage with its robust, built-in video conferencing.</li>
        <li><strong>Integrations:</strong> Slack has more third-party integrations, while Teams has deeper first-party Microsoft integrations.</li>
        <li><strong>User Interface:</strong> Slack is often preferred for its clean and engaging UX.</li>
        <li><strong>Pricing:</strong> Teams is often "free" as it's bundled with Microsoft 365 plans many businesses already pay for. Slack has a good free tier but can become more expensive at scale.</li>
      </ul>

      <h3>Conclusion: Which Should You Choose?</h3>
      <p>For organizations heavily invested in the <strong>Microsoft 365 ecosystem</strong>, Microsoft Teams is the logical and cost-effective choice. It provides a seamless, all-in-one hub for collaboration. For companies that prioritize a best-in-class chat experience, a more playful culture, and need to integrate with a wide variety of non-Microsoft tools, <strong>Slack</strong> remains the gold standard for team communication.</p>
    `,
  },
];

// --- COMPONENTS ---

const SparkleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3L9.5 8.5L4 11L9.5 13.5L12 19L14.5 13.5L20 11L14.5 8.5L12 3Z" />
    </svg>
);

const ArrowRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
const ArrowLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);
const TwitterIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);
const LinkedinIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
);


const BlogPostCard = ({ post, onSelectPost }) => (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden flex flex-col group transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-800">
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

const PostPage = ({ post, onNavigateHome }) => (
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
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{post.title}</h1>
        <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg aspect-video object-cover" />
      </div>

      <div 
        className="prose prose-invert prose-lg max-w-none mt-12"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
);

const HomePage = ({ posts, onSelectPost, category }) => {
  const getTitle = () => (category === 'all' ? "B2B Insights & Comparisons" : category);
  const getSubtitle = () => (category === 'all' 
    ? "In-depth reviews and analysis of business software and marketing technology."
    : `Articles in the ${category} category.`
  );

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
        {posts.map(post => <BlogPostCard key={post.id} post={post} onSelectPost={onSelectPost} />)}
      </div>
    </div>
  );
};

const Header = ({ onNavigateHome, onSelectCategory, selectedCategory }) => {
  const categories = ['Business Software', 'Marketing Tech'];
  return (
    <header className="bg-gray-900/70 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
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
          <nav className="hidden sm:flex items-center space-x-4">
            <button 
                onClick={onNavigateHome}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${selectedCategory === 'all' ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
            >
                Home
            </button>
            {categories.map(cat => (
                 <button 
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${selectedCategory === cat ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
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

const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                &copy; {new Date().getFullYear()} B2B Comparisons. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
                    <TwitterIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                    <LinkedinIcon className="h-5 w-5" />
                </a>
            </div>
        </div>
      </div>
    </footer>
);

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    setCurrentView('post');
    window.scrollTo(0, 0);
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSelectedPost(null);
    setSelectedCategory('all');
  };
  
  const handleSelectCategory = (category) => {
      setSelectedCategory(category);
      setCurrentView('home');
      setSelectedPost(null);
  }

  const postsToShow = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-200">
      <Header 
        onNavigateHome={handleNavigateHome}
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
      />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        {currentView === 'home' && <HomePage posts={postsToShow} onSelectPost={handleSelectPost} category={selectedCategory} />}
        {currentView === 'post' && selectedPost && <PostPage post={selectedPost} onNavigateHome={handleNavigateHome} />}
      </main>
      <Footer />
    </div>
  );
};

// --- RENDER THE APP ---
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);