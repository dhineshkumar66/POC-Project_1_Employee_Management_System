import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950 shadow-lg z-50">
      <nav className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl sm:text-3xl font-bold text-blue-500"
        >
          EMS
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-white font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="transition duration-300 hover:text-blue-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition">
            Login
          </button>

          <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-slate-900 text-white">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="block px-6 py-4 hover:bg-slate-800 transition"
            >
              {item.name}
            </a>
          ))}

          <div className="flex flex-col gap-3 px-6 py-5 border-t border-slate-800">

            <button className="border border-blue-500 rounded-lg py-2 hover:bg-blue-600 transition">
              Login
            </button>

            <button className="bg-blue-600 rounded-lg py-2 hover:bg-blue-700 transition">
              Register
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;