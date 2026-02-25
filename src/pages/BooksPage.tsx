import { books } from '../data/books';
import PageTransition from '../components/PageTransition';

export default function BooksPage() {
  return (
    <PageTransition>
      <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-cinzel text-gold animate-glow">Library of Awakening</h1>
          <p className="text-xl text-white/80 mt-4">A curated collection of works to guide the journey inward.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {books.map(book => (
            <div key={book.id} className="bg-deep-navy/40 rounded-xl overflow-hidden shadow-lg hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-2 border border-gold/20 text-center flex flex-col">
              <img className="w-full h-96 object-cover" src={book.imageUrl} alt={book.title} referrerPolicy="no-referrer"/>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-cinzel font-bold text-white mb-3">{book.title}</h3>
                <p className="text-white/70 mb-4 flex-grow">{book.description}</p>
                <p className="text-2xl font-bold text-gold mb-6">{book.price}</p>
                <button className="mt-auto px-8 py-3 bg-gold text-deep-navy font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
