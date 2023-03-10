import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { BsBellFill, BsSearch } from "react-icons/bs";
import BasicMenu from './BasicMenu';

function Header() {
  const { logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <img
          width={100}
          height={100}
          src="https://rb.gy/ulxxee"
          alt="Logo da empresa - Netflix"
          className='cursor-pointer object-contain'
        />

        <BasicMenu />

        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light'>
        <BsSearch className='hidden h-6 w-6 sm:inline' />
        <p className="hidden lg:inline">Kids</p>
        <BsBellFill className='h-6 w-6' />
        <Link href="/account">
          <img
            /*   onClick={logout} */
            alt="Avatar do usuário"
            src="https://rb.gy/g1pwyx"
            className='cursor-pointe rounded'
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
