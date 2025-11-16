'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function FellowsMentors() {
  const [activeTab, setActiveTab] = useState<'fellows' | 'mentors'>('fellows');

  // Example data structure - replace with actual data
  const fellows = [
    {
      id: 1,
      name: 'Fellow Name',
      title: 'Position/Title',
      bio: 'Brief bio or description of the fellow goes here. This can include their background, expertise, and current work.',
      email: 'fellow@stanford.edu',
      officeHours: 'https://calendly.com/example',
      image: null,
    },
    // Add more fellows as needed
  ];

  const mentors = [
    {
      id: 1,
      name: 'Mentor Name',
      title: 'Position/Title',
      bio: 'Brief bio or description of the mentor goes here. This can include their background, expertise, and current work.',
      email: 'mentor@stanford.edu',
      officeHours: 'https://calendly.com/example',
      image: null,
    },
    // Add more mentors as needed
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Fellows & Mentors
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('fellows')}
            className={`px-8 py-4 font-semibold text-lg ${
              activeTab === 'fellows'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Fellows
          </button>
          <button
            onClick={() => setActiveTab('mentors')}
            className={`px-8 py-4 font-semibold text-lg ${
              activeTab === 'mentors'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Mentors
          </button>
        </div>

        {/* Fellows Section */}
        {activeTab === 'fellows' && (
          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fellows.length > 0 ? (
                fellows.map((fellow) => (
                  <div key={fellow.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">
                      {fellow.name}
                    </h3>
                    <p className="text-gray-600 text-center mb-3">{fellow.title}</p>
                    <p className="text-sm text-gray-700 mb-4 text-center">{fellow.bio}</p>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${fellow.email}`}
                        className="block text-center text-sm text-red-600 hover:text-red-700"
                      >
                        {fellow.email}
                      </a>
                      {fellow.officeHours && (
                        <a
                          href={fellow.officeHours}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-center text-sm text-blue-600 hover:text-blue-700"
                        >
                          Schedule Office Hours
                        </a>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">Fellows information coming soon.</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Mentors Section */}
        {activeTab === 'mentors' && (
          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.length > 0 ? (
                mentors.map((mentor) => (
                  <div key={mentor.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-gray-600 text-center mb-3">{mentor.title}</p>
                    <p className="text-sm text-gray-700 mb-4 text-center">{mentor.bio}</p>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${mentor.email}`}
                        className="block text-center text-sm text-red-600 hover:text-red-700"
                      >
                        {mentor.email}
                      </a>
                      {mentor.officeHours && (
                        <a
                          href={mentor.officeHours}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-center text-sm text-blue-600 hover:text-blue-700"
                        >
                          Schedule Office Hours
                        </a>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">Mentors information coming soon.</p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

