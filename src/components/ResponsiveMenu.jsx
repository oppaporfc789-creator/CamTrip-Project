import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({showMenu, setShowMenu}) => {
  return (
    <div className={`${showMenu ? 'right-0': "i-right-[]100%"} fixed bottom-0 top-0 x-20 flex h-screen w-[75%] flex-col
    justify-between bg-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
        <div>
            <button className='border border-black rounded-lg absolute top-4 right-9 '><X/></button>
            <div className='flex items-center justify-start gap-3'>
                <FaUserCircle size={50}/>
                <div>
                    <h1>Hello User</h1>
                    <h1 className='text-sm text-slate-500'>Premium User</h1>
                </div>
            </div>
            <nav className='mt-12'>
                <ul className='space-y-4 text-xl text-black flex flex-col'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About us</li></Link>
                    <Link to='/tours'><li>Tours</li></Link>
                    <Link to='/gallery'><li>Gallery</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default ResponsiveMenu