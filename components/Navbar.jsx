  import React, { useState, useContext, useEffect } from 'react';
  import { useRouter } from 'next/router';
  import { useTheme } from 'next-themes';
  import Image from 'next/image';
  import Link from 'next/link';
  import Button from './Button';
  import images from '../assets';


  const MenuItems = ({ isMobile, active, setActive }) => {

    const generateLink =(i) => {
      switch(i) {
        case 0: return '/';
        case 1:return 'ExploreFreelancers';
          case 2: return 'createProject';
        default: return '/';
          
      }
    }
    return (
      <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
        {['Home', 'Explore Freelancers', 'create Project'].map((item, i) => (
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
  const ButtonGroup =({setActive, router}) => {
    const hasConnected = false;
    return hasConnected ? (
      <Button 
      btnName="Create"
      classStyles="mx-2 rounded-xl"
      handleClick={() =>{
      setActive('');

      router.push('/create-Project')
      }}
      />
    ): 
    <Button 
    btnName="Connect"
    classStyles="mx-2 rounded-xl"
    handleClick={() =>{}}
    />;
  }

  const Navbar = () => {  
    const { theme, setTheme} = useTheme();
    const router = useRouter();
    const [active, setActive] = useState('Listed Jobs');
    const [isOpen, setIsOpen] = useState(false);  


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
            <div className='md:hidden flex'>
          
          <MenuItems active={active}setActive={setActive}/> 
          <div className='ml-4'>
            <ButtonGroup setActive={setActive} router = {router} />

          </div>

          </div>
        
        </div>
          
        <div className="hidden md:flex ml-2">
        {isOpen ? (
  <Image
    src={images.cross}
    width={20}
    height={20}
    alt="close"
    onClick={() => setIsOpen(false)}
    className={theme === 'light' ? 'filter invert' : ''}
  />
) : (
  <Image
    src={images.menu}
    width={25}
    height={25}
    alt="menu"
    onClick={() => setIsOpen(true)}
    className={theme === 'light' ? 'filter invert' : ''}
  />
)}
 {isOpen && (
        <div className="fixed inset-0 top-65 dark:bg-dark bg-white z-10 nav-h flex justify-between flex-col">
          <div className="flex-1 p-4">
            <MenuItems active={active} setActive={setActive} isMobile setIsOpen={setIsOpen} />
          </div>
          <div className="p-4 border-t dark:border-black-1 border-gray-1">
            <ButtonGroup router={router} setActive={setActive} setIsOpen={setIsOpen} />
          </div>
        </div>
        )}

</div>

        
      
      </nav>
    );
  };
    
  export default Navbar;
