import { useEffect, useState } from "react";
import { smoothScrollTo, smoothScrollToBottom } from "../animation";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [y, setY] = useState(0);
  const [scrollStatus, setScrollStatus] = useState(false);
  const [sectionList, setSectionList] = useState([
    "About",
    "Projects",
    "Contact",
    "Resume",
  ]);
  const [svgList, setSvgList] = useState([
    <svg
      className="fill-fuchsia-400 w-6 h-6 hover:fill-white duration-200"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M16.5 12.5c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5.56-1.5 1.25-1.5 1.25.672 1.25 1.5zm-7.75-1.5c-.69 0-1.25.672-1.25 1.5s.56 1.5 1.25 1.5 1.25-.672 1.25-1.5-.56-1.5-1.25-1.5zm3.25 5.357c-2.375-1.454-1.689 2.095-5 .639.5 2.012 3.506 2.353 5 1.141 1.494 1.212 4.5.871 5-1.141-3.311 1.457-2.625-2.092-5-.639zm12-3.044c0 1.765-.985 3.991-3.139 4.906-2.05 3.274-4.975 5.781-8.861 5.781-3.749 0-6.858-2.582-8.862-5.781-2.153-.916-3.138-3.142-3.138-4.906 0-1.995.811-3.774 2.683-3.959l.03-.028.003-.02c-.25-1.945-.338-4.92.719-6.047.568-.605 1.217-.839 2.047-.565 1.294-1.765 3.454-2.694 6.372-2.694 4.646 0 6.552 2.417 8.177 4.46.893 1.123 1.969 2.248 3.969 2.186-.809.758-1.779 1.354-2.832 1.795.051.301.093.604.122.907 1.85.165 2.71 1.905 2.71 3.965zm-2.58-1.866c-.235-.153-.53-.116-.671-.053-.66.293-1.406-.192-1.406-.914 0-.479-.035-.957-.1-1.43-4.099.928-8.743-.231-10.368-3.467-2.375.375-3.85 2.356-4.229 5.021h-.004c-.087.683-.785 1.059-1.39.79-.141-.062-.436-.1-.672.053-1 .651-.893 4.184 1.554 5.012.224.076.413.228.535.43 1.708 2.829 4.015 5.111 7.331 5.111 3.318 0 5.624-2.284 7.331-5.111.123-.202.313-.354.536-.43 2.448-.829 2.553-4.364 1.553-5.012z" />
    </svg>,
    <svg
      className="fill-fuchsia-400 w-6 h-6 hover:fill-white duration-200"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M22 1h-20v14h20v-14zm-2 12h-16v-10h16v10zm2 3h-20l-2 7h24l-2-7zm-12.228 6l.466-2h3.524l.466 2h-4.456z" />
    </svg>,
    <svg
      className="fill-fuchsia-400 w-6 h-6 hover:fill-white duration-200"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z" />
    </svg>,
    <svg
      className="fill-fuchsia-400 w-6 h-6 hover:fill-white duration-200"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm4.256 11h-12v-1h12v1zm0-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z" />
    </svg>,
  ]);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  let moveNavBar =
    scrollStatus && y != 0
      ? " translate-y-0 ease-in-out duration-300"
      : y == 0
      ? " translate-y-0 ease-in-out duration-300"
      : " -translate-y-full ease-in-out duration-300";
  let navButton =
    " hover:text-white px-3 py-1 rounded-xl duration-200 font-bold text-md drop-shadow-glow text-fuchsia-400 drop-shadow-glow";

  let arrange = isMobile ? " justify-evenly" : " gap-4 justify-end";

  const changeNav = () => {
    window.scrollY > y ||
    window.innerHeight + Math.round(window.scrollY) >=
      document.body.offsetHeight
      ? setScrollStatus(false)
      : setScrollStatus(true);
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, [changeNav]);

  return (
    <>
      <div
        className={
          "flex flex-row px-4 h-16 fixed w-full bg-gray-950 z-10 items-center border-b border-gray-800" +
          moveNavBar +
          arrange
        }>
        <button onClick={() => smoothScrollTo("about")} className={navButton}>
          {isMobile ? svgList[0] : sectionList[0]}
        </button>
        <button
          onClick={() => smoothScrollTo("projects")}
          className={navButton}>
          {isMobile ? svgList[1] : sectionList[1]}
        </button>
        <button onClick={() => smoothScrollToBottom()} className={navButton}>
          {isMobile ? svgList[2] : sectionList[2]}
        </button>
        <a href="/resume.pdf" className={navButton}>
          {isMobile ? svgList[3] : sectionList[3]}
        </a>
        <a href="https://github.com/Farbubby" className={navButton}>
          <svg
            className="fill-fuchsia-400 w-6 h-6 hover:fill-white duration-200"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/farhan-mahbub/"
          className={navButton}>
          <svg
            className="fill-fuchsia-400 w-6 h-6 hover:fill-white duration-200"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </>
  );
}

export default Navbar;
