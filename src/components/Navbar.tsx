import { useState } from 'react';

function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className='flex flex-row-reverse gap-8 h-10 items-center p-3'>
                <button className="md:hidden" onClick={() => setToggle(!toggle)}> Toggle </button>
                <ul className='md:flex flex-row gap-8 hidden'>
                    <li className=""> Home </li>
                    <li className=""> About </li>
                    <li className=""> Projects </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;