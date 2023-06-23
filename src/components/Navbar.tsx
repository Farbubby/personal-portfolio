import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  let sandcolorText =
    " bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text";
  let hoverText = " hover:text-white duration-200";

  return (
    <>
      <div className="flex mt-3 p-2 ml-3 drop-shadow-glow">
        <div className={"mr-auto text text-2xl font-bold" + sandcolorText}>
          Farhan Mahbub
        </div>
        <div className="flex flex-row gap-8 items-center text-lg mr-3">
          <button className="md:hidden" onClick={() => setToggle(!toggle)}>
            +
          </button>
          <div
            className={
              "md:flex flex-row gap-8 hidden font-bold" + sandcolorText
            }>
            <a href="/" className={hoverText}>
              Home
            </a>
            <a href="/about" className={hoverText}>
              About Me
            </a>
            <a href="/projects" className={hoverText}>
              Projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
