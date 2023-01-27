import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'


export default function Header() {
  return (
    <div className='text-white'>
       <nav className='flex flex-col sm:flex-row justify-between px-5 py-3 absolute w-[100%] '>
       <img className='rounded-full w-20 animate-ping opacity-60 h-20 hidden sm:flex' src={logo} alt="" />
        <main>
            <ul className='flex uppercase gap-4 sm:gap-5 mt-3 sm:mt-0 sm:text-xl cursor-pointer italic items-center'>
                <Link  to={"/"} className='hover:font-bold border-b-2 '>
                            Home
                </Link>
                <Link  to={"about"} className='hover:font-bold border-b-2 '>
                            about
                </Link>
                <Link to={"contact"} className='hover:font-bold border-b-2 ' >
                            Contact
                </Link>
                <Link to={"#"} className=' ' >
                            <button className='w-32 h-11 bg-black rounded-2xl hover:opacity-70 border-2 border-white'>
                              login
                            </button>
                </Link>
            </ul>
        </main>
       </nav>

    </div>
  )
}
