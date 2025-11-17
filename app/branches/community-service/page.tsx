import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function CommunityService() {
  return (
    <div className="min-h-screen bg-[#5A0D0D]">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
          Community-Engaged Direct Service
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-black p-8 text-center">
            <p className="text-gray-700 text-lg" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Information about this branch is coming soon. Check back later for updates.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

