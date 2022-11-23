import React from 'react';
import styles from './JoinUs.module.css';
import { FaPersonBooth } from 'react-icons/fa';
import { GiSpeaker } from 'react-icons/gi';
import { BsPeopleFill, BsHddNetworkFill } from 'react-icons/bs';
import { AiFillVideoCamera } from 'react-icons/ai';
import useAppearAnimation from '../../hooks/useAppearAnimation';

const JoinUs = () => {
  useAppearAnimation({ animateClass: styles.reveal, activeClass: styles.active });
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <p className="text-lg uppercase font-semibold tracking-widest my-5 text-primary">
        Join Us
      </p>
      <h1 className="text-center text-6xl font-semibold text-secondary">
        Be Part of Reactors 2023
      </h1>

      <div className="container mx-auto my-10">
        <div className={`grid lg:grid-cols-3 grid-cols-1 gap-4`}>
          <div className={`${styles.reveal} col-span-1 flex flex-col group justify-center items-center p-6 border shadow-lg transition-all duration-300 ease-in lg:hover:shadow-none cursor-pointer`}>
            <div className="bg-[#f1f6fe] p-4 transition-all duration-300 ease-in rounded lg:group-hover:scale-105">
              <FaPersonBooth size={50} color="#319bce" />
            </div>
            <div className="flex flex-col my-4 justify-center items-center">
              <span className="text-xl text-secondary">Exhibit With Us</span>
              <p className="w-full text-center mb-3 mt-2">
                Reserve your place in one of the biggest technology events in
                KSA
              </p>
              <button className="primary-button my-4">Register</button>
            </div>
          </div>
          <div className={`${styles.reveal} col-span-1 flex flex-col group justify-center items-center p-6 border shadow-lg transition-all duration-300 ease-in lg:hover:shadow-none cursor-pointer`}>
            <div className="bg-[#f1f6fe] p-4 transition-all duration-300 ease-in rounded lg:group-hover:scale-105">
              <GiSpeaker size={50} color="#319bce" />
            </div>
            <div className="flex flex-col my-4 justify-center items-center">
              <span className="text-xl text-secondary">Sponser Us</span>
              <p className="w-full text-center mb-3 mt-2">
                There is still time to be part of a large event in the making
              </p>
              <button className="primary-button my-4">Register</button>
            </div>
          </div>
          <div className={`${styles.reveal} col-span-1 flex flex-col group justify-center items-center p-6 border shadow-lg transition-all duration-300 ease-in lg:hover:shadow-none cursor-pointer`}>
            <div className="bg-[#f1f6fe] p-4 transition-all duration-300 ease-in rounded lg:group-hover:scale-105">
              <AiFillVideoCamera size={50} color="#319bce" />
            </div>
            <div className="flex flex-col my-4 justify-center items-center">
              <span className="text-xl text-secondary">Cover the event</span>
              <p className="w-full text-center mb-3 mt-2">
                Take this chance to cover and record the event as a media
                partner
              </p>
              <button className="primary-button my-4">Register</button>
            </div>
          </div>
        </div>
        <div className="container mx-auto my-5">
          <div className={`grid lg:grid-cols-2 grid-cols-1 gap-4 max-w-[1000px] mx-auto`}>
            <div className={`${styles.reveal} col-span-1 flex flex-col group justify-center items-center p-6 border shadow-lg transition-all duration-300 ease-in lg:hover:shadow-none cursor-pointer`}>
              <div className="bg-[#f1f6fe] p-4 transition-all duration-300 ease-in rounded lg:group-hover:scale-105">
                <BsPeopleFill size={50} color="#319bce" />
              </div>
              <div className="flex flex-col my-4 justify-center items-center">
                <span className="text-xl text-secondary">Visit Us</span>
                <p className="w-full text-center mb-3 mt-2">
                  We would love to have you as a visitor
                </p>
                <button className="primary-button my-4">Register</button>
              </div>
            </div>
            <div className={`${styles.reveal} col-span-1 flex flex-col group justify-center items-center p-6 border shadow-lg transition-all duration-300 ease-in lg:hover:shadow-none cursor-pointer`}>
              <div className="bg-[#f1f6fe] p-4 transition-all duration-300 ease-in rounded lg:group-hover:scale-105">
                <BsHddNetworkFill size={50} color="#319bce" />
              </div>
              <div className="flex flex-col my-4 justify-center items-center">
                <span className="text-xl text-secondary">Register for a Workshop</span>
                <p className="w-full text-center mb-3 mt-2">
                  Don&apos;t miss out on attending a workshop from experts and professionals in the industry.
                </p>
                <button className="primary-button my-4">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
