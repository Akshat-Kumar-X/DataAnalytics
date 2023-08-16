import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1250px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

        <ul className="hidden md:flex md:justify-center md:align-middle">
            <li className='p-4 hover:p-[13px] duration-200 translate-x-0 font-medium'>Home</li>
            <li className='p-4 hover:p-[13px] duration-200 translate-x-0 font-medium'>Company</li>
            <li className='p-4 hover:p-[13px]  duration-200 translate-x-0 font-medium'>Resources</li>
            <li className='p-4 hover:p-[13px]  duration-200 translate-x-0 font-medium'>About</li>
            <li className='ml-4'>
                <button className=" hover:bg-gray-300 hover:scale-105 duration-300 rounded-[5px] w-[120px] bg-white text-black font-medium py-3 mx-auto md:mx-0">
                    Start Now
                </button>
            </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose  size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        <div className={nav
                         ? "fixed left-0 top-0 w-[60%] h-full border-r pt-3 border-r-gray-900 bg-[#000300] ease-in-out duration-500 " 
                         : "fixed hidden left-[-100%] ease-in-out duration-500"}>

            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 mt-5'>REACT.</h1>

            <ul className="p-4 uppercase">
                <li className='p-4 border-b border-b-gray-600'>Home</li>
                <li className='p-4 border-b border-b-gray-600'>Company</li>
                <li className='p-4 border-b border-b-gray-600'>Resources</li>
                <li className='p-4 border-b border-b-gray-600'>About</li>
                <li className='p-4'>
                    Contact
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar