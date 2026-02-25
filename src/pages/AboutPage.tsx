import PageTransition from '../components/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-cinzel text-gold animate-glow mb-8">About Us</h1>
          <div className="prose prose-invert prose-lg max-w-none mx-auto text-white/90 prose-headings:text-gold prose-headings:font-cinzel prose-a:text-gold prose-strong:text-gold">
            <p>
              Welcome to Revealed Celestial Secrets, a sanctuary for the soul's remembrance. Our mission is to provide a space for reflection, awareness, and inner stillness, guiding you back to the timeless greatness that is your native reality.
            </p>
            <p>
              This platform was founded on the principle that every soul is a radiant architect of its own peace. Through our writings, books, and community, we aim to help you rediscover the brilliance that often gets lost in the illusions of time and turmoil.
            </p>
            <p>
              Our content explores a range of topics, from self-awareness and spiritual empowerment to meditative poetry and redemptive apocalypse. We believe that the journey inward is the most profound adventure one can embark upon, and we are honored to be a companion on your path.
            </p>
            <p>
              Thank you for being here. May you find what you seek, and may you remember the magnificent light that you have always been.
            </p>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
