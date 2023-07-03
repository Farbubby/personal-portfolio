import { useState } from "react";

interface Props {
  show: boolean;
  close: () => void;
}

function Mobilebar({ show, close }: Props) {
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
      {show && (
        <>
          <button
            className={"fixed z-30 p-8 text-3xl" + hoverText + sandcolorText}
            onClick={() => close()}>
            X
          </button>
          <div
            className={
              "flex flex-col px-8 text-2xl gap-20 font-bold items-center justify-center z-20 fixed h-screen bg-gradient-to-t from-black via-gray-950 to-gray-800 w-3/4 sm:w-1/2"
            }>
            <button
              onClick={() => scrollTo("home")}
              className={hoverText + sandcolorText}>
              Home
            </button>
            <button
              onClick={() => scrollTo("about")}
              className={hoverText + sandcolorText}>
              About Me
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className={hoverText + sandcolorText}>
              Projects
            </button>
            <a href="/resume.pdf" className={hoverText + sandcolorText}>
              Resume
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default Mobilebar;
