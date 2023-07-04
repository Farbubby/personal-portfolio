import { useState } from "react";
import Mobilebar from "./Mobilebar";
import { smoothScrollTo } from "../functions";

function Navbar() {
  const [toggleBar, setToggleBar] = useState(false);
  let sandcolorText =
    " bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text";

  return (
    <>
      <div className="flex flex-row-reverse px-4 drop-shadow-glow items-center h-20 fixed w-full backdrop-blur z-10">
        <div className={"flex flex-row gap-8 text-lg pr-2" + sandcolorText}>
          <button
            className="md:hidden text-3xl"
            onClick={() => setToggleBar(!toggleBar)}>
            +
          </button>
          <div className={"md:flex flex-row gap-8 hidden font-bold"}>
            <button
              onClick={() => smoothScrollTo("home")}
              className={"hover:text-white duration-200"}>
              Home
            </button>
            <button
              onClick={() => smoothScrollTo("about")}
              className={"hover:text-white duration-200"}>
              About Me
            </button>
            <button
              onClick={() => smoothScrollTo("projects")}
              className={"hover:text-white duration-200"}>
              Projects
            </button>
            <a href="/resume.pdf" className={"hover:text-white duration-200"}>
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <Mobilebar show={toggleBar} close={() => setToggleBar(false)} />
      </div>
    </>
  );
}

export default Navbar;
