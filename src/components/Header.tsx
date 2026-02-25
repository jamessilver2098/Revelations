import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-deep-navy/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Revealed Celestial Secrets Logo" className="h-10 w-10" />
          <span className="text-xl font-cinzel font-bold text-gold">Revealed Celestial Secrets</span>
        </Link>
        <div className="space-x-8">
          <Link to="/" className="text-white hover:text-gold transition-colors">Home</Link>
          <Link to="/blog" className="text-white hover:text-gold transition-colors">Blog</Link>
          <Link to="/books" className="text-white hover:text-gold transition-colors">Books</Link>
          <Link to="/about" className="text-white hover:text-gold transition-colors">About</Link>
        </div>
      </nav>
    </header>
  );
}
