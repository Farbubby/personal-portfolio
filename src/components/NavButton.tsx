import { useState } from "react";

function NavButton() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}> Toggle </button>
      <div>{toggle.toString()}</div>
    </>
  );
}

export default NavButton;
