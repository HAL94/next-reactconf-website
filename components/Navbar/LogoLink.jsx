import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LogoLink = ({ logoUrl }) => {
  return (
    <Link href="/" className="w-[80px] lg:w-auto">
      <Image src={logoUrl} width={100} height={200} alt="App Logo" />
    </Link>
  );
};

export default LogoLink;
