export default function Nav() {
  return (
    <>
      <nav className="fixed w-screen flex items-center md:p-10 p-6 justify-center">
        <ul className="flex list-none text-lg md:gap-14 gap-4">
          <li className="flex-1 mr-2">
            <a
              className="text-center font-semibold block border-b-2 border-transparent hover:border-lilac hover:border-b"
              href="/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Home
            </a>
          </li>
          <li className="flex-1 mr-2">
            <a
              className="text-center font-semibold block border-b-2 border-transparent hover:border-lilac hover:border-b"
              href="/Projects"
              rel="noreferrer noopener"
              target="_blank"
            >
              Projects
            </a>
          </li>
          <li className="flex-1 mr-2">
            <a
              className="text-center font-semibold block border-b-2 border-transparent hover:border-lilac hover:border-b"
              href="/Infos"
              rel="noreferrer noopener"
              target="_blank"
            >
              Infos
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
