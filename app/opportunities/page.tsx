import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Opportunities() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Events
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Stay up to date with all IOP events and opportunities. Check out our calendar below.
        </p>

        {/* Google Calendar Embed */}
        <section className="mb-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Google Calendar will be embedded here
                </p>
                <p className="text-sm text-gray-500">
                  To embed: Go to Google Calendar → Settings → Integrate calendar → 
                  Copy the iframe code and replace this section
                </p>
                {/* Example iframe structure - replace with actual Google Calendar embed code */}
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID"
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  className="hidden"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            How to Embed Your Google Calendar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Open Google Calendar</li>
            <li>Click the three dots next to your calendar</li>
            <li>Select "Settings and sharing"</li>
            <li>Scroll down to "Integrate calendar"</li>
            <li>Copy the iframe code</li>
            <li>Replace the placeholder in the code with your iframe</li>
          </ol>
        </section>
      </main>

      <Footer />
    </div>
  );
}

