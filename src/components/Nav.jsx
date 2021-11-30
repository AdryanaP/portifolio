import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="fixed w-screen flex items-center md:p-10 p-6 justify-center">
        <ul className="flex list-none text-lg md:gap-14 gap-4">
          <li className="flex-1 mr-2">
            <Link
              className="text-center font-semibold block border-b-2 border-transparent hover:border-lilac hover:border-b"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="flex-1 mr-2">
            <Link
              className="text-center font-semibold block border-b-2 border-transparent hover:border-lilac hover:border-b"
              to="/Projects"
            >
              Projects
            </Link>
          </li>
          <li className="flex-1 mr-2">
            <Link
              className="text-center font-semibold block border-b-2 border-transparent hover:border-lilac hover:border-b"
              to="/Infos"
            >
              Infos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
