import { useState } from 'react';

export default function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission to a backend service
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-cinzel text-gold">Thank You!</h3>
        <p className="text-white/80 mt-2">You are now subscribed to the celestial revelations.</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h3 className="text-3xl font-cinzel text-gold mb-4">Join the Celestial Circle</h3>
      <p className="text-white/70 max-w-xl mx-auto mb-8">Receive timeless wisdom and new revelations directly in your inbox.</p>
      <form onSubmit={handleSubmit} className="flex justify-center max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address..."
          className="w-full px-6 py-3 bg-deep-navy/50 border border-gold/30 rounded-l-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
          required
        />
        <button type="submit" className="px-8 py-3 bg-gold text-deep-navy font-bold rounded-r-full hover:bg-white transition-all duration-300">
          Subscribe
        </button>
      </form>
    </div>
  );
}
