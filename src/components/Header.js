import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import Logo from "../assets/logo.jpg";
// import Button from './Button';

const Header = () => {
const [open, setOpen] =useState(false);
  return (
    
<nav className='bg-white'>
<div className='flex items-center font-medium justify-around'>
<div className='z-50 p-5 md:w-auto w-full'>
  <img src={Logo} alt= "logo"  className='md:cursor-pointer h-12'/>
</div>
<div className='text-3xl' onClick={() => setOpen(!open)}>
<div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
<ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
</div>
{/* <i class="bi bi-list"></i> */}
</div>
<ul className='md:flex hidden uppercase items-center gap-10 font-[Poppins]'>
  <li>
  <Link to="/" className="py-7 px-3 inline-block">
  Home
  </Link>
  </li>
  <NavLinks/>
</ul>
<div className="md:block hidden">
  {/* <Button/> */}
</div>
  {/* Mobile nav */}
<ul className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}>
  <li>
    <Link to ="/" className="py-7 px-3 inline-block">
      Home
    </Link>
  </li>
  <NavLinks/>
  <div className='py-5'>
  {/* <Button/> */}
  </div>
</ul>
    </div>
    </nav>

    
  )
  
}

export default Header

