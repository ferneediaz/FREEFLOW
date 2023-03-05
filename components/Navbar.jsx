import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';


const MenuItems = ({ isMobile, active, setActive }) => {

  const generateLink =(i) => {
    switch(i) {
      case 0: return '/';
      case 1:return 'ExploreFreelancers';
        case 2: return 'Profile';
      default: return '/';
        
    }
  }
  return (
    <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
      {['Listed Jobs', 'Explore Freelancers', 'Profile'].map((item, i) => (
        <li
          key={i}
          onClick={() => setActive(item)}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-dark mx-3 
          ${active === item
            ? 'dark:text-white text-black-1'
            : 'dark:text-gray-3 text-gray-2'
        }`}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};


const Navbar = () => {  
  const { theme, setTheme} = useTheme();
  const [active, setActive] = useState('Listed Jobs');


  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-dark bg-white dark:border-black-1 border-gray-1">
      <div className='flex flex-1 flex-row justify-start'>
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer" onClick={() => { setActive('Explore NFTs'); }}>
            <Image src={images.logo02} style={{ objectFit: 'contain' }} width={35} height={35} alt="logo" />
            <p className="dark:text-white text-black-1 font-bold text-lg ml-1">|  FREEFLOW</p>
          </div> 
        </Link> 
        <Link href="/">
          <div className='hidden md:flex' onClick={() => {} }>
            <Image src={images.logo02} style={{ objectFit: 'contain' }} width={35} height={35} alt="logo" />
          </div>
        </Link>
      </div> 
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input type="checkbox" className="checkbox" id="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
          <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
      </div>  
      <div className='md:hidden flex'>
        
          <MenuItems active={active}setActive={setActive}/> 

        
      
      </div>
    </nav>
  );
};
  
export default Navbar;
