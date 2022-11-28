import React, { useState } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import { AiOutlineMenu } from 'react-icons/ai';

const logo =
  'https://cdn.sanity.io/images/akehlmtp/production/087c47773247a5050a71af881230fbb90eb93540-500x500.png';
import styles from './Navbar.module.css';
import Nav from './Nav';
import { createButtonRipple } from '../../utils';
import Sidenav from './Sidenav';
import { useRouter } from 'next/router';

const Navbar = ({ websiteLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollPosition, windowWidth } = useScrollPosition();
  const shouldShrink = scrollPosition > 50 && windowWidth > 1023;
  const router = useRouter();

  return (
    <header
      className={`flex flex-wrap items-center justify-between px-2 border-b border-transparent transition-position duration-300 ease-out ${
        shouldShrink
          ? 'bg-black text-white fixed z-30 top-0 left-0 right-0 py-1'
          : 'bg-white text-primary z-30 relative py-6'
      }`}
    >
      <Sidenav
        baseClassName={`fixed overflow-x-hidden text-black inset-0 py-5 z-40 bg-white`}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        logoUrl={logo}
        links={websiteLinks}
      />
      <Nav
        hasLinks={true}
        links={websiteLinks}
        shouldShrink={shouldShrink}
        containerClassName="container py-0 px-0 lg:px-10 my-0 mx-auto flex items-center lg:justify-center justify-between"
        logoUrl={logo}
      >
        <button className="ml-auto primary-button hidden lg:block" onClick={() => router.push('/register')}>
          Register Now
        </button>
        <button
          className={`p-2 border-1 border-primary block lg:hidden rounded hover:bg-[#0000001a] transition-all duration-150 ease-linear ${styles.btnripple}`}
          type="button"
          onClick={(e) => {
            setIsOpen(true);
            createButtonRipple(e, styles.ripple);
          }}
        >
          <AiOutlineMenu size={25} />
        </button>
      </Nav>
    </header>
  );
};

export default Navbar;
