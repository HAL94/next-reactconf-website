import { IoMdArrowDropdown } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './DropdownNavLink.module.css';
import useDelayUnmount from '../../hooks/useDelayUnmount';

const DropdownNavLink = ({ linkObj, styleObj, className }) => {
  const [isShown, setIsShown] = useState(false);
  const showDiv = useDelayUnmount(isShown, 250);
  const [pos, setPos] = useState({ left: 0, top: 0 });
  const dropdownContainerRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (dropdownContainerRef.current) {
        const { left, top } =
          dropdownContainerRef.current.getBoundingClientRect();
        setPos({ left, top: top + 25 });
      }
      const windowWidth = event.target.innerWidth;
      if (windowWidth < 1023) {
        setIsShown(false);
      }
    };
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);
  
  return (
    <li
      ref={dropdownContainerRef}
      className={`flex flex-row items-center justify-center cursor-pointer link relative ${className}`}
      style={{ ...styleObj }}
      onClick={() => {
        const { left, top } =
          dropdownContainerRef.current.getBoundingClientRect();
        setPos({ left, top: top + 45 });
        setIsShown(!isShown);
      }}
    >
      {linkObj.title}
      <IoMdArrowDropdown size={20} color="#319bce" />
      {showDiv && (
        <div className="fixed z-50 inset-0" onClick={() => setIsShown(false)}>
          <div
            ref={dropdownRef}
            style={{ top: pos.top, left: window.innerWidth < 1023 ? pos.left + 20 : pos.left }}
            className={`${
              isShown ? styles.show : styles.hide
            } ${styles.dropnav} flex flex-col
             justify-center items-start border-primary z-10 p-5 bg-white rounded border
             `}
          >
            {linkObj.children.map((sublinkObj) => (
              <Link
                key={sublinkObj.id}
                href={sublinkObj.link}
                className="my-3"
                style={{ ...styleObj, color: '#000' }}
              >
                {sublinkObj.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default DropdownNavLink;
