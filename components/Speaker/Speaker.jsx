import Image from 'next/image';
import React from 'react';
import SimpleBox from '../SimpleBox/SimpleBox';

const Speaker = ({ className, name, image, sessionDetails, sessionTitle }) => {
  return (
    <SimpleBox
      className={`${className} pt-36`}
      boxTitle={sessionTitle}
      boxText={sessionDetails}
    >
      <h1 className="text-3xl text-secondary font-semibold mb-5">{name}</h1>
      <div className="h-[120px] w-[120px] absolute top-[10px] flex justify-center items-center">
        <Image src={image} fill className="rounded-full border" alt={name} />
      </div>
    </SimpleBox>
  );
};

export default Speaker;
