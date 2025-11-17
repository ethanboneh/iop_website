import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Democracy for All Section */}
        <section className="mb-16">
          <div className="bg-[#8C1515] p-12 text-white text-center border-2 border-black">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>A Democracy for All</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
              The Institute of Politics at Stanford is committed to fostering democratic engagement, 
              political discourse, and public service among students and the broader community.
            </p>
            <Link 
              href="/opportunities"
              className="inline-block px-8 py-3 bg-white text-[#8C1515] font-bold hover:bg-gray-100 transition-colors border-2 border-black"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Explore Opportunities
            </Link>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>Our Mission</h2>
          <p className="text-xl text-gray-900 leading-relaxed max-w-4xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
            We inspire students to be civically engaged and democratically focused by preparing undergraduates to become future leaders and explore pathways in government service.
          </p>
        </section>

        {/* Leadership Team Section - Cleaner Layout */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'var(--font-oswald)' }}>Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example leadership cards - replace with actual data */}
            <div className="border-2 border-gray-300 p-6 hover:border-black transition-colors">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-black text-center mb-2" style={{ fontFamily: 'var(--font-oswald)' }}>Name</h3>
              <p className="text-[#3C6AA9] text-center mb-3 font-bold" style={{ fontFamily: 'var(--font-cormorant)' }}>Position</p>
              <p className="text-sm text-gray-700 text-center leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>Brief bio or description goes here. This can include their background, expertise, and current work.</p>
            </div>
            <div className="border-2 border-gray-300 p-6 hover:border-black transition-colors">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-black text-center mb-2" style={{ fontFamily: 'var(--font-oswald)' }}>Name</h3>
              <p className="text-[#3C6AA9] text-center mb-3 font-bold" style={{ fontFamily: 'var(--font-cormorant)' }}>Position</p>
              <p className="text-sm text-gray-700 text-center leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>Brief bio or description goes here. This can include their background, expertise, and current work.</p>
            </div>
            <div className="border-2 border-gray-300 p-6 hover:border-black transition-colors">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-black text-center mb-2" style={{ fontFamily: 'var(--font-oswald)' }}>Name</h3>
              <p className="text-[#3C6AA9] text-center mb-3 font-bold" style={{ fontFamily: 'var(--font-cormorant)' }}>Position</p>
              <p className="text-sm text-gray-700 text-center leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>Brief bio or description goes here. This can include their background, expertise, and current work.</p>
            </div>
          </div>
        </section>

        {/* Masthead Section - Cleaner Layout */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'var(--font-oswald)' }}>Masthead</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example masthead cards - replace with actual data */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="border border-gray-300 p-4 text-center hover:border-black transition-colors">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3"></div>
                <h4 className="font-bold text-black mb-1" style={{ fontFamily: 'var(--font-oswald)' }}>Name</h4>
                <p className="text-sm text-[#3C6AA9] font-bold" style={{ fontFamily: 'var(--font-cormorant)' }}>Role</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
