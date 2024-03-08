"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

export default function MobileNav() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }

    const menuIcon = menuOpen ?  
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg> : 
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path d="M2 9 L22 9 M2 15 L22 15" strokeLinecap="round" strokeLinejoin="round" />

        </svg>;

    return (
    <nav className='sm:hidden'>
        <button 
            onClick={handleClick} 
            type="button" 
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white " aria-controls="mobile-menu" 
            aria-expanded="false"
        >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
           
            {menuIcon}            
        </button>
        <div className={`${ menuOpen ? 'block' : 'hidden'} sm:hidden fixed w-full left-0 shadow-lg z-10 top-20 h-svh  bg-[#fff]`} id="mobile-menu">
            <div className="space-y-1 container pt-8"> 
                <h4 className='mb-4'>Menu</h4>
                <Link href="#" className="block py-2" aria-current="page">Projects</Link>
                <Link href="#" className="block py-2">About</Link>
                <Link href="#" className="block py-2">Contact</Link> 
            </div>
        </div>
    </nav>
)}