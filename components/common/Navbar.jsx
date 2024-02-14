'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About Us',
    link: '/about-us',
  },
  {
    text: 'Academic',
    link: '/academic',
  },
  {
    text: 'Department',
    link: '/department',
  },
  {
    text: 'Notices',
    link: '/notices',
  },
  {
    text: 'Exams',
    link: '/exams',
  },
  {
    text: 'Admission',
    link: '/admission',
  },
  {
    text: 'Gallery',
    link: '/gallery',
  },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="relative bg-primary bg-opacity-10 shadow-md py-2">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 flex-col md:flex-row items-center">
            <Image src={logo} alt="logo" height={55} width={55} />
            <h4 className="flex-grow text-center font-bold text-xl">
              Beanibazar Govt. College (বিয়ানিবাজার সরকারি কলেজ)
            </h4>
          </div>
        </div>
      </div>
      <div className="relative bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-y-2 justify-between items-center">
            <div
              className="relative w-full flex flex-col gap-y-1.5 justify-center items-center md:hidden border border-black rounded py-2 cursor-pointer"
              onClick={() => setActiveNav((prev) => !prev)}
            >
              <span className="block w-11 h-0.5 bg-black" />
              <span className="block w-11 h-0.5 bg-black" />
              <span className="block w-11 h-0.5 bg-black" />
            </div>
            {/* nav */}
            <ul
              className={`flex flex-col md:flex-row items-center justify-between w-full gap-6 py-4 md:py-0 ${
                activeNav ? 'flex' : 'hidden md:flex'
              }`}
            >
              {navItems.map((item, i) => (
                <li
                  className={`text-base font-medium hover:text-primary ${
                    pathname === item.link && 'text-primary'
                  }`}
                  key={i}
                >
                  <Link href={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
