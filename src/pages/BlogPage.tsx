import { useState, useMemo } from 'react';
import { posts, Post } from '../data/posts';
import PostCard from '../components/PostCard';
import PageTransition from '../components/PageTransition';

const categories = [
  'All Categories',
  'Self Awareness & Spiritual Empowerment',
  'Meditative Poetry',
  'Children Stories',
  'Redemptive Apocalypse',
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredPosts = useMemo(() => {
    return posts
      .filter(post => {
        return selectedCategory === 'All Categories' || post.category === selectedCategory;
      })
      .filter(post => {
        return post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [searchTerm, selectedCategory]);

  return (
    <PageTransition>
      <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-cinzel text-gold animate-glow">The Celestial Archives</h1>
          <p className="text-xl text-white/80 mt-4">A collection of writings for the awakening soul.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <input
            type="text"
            placeholder="Search revelations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 px-6 py-3 bg-deep-navy/50 border border-gold/30 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/3 px-6 py-3 bg-deep-navy/50 border border-gold/30 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all appearance-none text-center"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="text-center text-white/70 col-span-full">No posts found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
