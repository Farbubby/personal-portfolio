import { smoothScrollTo } from "../functions";

interface Props {
  show: boolean;
  close: () => void;
}

function Mobilebar({ show, close }: Props) {
  let status = show
    ? " translate-x-0 duration-300"
    : " translate-x-full duration-300";

  let mobButton =
    " hover:text-white duration-200 border-2 border-blue-400 px-4 py-1 rounded-xl hover:bg-blue-400";

  return (
    <>
      <button
        className={
          "fixed z-30 p-5 text-3xl hover:text-white duration-200 text-blue-400" +
          status
        }
        onClick={() => close()}>
        <svg
          className="stroke-blue-400 w-11 h-11 hover:fill-blue-400 duration-200"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
            fill-rule="nonzero"
          />
        </svg>
      </button>
      <div
        className={
          "flex flex-col px-8 text-xl gap-20 font-bold items-center justify-center z-20 fixed h-screen bg-gradient-to-tl from-gray-950 to-gray-900 w-2/3 sm:w-1/3 text-blue-400" +
          status
        }>
        <button
          onClick={() => {
            smoothScrollTo("home");
            close();
          }}
          className={
            mobButton
          }>
          Home
        </button>
        <button
          onClick={() => {
            smoothScrollTo("about");
            close();
          }}
          className={mobButton}>
          About Me
        </button>
        <button
          onClick={() => {
            smoothScrollTo("projects");
            close();
          }}
          className={mobButton}>
          Projects
        </button>
        <a href="/resume.pdf" className={mobButton}>
          Resume
        </a>
      </div>
    </>
  );
}

export default Mobilebar;
