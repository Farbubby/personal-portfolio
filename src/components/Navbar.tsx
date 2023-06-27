import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  let sandcolorText =
    " bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text";

  let hoverText = " hover:text-white duration-200";

  function scrollTo(id: string) {
    let element = document.getElementById(id);

    if (element == null) return;

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex mt-3 px-4 ml-3 drop-shadow-glow items-center h-20">
        <div className={"mr-auto text text-2xl font-bold" + sandcolorText}>
          Farhan Mahbub
        </div>
        <div className="flex flex-row gap-8 text-lg mr-3">
          <button className="md:hidden" onClick={() => setToggle(!toggle)}>
            +
          </button>
          <div
            className={
              "md:flex flex-row gap-8 hidden font-bold" + sandcolorText
            }>
            <button onClick={() => scrollTo("home")} className={hoverText}>
              Home
            </button>
            <button onClick={() => scrollTo("about")} className={hoverText}>
              About Me
            </button>
            <button onClick={() => scrollTo("projects")} className={hoverText}>
              Projects
            </button>
            <a href="/Resume_FarhanMahbub.pdf" className={hoverText}>
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
