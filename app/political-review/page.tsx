import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PoliticalReview() {
  const sections = [
    {
      name: 'World',
      description: 'Focusing on international affairs and ongoing geopolitical trends across the globe. We welcome perspectives that contribute to objective reasoning and thoughtful, respectful discourse.',
      slug: 'world',
    },
    {
      name: 'US',
      description: "SPR's domestic section will cover current political events in the United States, delving deeper into their meaning, their relation to the past, and implications for the future.",
      slug: 'us',
    },
    {
      name: 'Economy',
      description: 'This section is everything finance, focused on economic impacts and implications in the U.S. and around the world.',
      slug: 'economy',
    },
    {
      name: 'Tech & Democracy',
      description: "How does innovation play a role in society? What role does government play in this? The STEM section will aim to answer questions like this, as well as cover views on technology, Silicon Valley, and why it matters in the U.S. and across the world.",
      slug: 'tech-democracy',
    },
    {
      name: 'Politics in Color',
      description: "This section showcases the convergence between creativity and politics, highlighting how art, literature, and cultural expression shape and challenge political ideas both domestically and abroad. If you're an artist, join this team or submit your favorite art political pieces to SPR!",
      slug: 'politics-in-color',
    },
  ];

  return (
    <div className="min-h-screen bg-[#5A0D0D]">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header - Columbia Style */}
        <section className="mb-12 border-b-2 border-white pb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-oswald)' }}>
            Political Review
          </h1>
          <p className="text-lg text-white/90" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Stanford's premier publication for political analysis and discourse
          </p>
        </section>

        {/* Latest Articles Section - Columbia Style */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-oswald)' }}>Latest</h2>
            <Link href="/political-review/archive" className="text-sm text-white/80 hover:text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Archive →
            </Link>
          </div>
          <div className="space-y-8">
            {/* Placeholder for latest articles - replace with actual article data */}
            {[1, 2, 3, 4].map((i) => (
              <article key={i} className="border-b border-white/30 pb-8 hover:opacity-80 transition-opacity cursor-pointer">
                <div className="flex gap-6">
                  <div className="w-40 h-40 bg-white/20 border-2 border-white/30 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-white/80" style={{ fontFamily: 'var(--font-cormorant)' }}>Section</span>
                      <span className="text-white/60">•</span>
                      <span className="text-sm text-white/80" style={{ fontFamily: 'var(--font-cormorant)' }}>Author Name</span>
                      <span className="text-white/60">•</span>
                      <span className="text-sm text-white/80" style={{ fontFamily: 'var(--font-cormorant)' }}>Nov 12, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 hover:text-white/80 transition-colors" style={{ fontFamily: 'var(--font-oswald)' }}>
                      Article Title Goes Here
                    </h3>
                    <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      Article excerpt or description goes here. This provides a brief overview of the article content and what readers can expect to learn. The excerpt should be engaging and informative...
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Featured Section - Columbia Style */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-oswald)' }}>Featured</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for featured articles */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <article key={i} className="bg-white border-2 border-white hover:border-black transition-colors cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-600 uppercase tracking-wide" style={{ fontFamily: 'var(--font-cormorant)' }}>Section</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-xs text-gray-600" style={{ fontFamily: 'var(--font-cormorant)' }}>Date</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 line-clamp-2" style={{ fontFamily: 'var(--font-oswald)' }}>
                    Featured Article Title Goes Here
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-2 mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Article excerpt or description goes here...
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-cormorant)' }}>Author Name</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-oswald)' }}>Sections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link
                key={section.name}
                href={`/political-review/${section.slug}`}
                className="group"
              >
                <div className="border-2 border-white p-8 h-full hover:bg-white hover:text-black transition-all">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-black" style={{ fontFamily: 'var(--font-oswald)' }}>{section.name}</h3>
                  <p className="mb-4 leading-relaxed text-white/90 group-hover:text-gray-700" style={{ fontFamily: 'var(--font-cormorant)' }}>{section.description}</p>
                  <span className="text-sm font-medium group-hover:underline text-white group-hover:text-black" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Column Section - Columbia Style */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-oswald)' }}>Column</h2>
            <Link href="/political-review/column" className="text-sm text-white/80 hover:text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Read More in Column →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <article key={i} className="border-2 border-white p-6 hover:bg-white hover:text-black transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-white/80 group-hover:text-gray-600" style={{ fontFamily: 'var(--font-cormorant)' }}>Author Name</span>
                  <span className="text-white/60 group-hover:text-gray-400">•</span>
                  <span className="text-sm text-white/80 group-hover:text-gray-600" style={{ fontFamily: 'var(--font-cormorant)' }}>Date</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-black mb-2" style={{ fontFamily: 'var(--font-oswald)' }}>
                  Column Title Goes Here
                </h3>
                <p className="text-white/90 group-hover:text-gray-700 text-sm line-clamp-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Column excerpt or description goes here...
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white border-2 border-white p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>Get Involved</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Join the Political Review team as a writer or analyst, or submit your work for publication.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScVFVRNB4BaPt4tWiiofO2eYgk_EZhLt1ymQ0urePQqHMiN6Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#8C1515] text-white hover:bg-[#6B0F0F] transition-colors font-bold border-2 border-black"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Join as Writer/Analyst
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfiEfRM_j5cmy3uB_FIfwSYq2-ysdLYRGgFYiT2ZfwmtEsUjw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-bold border-2 border-black"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              Community Submissions
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
