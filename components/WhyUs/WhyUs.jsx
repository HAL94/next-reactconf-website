import Image from 'next/image';
import React, { useEffect } from 'react';
import IconDots3 from '../../public/icon-dots-3.png';
import styles from './WhyUs.module.css';

import { AiFillCheckCircle } from 'react-icons/ai';
import useAppearAnimation from '../../hooks/useAppearAnimation';

const WhyUs = ({ aboutConf, whyUsImage }) => {  
  const aboutConfText = aboutConf.split('\n');
  useAppearAnimation({ animateClass: styles['reveal-dot-icons'], activeClass: styles.active })
  return (
    <div className="container relative mx-auto py-10 lg:px-4 px-10 flex flex-wrap justify-center items-center">
      <div className={`hidden lg:block absolute ${styles['reveal-dot-icons']}`}>
        <Image
          src={IconDots3}
          width={200}
          height={200}
          alt={'Circle Decoration'}
        />
      </div>
      <div className="self-baseline lg:mr-10">
        <h3 className="text-black text-xl leading-3 mb-3 tracking-widest uppercase">
          Join the event
        </h3>
        <h1 className="text-4xl text-black leading-2 my-4 uppercase">
          Welcome to Reactors 2023
        </h1>
        <p className="lg:max-w-[600px] text-justify lg:text-lg">
          {aboutConfText.map((text, idx) => {
            if (text === '') {
              return <br key={`about_conf_${idx}`} />;
            }
            return <span key={`about_conf_${idx}`}>{text}</span>;
          })}
        </p>
        <table className="table-fixed my-4 lg:text-lg">
          <tbody>
            <tr className="leading-10">
              <td className="w-[50px]">
                <AiFillCheckCircle size={25} color={'#319bce'} />
              </td>
              <td>Precise Planning, Design and Implementation.</td>
            </tr>
            <tr className="leading-10">
              <td className="w-[50px]">
                <AiFillCheckCircle size={25} color={'#319bce'} />
              </td>
              <td> Exhibition stand design and layout.</td>
            </tr>
            <tr className="leading-10">
              <td className="w-[50px]">
                <AiFillCheckCircle size={25} color={'#319bce'} />
              </td>
              <td>
                Event logistics, locations, directions and event management.
              </td>
            </tr>
            <tr className="leading-10">
              <td>
                <AiFillCheckCircle size={25} color={'#319bce'} />
              </td>
              <td>VIP Hall Special Design and Activity.</td>
            </tr>
            <tr className="leading-10">
              <td className="w-[50px]">
                <AiFillCheckCircle size={25} color={'#319bce'} />
              </td>
              <td>400,000$ Marketing Campaigns.</td>
            </tr>
          </tbody>
        </table>
        <button className="primary-button">Get Your Tickets Now</button>

      </div>
      <div className="flex justify-center items-center my-6">
        <Image
          src={whyUsImage}
          width={500}
          height={1000}
          alt={'Why Come to Us'}
          className=""
        />
      </div>
    </div>
  );
};

export default WhyUs;
