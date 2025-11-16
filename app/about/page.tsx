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
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-12 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">A Democracy for All</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              The Institute of Politics at Stanford is committed to fostering democratic engagement, 
              political discourse, and public service among students and the broader community.
            </p>
            <Link 
              href="/opportunities"
              className="inline-block mt-8 px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Opportunities
            </Link>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The Institute of Politics at Stanford (IOP) serves as a hub for political engagement, 
            bringing together students, faculty, fellows, and community members to explore critical 
            issues facing our democracy. Through our diverse programs, publications, and events, we 
            aim to inspire the next generation of public servants and engaged citizens.
          </p>
        </section>

        {/* Leadership Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example leadership cards - replace with actual data */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Name</h3>
              <p className="text-gray-600 text-center mb-2">Position</p>
              <p className="text-sm text-gray-500 text-center">Brief bio or description</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Name</h3>
              <p className="text-gray-600 text-center mb-2">Position</p>
              <p className="text-sm text-gray-500 text-center">Brief bio or description</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Name</h3>
              <p className="text-gray-600 text-center mb-2">Position</p>
              <p className="text-sm text-gray-500 text-center">Brief bio or description</p>
            </div>
          </div>
        </section>

        {/* Masthead Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Masthead</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example masthead cards - replace with actual data */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold text-gray-900">Name</h4>
                <p className="text-sm text-gray-600">Role</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

