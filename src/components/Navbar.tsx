import { useState } from 'react';

function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
        <div>
        <button className="md:hidden" onClick={() => setToggle(!toggle)}> Toggle </button>
        </div>
        <div>
            {toggle.toString()}
        </div>
        </>
    )
}

export default Navbar;