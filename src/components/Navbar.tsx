import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  let optionStyle = "hover:-translate-y-1 duration-150";

  return (
    <>
      <div className="flex items-center mt-3 p-2 ml-3">
        <div className="mr-auto text text-2xl"> Farhan Mahbub </div>
        <div className="flex flex-row gap-8 items-center text-lg mr-3">
          <button className="md:hidden" onClick={() => setToggle(!toggle)}>
            +
          </button>
          <ul className="md:flex flex-row gap-8 hidden">
            <li className={optionStyle}> Home </li>
            <li className={optionStyle}> About Me </li>
            <li className={optionStyle}> Projects </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
