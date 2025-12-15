export default function Header() {
  return (
    <header className="w-screen flex justify-evenly items-center p-4 py-10 sticky">
      <h1 className="font-medium text-2xl">
        <a href="index.html">Ultimate Consult</a>
      </h1>
      <nav className="">
        <ul className="flex items-center w-full gap-5">
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
            <a
              href="#"
              className="hover:bg-blue-500 focus:bg-blue-500 bg-blue-600 text-white px-2 py-3 rounded-3xl"
            >
              Get Consulting!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
