const Header = () => (
  <header className="relative bg-gradient-to-br from-black via-neutral-900 to-yellow-500 text-white pb-24 overflow-hidden">
    {/* Decorative lines - varied styles */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Solid white diagonal */}
      <line x1="5%" y1="10%" x2="95%" y2="80%" stroke="white" strokeOpacity="0.10" strokeWidth="3" />
      {/* Dashed yellow, steeper angle */}
      <line x1="15%" y1="0" x2="85%" y2="100%" stroke="#fde047" strokeOpacity="0.18" strokeWidth="2" strokeDasharray="8 6" />
      {/* Dotted white, short */}
      <line x1="30%" y1="20%" x2="60%" y2="40%" stroke="white" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="2 6" />
      {/* Solid yellow, horizontal */}
      <line x1="10%" y1="60%" x2="90%" y2="60%" stroke="#fde047" strokeOpacity="0.12" strokeWidth="2.5" />
      {/* Dotted yellow, vertical */}
      <line x1="70%" y1="10%" x2="70%" y2="90%" stroke="#fde047" strokeOpacity="0.10" strokeWidth="2" strokeDasharray="1 7" />
      {/* Solid white, shallow angle */}
      <line x1="0" y1="90%" x2="100%" y2="70%" stroke="white" strokeOpacity="0.07" strokeWidth="4" />
    </svg>
    {/* Optional: Subtle overlay for depth */}
    <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    <div className="relative container mx-auto px-6 pt-8 flex flex-col min-h-[420px]">
      <nav className="flex items-center justify-between mb-12">
        <div className="text-3xl font-bold">NEREXJS</div>
        <ul className="flex gap-8 text-sm font-medium">
          <li><a href="#" className="hover:text-yellow-400">Documentation</a></li>
          <li><a href="#" className="hover:text-yellow-400">Resources</a></li>
          <li>
            <a href="https://github.com/espitman/nerexjs" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">GitHub</a>
          </li>
        </ul>
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-400">LinkedIn</a>
        </div>
      </nav>
      <div className="flex flex-col items-start mt-8">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Hello, nerexjs!</h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">A modern fullstack monorepo framework based on NestJS (backend) and React (frontend), designed for scalable, maintainable, and production-ready applications.</p>
        <div className="flex gap-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold">Documentation</button>
          <a
            href="https://github.com/espitman/nerexjs"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:bg-white hover:text-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center justify-center"
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header; 