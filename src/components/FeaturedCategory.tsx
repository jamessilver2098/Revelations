import { posts, Post } from '../data/posts';
import PostCard from './PostCard';

interface FeaturedCategoryProps {
  category: 'Self Awareness & Spiritual Empowerment' | 'Meditative Poetry' | 'Redemptive Apocalypse' | 'Children Stories';
  title: string;
  description: string;
}

export default function FeaturedCategory({ category, title, description }: FeaturedCategoryProps) {
  const featuredPosts = posts.filter(post => post.category === category).slice(0, 3);

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cinzel text-gold animate-glow">{title}</h2>
          <p className="text-xl text-white/80 mt-4">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
