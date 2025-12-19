export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-10 px-20 md:px-20 sticky top-0 bg-light shadow-md z-50">
      {/* Logo */}
      <h1 className="font-bold text-2xl text-primary">
        <a href="#hero">Ultimate Consult</a>
      </h1>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-6 text-dark font-medium">
          <li>
            <a
              href="#hero"
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-primary transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-primary transition-colors duration-200"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-primary hover:bg-secondary text-white py-2 px-5 rounded-full transition-colors duration-300 font-semibold"
            >
              Get Consulting!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
