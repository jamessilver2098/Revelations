import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import Markdown from 'react-markdown';
import PageTransition from '../components/PageTransition';

export default function PostPage() {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find(p => p.id === Number(postId));

  if (!post) {
    return <div className="text-center py-20">Post not found.</div>;
  }

  return (
    <PageTransition>
      <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-cinzel text-gold text-center mb-8 animate-glow">{post.title}</h1>
          <img className="w-full h-96 object-cover rounded-xl mb-8" src={post.imageUrl} alt={post.title} referrerPolicy="no-referrer"/>
          <div className="prose prose-invert prose-lg max-w-none mx-auto text-white/90 prose-headings:text-gold prose-headings:font-cinzel prose-a:text-gold prose-strong:text-gold">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
