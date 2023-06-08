import { useState } from "react";

function NavButton() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}> Toggle </button>
      {toggle && (
        <>
          <div>
            <div>Home</div>
            <div>About</div>
            <div>Projects</div>
            <div>Contact</div>
          </div>
        </>
      )}
    </>
  );
}

export default NavButton;
