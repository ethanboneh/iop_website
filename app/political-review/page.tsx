import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PoliticalReview() {
  const sections = [
    {
      name: 'World',
      description: 'Focusing on international affairs and ongoing geopolitical trends across the globe. We welcome perspectives that contribute to objective reasoning and thoughtful, respectful discourse.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'US',
      description: "SPR's domestic section will cover current political events in the United States, delving deeper into their meaning, their relation to the past, and implications for the future.",
      color: 'from-red-600 to-red-700',
    },
    {
      name: 'Economy',
      description: 'This section is everything finance, focused on economic impacts and implications in the U.S. and around the world.',
      color: 'from-green-600 to-green-700',
    },
    {
      name: 'Tech & Democracy',
      description: "How does innovation play a role in society? What role does government play in this? The STEM section will aim to answer questions like this, as well as cover views on technology, Silicon Valley, and why it matters in the U.S. and across the world.",
      color: 'from-purple-600 to-purple-700',
    },
    {
      name: 'Politics in Color',
      description: "This section showcases the convergence between creativity and politics, highlighting how art, literature, and cultural expression shape and challenge political ideas both domestically and abroad. If you're an artist, join this team or submit your favorite art political pieces to SPR!",
      color: 'from-pink-600 to-pink-700',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Political Review
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stanford's premier publication for political analysis and discourse
          </p>
        </section>

        {/* Featured Articles Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Placeholder for featured articles - replace with actual article components */}
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200"></div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Section</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2 line-clamp-2">
                  Featured Article Title Goes Here
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  Article excerpt or description goes here...
                </p>
                <span className="text-sm text-red-600 mt-4 inline-block">Read More →</span>
              </div>
            </article>
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200"></div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Section</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2 line-clamp-2">
                  Featured Article Title Goes Here
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  Article excerpt or description goes here...
                </p>
                <span className="text-sm text-red-600 mt-4 inline-block">Read More →</span>
              </div>
            </article>
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200"></div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Section</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2 line-clamp-2">
                  Featured Article Title Goes Here
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  Article excerpt or description goes here...
                </p>
                <span className="text-sm text-red-600 mt-4 inline-block">Read More →</span>
              </div>
            </article>
          </div>
        </section>

        {/* Section Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link
                key={section.name}
                href={`/political-review/${section.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className={`bg-gradient-to-br ${section.color} rounded-lg p-8 text-white h-full hover:shadow-xl transition-shadow`}>
                  <h3 className="text-2xl font-bold mb-3">{section.name}</h3>
                  <p className="text-white/90 mb-4">{section.description}</p>
                  <span className="text-white/80 group-hover:text-white font-medium">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                All
              </button>
              {sections.slice(0, 4).map((section) => (
                <button
                  key={section.name}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {/* Placeholder for latest articles - replace with actual article data */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <article key={i} className="border-b border-gray-200 pb-6 hover:opacity-80 transition-opacity cursor-pointer">
                <div className="flex gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-gray-500">Section</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">Date</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-red-600">
                      Article Title Goes Here
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      Article excerpt or description goes here. This provides a brief overview of the article content and what readers can expect to learn...
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-sm text-gray-500">Author Name</span>
                      <span className="text-red-600 text-sm font-medium">Read More →</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join the Political Review team as a writer or analyst, or submit your work for publication.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.gle/example"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Join as Writer/Analyst
            </a>
            <a
              href="https://forms.gle/example"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
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

