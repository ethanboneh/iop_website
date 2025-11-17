import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-20 pb-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
            Institute of Politics
          </h1>
          <p className="text-2xl md:text-3xl text-gray-900 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
            at Stanford
          </p>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mt-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            We inspire students to be civically engaged and democratically focused by preparing undergraduates to become future leaders and explore pathways in government service.
          </p>
        </section>

        {/* Call to Action Cards */}
        <section className="pb-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a 
              href="#mailing-list"
              className="bg-white border-2 border-black p-8 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-black mb-2 hover:text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
                Join Mailing List
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Stay updated with IOP events and opportunities
              </p>
            </a>

            <a 
              href="#exec-team"
              className="bg-white border-2 border-black p-8 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-black mb-2 hover:text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
                Apply to Exec Team
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Join our executive leadership team
              </p>
            </a>

            <a 
              href="https://instagram.com/iopstanford"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-black p-8 hover:bg-[#8C1515] hover:text-white transition-all cursor-pointer"
            >
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-xl font-bold text-black mb-2 hover:text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
                Follow @iopstanford
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Connect with us on Instagram
              </p>
            </a>
          </div>
        </section>

        {/* Mailing List Form */}
        <section id="mailing-list" className="pb-20">
          <div className="max-w-2xl mx-auto bg-white border-2 border-black p-8">
            <h2 className="text-3xl font-bold text-black mb-4 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              Join Our Mailing List
            </h2>
            <p className="text-gray-700 mb-6 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Stay informed about IOP events, opportunities, and updates.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-black mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 focus:border-[#8C1515] focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-black mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border-2 border-gray-300 focus:border-[#8C1515] focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#8C1515] text-white py-3 font-bold hover:bg-[#6B0F0F] transition-colors border-2 border-black"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Note: This form requires backend integration. Connect it to your email service provider.
            </p>
          </div>
        </section>

        {/* Exec Team Application */}
        <section id="exec-team" className="pb-20">
          <div className="max-w-2xl mx-auto bg-white border-2 border-black p-8">
            <h2 className="text-3xl font-bold text-black mb-4 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>
              Apply to Executive Team
            </h2>
            <p className="text-gray-700 mb-6 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Join the IOP executive leadership team and help shape the future of political engagement at Stanford.
            </p>
            <div className="space-y-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeRnF60R9DNm8tuWp1nfbtL1Fq3z6RcfJev8Ayh6LuhTqLSyg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#8C1515] text-white py-3 font-bold hover:bg-[#6B0F0F] transition-colors text-center border-2 border-black"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Apply to Executive Team
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="pb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'var(--font-oswald)' }}>Explore</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/political-review"
                className="px-8 py-3 bg-[#8C1515] text-white hover:bg-[#6B0F0F] transition-colors font-bold border-2 border-black"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Political Review
              </Link>
              <Link 
                href="/about"
                className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-bold border-2 border-black"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                About Us
              </Link>
              <Link 
                href="/opportunities"
                className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-bold border-2 border-black"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Events
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
