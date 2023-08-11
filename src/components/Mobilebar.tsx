import { smoothScrollTo, smoothScrollToBottom } from "../functions";

import { useEffect } from "react";

interface Props {
  status: boolean;
  close: () => void;
}

function Mobilebar({ status, close }: Props) {
  useEffect(() => {
    window.addEventListener("scroll", () => close());
    return () => {
      window.removeEventListener("scroll", () => close());
    };
  }, [() => close()]);

  let showMobileBar = status
    ? " translate-x-0 ease-in-out duration-300"
    : " translate-x-full ease-in-out duration-300";

  let mobButton =
    " text-blue-400 rounded-2xl border-blue-400 px-3 py-1 hover:text-white";

  return (
    <>
      <div
        className={
          "flex flex-col text-xl gap-12 font-bold z-20 fixed h-screen border-l bg-gray-950 w-2/3 sm:w-1/3 text-blue-400" +
          showMobileBar
        }>
        <button
          className={
            "flex flex-row-reverse p-4 hover:text-white duration-200 text-blue-400"
          }
          onClick={() => {
            close();
          }}>
          <svg
            className="stroke-blue-400 w-11 h-11 hover:fill-blue-400"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center gap-20">
          <button
            onClick={() => {
              smoothScrollTo("about");
              close();
            }}
            className={mobButton}>
            About
          </button>
          <button
            onClick={() => {
              smoothScrollTo("projects");
              close();
            }}
            className={mobButton}>
            Projects
          </button>
          <button
            onClick={() => {
              smoothScrollToBottom();
              close();
            }}
            className={mobButton}>
            Contact
          </button>
          <a href="/resume.pdf" className={mobButton}>
            Resume
          </a>
          <div className="flex gap-3 items-center justify-center">
            <a href="https://github.com/Farbubby">
              <svg
                className="fill-blue-400 w-9 h-9 hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/farhan-mahbub/">
              <svg
                className="fill-blue-400 w-9 h-9 hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobilebar;
