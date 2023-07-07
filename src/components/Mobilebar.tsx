import { smoothScrollTo } from "../functions";

interface Props {
  show: boolean;
  close: () => void;
}

function Mobilebar({ show, close }: Props) {
  let status = show
    ? " translate-x-0 duration-300"
    : " translate-x-full duration-300";

  return (
    <>
      <button
        className={
          "fixed z-30 p-6 text-3xl h-20 hover:text-white duration-200 text-blue-400" +
          status
        }
        onClick={() => close()}>
        X
      </button>
      <div
        className={
          "flex flex-col px-8 text-xl gap-20 font-bold items-center justify-center z-20 fixed h-screen bg-gradient-to-t from-black via-gray-950 to-gray-800 w-2/3 sm:w-1/3 text-blue-400" +
          status
        }>
        <button
          onClick={() => {
            smoothScrollTo("home");
            close();
          }}
          className={"hover:text-white duration-200"}>
          Home
        </button>
        <button
          onClick={() => {
            smoothScrollTo("about");
            close();
          }}
          className={"hover:text-white duration-200"}>
          About Me
        </button>
        <button
          onClick={() => {
            smoothScrollTo("projects");
            close();
          }}
          className={"hover:text-white duration-200"}>
          Projects
        </button>
        <a href="/resume.pdf" className={"hover:text-white duration-200"}>
          Resume
        </a>
      </div>
    </>
  );
}

export default Mobilebar;
