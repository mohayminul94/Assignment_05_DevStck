const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-bold text-white">
            DS
          </div>

          <h2 className="text-lg font-bold text-slate-800">
            Dev <span className="text-pink-500">Stack</span>
          </h2>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-slate-500 md:flex">
          <a href="#home" className="text-pink-500">
            Home
          </a>

          <a href="#technologies" className="hover:text-pink-500">
            Technologies
          </a>

          <a href="#projects" className="hover:text-pink-500">
            Projects
          </a>

          <a href="#about" className="hover:text-pink-500">
            About
          </a>

          <a href="#contact" className="hover:text-pink-500">
            Contact
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-slate-600">
            Sign In
          </button>

          <button className="rounded-xl bg-pink-600 px-5 py-2 text-sm font-medium text-white hover:bg-pink-700">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;