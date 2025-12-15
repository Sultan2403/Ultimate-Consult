export default function Header() {
  return (
    <header className="w-screen flex justify-evenly items-center p-4">
      <h1 className="">
        <a href="index.html">Ultimate Consult</a>
      </h1>
      <nav className="">
        <ul className="flex items-center w-full gap-3">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Get Consulting!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
