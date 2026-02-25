import { posts } from '../data/posts';
import PostCard from './PostCard';

export default function FeaturedPosts() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-cinzel text-center text-gold mb-12 animate-glow">Featured Revelations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.slice(0, 3).map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
