import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-20 pb-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Institute of Politics
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            at Stanford
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
            Fostering democratic engagement and political discourse
          </p>
        </section>

        {/* Call to Action Cards */}
        <section className="pb-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a 
              href="#mailing-list"
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-red-500 cursor-pointer"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Join Mailing List
              </h3>
              <p className="text-gray-600">
                Stay updated with IOP events and opportunities
              </p>
            </a>

            <a 
              href="#exec-team"
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-red-500 cursor-pointer"
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Apply to Exec Team
              </h3>
              <p className="text-gray-600">
                Join our executive leadership team
              </p>
            </a>

            <a 
              href="https://instagram.com/iopstanford"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-red-500 cursor-pointer"
            >
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Follow @iopstanford
              </h3>
              <p className="text-gray-600">
                Connect with us on Instagram
              </p>
            </a>
          </div>
        </section>

        {/* Mailing List Form */}
        <section id="mailing-list" className="pb-20">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Join Our Mailing List
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Stay informed about IOP events, opportunities, and updates.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your Name"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Note: This form requires backend integration. Connect it to your email service provider.
            </p>
          </div>
        </section>

        {/* Exec Team Application */}
        <section id="exec-team" className="pb-20">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Apply to Executive Team
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Join the IOP executive leadership team and help shape the future of political engagement at Stanford.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                Application information and form will be available here. For now, please contact us directly.
              </p>
              <a
                href="mailto:iop@stanford.edu"
                className="block w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="pb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/political-review"
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Political Review
              </Link>
              <Link 
                href="/about"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
              >
                About Us
              </Link>
              <Link 
                href="/opportunities"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
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
