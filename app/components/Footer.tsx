export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/80" style={{ fontFamily: 'var(--font-cormorant)' }}>© {new Date().getFullYear()} Institute of Politics at Stanford</p>
      </div>
    </footer>
  );
}

