import { useState } from "react";
import logo from "../assets/images/logo1.png";

const menuItems = [
  { name: "Home", link: "" },
  { name: "About", link: "about" },
  { name: "Services", link: "services" },
  { name: "Gallery", link: "gallery" },
  { name: "Contact", link: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Logo */}
      <div>
        <img src={logo} alt="Samsung Logo" className="mr-2.5 w-42" />
      </div>

      {/* Navigation */}
      <nav className="relative">
        {/* Desktop Navigation */}
        <ul className="hidden items-center space-x-6 md:flex">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.link}`}
                className="font-semibold text-gray-700 hover:text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.link);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:+918000815400"
              className="rounded-lg px-4 py-2 font-semibold text-blue-800 transition hover:text-blue-900"
            >
              Instant Query
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="flex cursor-pointer items-center justify-center p-2 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-16 right-0 left-0 z-50 w-full bg-white shadow-md transition-all duration-300 ease-in-out md:hidden ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item, index) => (
              <li key={index} className="w-full text-center">
                <a
                  href={`#${item.link}`}
                  className={`block w-full py-2 transition-colors duration-200 ${
                    item.name === "Home"
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-700 hover:bg-zinc-800 hover:text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.link);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="w-full px-4 text-center">
              <a
                href="#"
                className="block w-full rounded-lg px-4 py-2 font-semibold text-blue-800 transition-colors duration-200 hover:text-blue-900"
                onClick={() => setIsOpen(false)}
              >
                Instant Query
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
