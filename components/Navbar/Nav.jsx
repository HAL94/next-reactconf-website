import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DropdownNavLink from './DropdownNavLink';
import LogoLink from './LogoLink';
import Navlink from './Navlink';

const Nav = ({
  containerClassName,
  hasLinks,
  logoUrl,
  shouldShrink,
  links,
  children,
}) => {
  return (
    <nav className={containerClassName}>
      <LogoLink logoUrl={logoUrl} />

      {hasLinks && (
        <ul className="mb-4 mt-2 hidden gap-2 lg:mb-0 lg:mt-0 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-6 px-3 font-medium xl:ml-[100px]">
          {links.map((link) =>
            !link.isDropdown ? (
              <Navlink
                className="link"
                key={link.id}
                linkObj={link}
                styleObj={{ color: shouldShrink ? '#fff' : 'inherit' }}
              />
            ) : (
              <DropdownNavLink
                key={link.id}
                linkObj={link}
                styleObj={{ color: shouldShrink ? '#fff' : 'inherit' }}
              />
            ),
          )}
        </ul>
      )}

      {children}
    </nav>
  );
};

export default Nav;
