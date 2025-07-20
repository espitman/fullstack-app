const Header = () => (
  <header className="relative bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white pb-24">
    <div className="container mx-auto px-6 pt-8 flex flex-col min-h-[420px]">
      <nav className="flex items-center justify-between mb-12">
        <div className="text-3xl font-bold">NEREXJS</div>
        <ul className="flex gap-8 text-sm font-medium">
          <li><a href="#" className="hover:text-yellow-400">Documentation</a></li>
          <li><a href="#" className="hover:text-yellow-400">Resources</a></li>
        </ul>
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-400">GitHub</a>
          <a href="#" className="hover:text-yellow-400">LinkedIn</a>
        </div>
      </nav>
      <div className="flex flex-col items-start mt-8">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Hello, nerexjs!</h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">A modern fullstack monorepo framework based on NestJS (backend) and React (frontend), designed for scalable, maintainable, and production-ready applications.</p>
        <div className="flex gap-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold">Documentation</button>
          <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-2 rounded-full font-semibold">Source code</button>
        </div>
      </div>
    </div>
  </header>
);

export default Header; 