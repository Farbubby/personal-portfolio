import { useState } from 'react';

function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
        <div className='flex items-center mt-3 p-2 ml-3'>
            <div className='mr-auto text text-3xl'> Farhan Mahbub </div>
            <div className='flex flex-row gap-8 items-center text-lg mr-3'>
                <button className="md:hidden" onClick={() => setToggle(!toggle)}> Toggle </button>
                <ul className='md:flex flex-row gap-8 hidden'>
                    <li className="hover:-translate-y-1 duration-150"> Home </li>
                    <li className="hover:-translate-y-1 duration-150"> About Me</li>
                    <li className="hover:-translate-y-1 duration-150"> Projects </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;