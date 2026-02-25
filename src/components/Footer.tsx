import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black/20 border-t border-gold/20 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-cinzel text-lg text-gold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-white/70">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <Link to="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <Link to="/books" className="hover:text-gold transition-colors">Books</Link>
              <Link to="/about" className="hover:text-gold transition-colors">About</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-cinzel text-lg text-gold mb-4">Contact Us</h3>
            <p className="text-white/70">contact@celestialsecrets.com</p>
            <p className="text-white/70">A Sanctuary for the Soul</p>
          </div>
          <div>
            <h3 className="font-cinzel text-lg text-gold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6 text-white/70">
              <a href="#" className="hover:text-gold transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-gold transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-gold transition-colors"><Youtube /></a>
              <a href="#" className="hover:text-gold transition-colors"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-white/50 mt-12 pt-8 border-t border-gold/20">
          <p>&copy; 2026 Revealed Celestial Secrets. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
