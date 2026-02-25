import { Post } from '../data/posts';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link to={`/blog/${post.id}`}>
      <div className="bg-deep-navy/40 rounded-xl overflow-hidden shadow-lg hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gold/20 h-full flex flex-col">
        <img className="w-full h-56 object-cover" src={post.imageUrl} alt={post.title} referrerPolicy="no-referrer"/>
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-gold text-sm font-semibold mb-2">{post.category}</p>
          <h3 className="text-2xl font-cinzel font-bold text-white mb-3">{post.title}</h3>
          <p className="text-white/70 mb-4 flex-grow">{post.excerpt}</p>
          <div className="text-sm text-white/50 mt-auto">
            <span>By {post.author}</span> &middot; <span>{post.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
