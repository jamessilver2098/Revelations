import FeaturedPosts from '../components/FeaturedPosts';
import EmailSubscription from '../components/EmailSubscription';
import PageTransition from '../components/PageTransition';
import FeaturedCategory from '../components/FeaturedCategory';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="relative text-white text-center py-40 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold italic capitalize text-gold animate-glow">
            unveil the greatness that never dies.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-8 text-white/80">
            Every soul is designed for timeless greatness — this space guides you back to your native light.
          </p>
          <button className="mt-12 px-8 py-3 bg-gold text-deep-navy font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105">
            Explore the Revelations
          </button>
        </div>
      </div>

      {/* About the Vision Section */}
      <div className="py-20 bg-deep-navy/50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-cinzel text-gold mb-8">About the Vision</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              “Greatness is not a distant dream — it is our native reality. Every soul is a radiant architect of its own peace, often lost in the illusions of time and turmoil. Here we rediscover that brilliance through reflection, awareness and inner stillness.”
            </p>
          </div>
        </div>
      </div>
      <FeaturedPosts />

      <FeaturedCategory 
        category="Children Stories"
        title="For the Young at Heart"
        description="Gentle tales to inspire wonder and kindness."
      />

      {/* Email Subscription Section */}
      <div className="bg-black/20 py-20">
        <div className="container mx-auto px-6">
          <EmailSubscription />
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
