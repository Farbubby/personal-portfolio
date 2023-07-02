import { useState } from "react";
import Mobilebar from "./Mobilebar";

function Navbar() {
  const [toggleBar, setToggleBar] = useState(false);
  let sandcolorText =
    " bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text";

  let hoverText = " hover:text-white duration-200";

  function scrollTo(id: string) {
    let element = document.getElementById(id);

    if (window == null) return;
    if (element == null) return;

    window.scrollTo({ behavior: "smooth", top: element.offsetTop - 90 });
  }

  return (
    <>
      <div className="flex flex-row-reverse px-4 drop-shadow-glow items-center h-20 fixed w-full backdrop-blur z-10">
        <div className={"flex flex-row gap-8 text-lg mr-3" + sandcolorText}>
          <button className="md:hidden" onClick={() => setToggleBar(!toggleBar)}>
            +
          </button>
          <div className={"md:flex flex-row gap-8 hidden font-bold"}>
            <button onClick={() => scrollTo("home")} className={hoverText}>
              Home
            </button>
            <button onClick={() => scrollTo("about")} className={hoverText}>
              About Me
            </button>
            <button onClick={() => scrollTo("projects")} className={hoverText}>
              Projects
            </button>
            <a href="/resume.pdf" className={hoverText}>
              Resume
            </a>
          </div>
        </div>
      </div>
      <div>
        <Mobilebar show={toggleBar} close={() => setToggleBar(false)} />
      </div>
    </>
  );
}

export default Navbar;
