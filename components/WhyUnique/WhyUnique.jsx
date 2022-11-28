import React, { useEffect } from 'react';
import { BiNetworkChart } from 'react-icons/bi';
import { CgDesignmodo } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaHandshake } from 'react-icons/fa';
import UniqueCard from './UniqueCard';
import Image from 'next/image';
import TwiseLineOne from '../../public/twist-line-1.png';
import TwiseLineTwo from '../../public/twist-line-2.png';
import TwiseLineThree from '../../public/twist-line-3.png';
import styles from './WhyUnique.module.css';
import useAppearAnimation from '../../hooks/useAppearAnimation';

const WhyUnique = () => {
  useAppearAnimation({ animateClass: styles.reveal, activeClass: styles.active });  
  return (
    <div className="container relative mx-auto py-10 lg:px-4 px-10">
      <h1 className="text-center text-6xl font-semibold text-secondary mb-36">
        Exhibit With Us
      </h1>
      <div className={`absolute hidden lg:block w-[70px] h-[70px] top-0 ${styles.reveal}`}>
        <Image src={TwiseLineOne} fill alt={'Twist Decoration'} />
      </div>
      <div className={`absolute hidden lg:block w-[70px] h-[70px] top-[100px] left-[100px] ${styles.reveal}`}>
        <Image src={TwiseLineTwo} fill alt={'Twist Decoration'} />
      </div>
      <div className={`absolute hidden lg:block w-[70px] h-[70px] top-[100px] right-0 ${styles.reveal}`}>
        <Image src={TwiseLineThree} fill alt={'Twist Decoration'} />
      </div>
      <div className={`absolute hidden lg:block w-[70px] h-[70px] top-[10px] right-[100px] ${styles.reveal}`}>
        <Image src={TwiseLineThree} fill alt={'Twist Decoration'} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4">
        <div className="col-span-1 flex justify-center lg:justify-start items-center ">
          <h1 className="text-5xl font-semibold text-primary">
            Why we are <br /> unique
          </h1>
        </div>

        <UniqueCard
          className={'col-span-1'}
          IconComponent={<BiNetworkChart size={50} color={'#319bce'} />}
          title="Meet Key Decision Makers"
          desc="Connecting you with the right people."
        />

        <UniqueCard
          className={'col-span-1'}
          IconComponent={<CgDesignmodo size={50} color={'#319bce'} />}
          title="Designing"
          desc="An Outstanding Overall Exhibition Design will reflect well on your organization."
        />

        <UniqueCard
          className={'col-span-1'}
          IconComponent={<AiOutlineSearch size={50} color={'#319bce'} />}
          title="Data Base Access"
          desc="Access to the biggest IT Service Providers and Vendors Database in Saudi Arabia."
        />

        <UniqueCard
          className={'col-span-1'}
          IconComponent={<FaHandshake size={50} color={'#319bce'} />}
          title="Matchmaking Services"
          desc="Matching you with high quality leads. Making your business process more efficient."
        />
      </div>
    </div>
  );
};

export default WhyUnique;
