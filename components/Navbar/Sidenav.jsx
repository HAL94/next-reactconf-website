import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import useDelayUnmount from '../../hooks/useDelayUnmount';
import DropdownNavLink from './DropdownNavLink';
import LogoLink from './LogoLink';
import Navlink from './Navlink';
import styles from './Sidenav.module.css';

const Sidenav = ({ baseClassName, logoUrl, isOpen, setIsOpen, links }) => {
  const showDiv = useDelayUnmount(isOpen, 250);
  const router = useRouter();
  useEffect(() => {
    const onNavEnd = () => {
      setIsOpen(false);
    };
    router.events.on('routeChangeComplete', onNavEnd);
    return () => {
      router.events.off('routeChangeComplete', onNavEnd);
    };
  }, [router.events, setIsOpen]);

  useEffect(() => {
    if (showDiv) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [showDiv]);

  return (
    <>
      {showDiv && (
        <div
          className={`${baseClassName}
          ${isOpen ? `${styles.show}` : `${styles.hide}`}
        `}
        >
          <div className="flex justify-between items-center px-5">
            <button
              type="button"
              className="p-2 border-1 border-primary rounded"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <AiFillCloseCircle size={25} />
            </button>
            <LogoLink logoUrl={logoUrl} />
          </div>
          <ul className="">
            {links.map((link) =>
              link.isDropdown ? (
                <DropdownNavLink
                  key={link.id}
                  linkObj={link}
                  styleObj={{}}
                  className={`link my-2 ${styles.navlink}`}
                />
              ) : (
                <Navlink
                  key={link.id}
                  linkObj={link}
                  styleObj={{}}
                  className={`link my-2 ${styles.navlink}`}
                />
              ),
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidenav;
