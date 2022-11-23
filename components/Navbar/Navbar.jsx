import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';
import styles from './Navbar.module.css';
const logo =
  'https://cdn.sanity.io/images/akehlmtp/production/087c47773247a5050a71af881230fbb90eb93540-500x500.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollPosition, windowWidth } = useScrollPosition();
  const shouldShrink = scrollPosition > 50 && windowWidth > 1023;
  return (
    <>
      <div
        className={`fixed overflow-x-hidden flex flex-col inset-0 -right-8 py-10 px-5 z-30 bg-gray-100 transition-all duration-400 ease-in ${
          isOpen ? 'w-full' : 'w-0 -translate-x-10'
        }`}
      >
        <button
          type="button"
          className="p-2 border-1 border-primary rounded"
          onClick={() => setIsOpen(false)}
        >
          <AiFillCloseCircle size={25} />
        </button>
        <Image src={logo} width={100} height={200} alt="App Logo" />
        <li className="link my-2">Home</li>
        <li className="link my-2">Why Us?</li>
        <li className="link my-2">About</li>
        <li className="link my-2">Saudi Tech Industry</li>
        <li className="link my-2">Exhibitors</li>
        <li className="link my-2">Contact</li>
        <li className="link my-2">Register Now</li>
      </div>

      <header
        className={`flex flex-wrap items-center justify-between px-2 border-b border-transparent transition-position duration-300 ease-out ${
          shouldShrink
            ? 'bg-black text-white fixed z-30 top-0 left-0 right-0 py-3'
            : 'bg-transparent opacity-50 text-primary relative py-6'
        }
        ${windowWidth > 1023 ? 'bg-black' : 'bg-transparent'}`}
      >
        <nav className="container py-0 px-10 my-0 mx-auto lg:flex items-center justify-center hidden">
          <div className='w-[50px] lg:w-auto'>
            <Image src={logo} width={100} height={200} alt="App Logo" />
          </div>

          <ul className="mb-4 mt-2 flex flex-row justify-center items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 px-3 font-medium xl:ml-[100px]">
            <li
              className="link"
              style={{ color: shouldShrink ? '#fff' : 'inherit' }}
            >
              Home
            </li>
            <li
              className="link"
              style={{ color: shouldShrink ? '#fff' : 'inherit' }}
            >
              Why Us?
            </li>
            <li
              className="link"
              style={{ color: shouldShrink ? '#fff' : 'inherit' }}
            >
              About
            </li>
            <li
              className="link"
              style={{ color: shouldShrink ? '#fff' : 'inherit' }}
            >
              Saudi Tech Industry
            </li>
            <li
              className="link"
              style={{ color: shouldShrink ? '#fff' : 'inherit' }}
            >
              Exhibitors
            </li>
            <li
              className="link"
              style={{ color: shouldShrink ? '#fff' : 'inherit' }}
            >
              Contact
            </li>
          </ul>

          <button className="ml-auto primary-button">Register Now</button>
        </nav>
        <nav className="container py-0 px-10 my-0 mx-auto flex items-center justify-between lg:hidden">
          <div className='w-[80px] lg:w-auto'>
            <Image src={logo} width={100} height={200} alt="App Logo" />
          </div>
          {/* <button className="ml-auto primary-button">Register Now</button> */}

          <button
            className="p-2 border-1 border-primary rounded"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            <AiOutlineMenu size={25} />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
