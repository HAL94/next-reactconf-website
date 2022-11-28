import React from 'react';
import styles from './JoinUs.module.css';
import { FaPersonBooth } from 'react-icons/fa';
import { GiSpeaker } from 'react-icons/gi';
import { BsPeopleFill, BsHddNetworkFill } from 'react-icons/bs';
import { AiFillVideoCamera } from 'react-icons/ai';
import useAppearAnimation from '../../hooks/useAppearAnimation';
import SimpleBox from '../SimpleBox/SimpleBox';

const JoinUs = () => {
  useAppearAnimation({
    animateClass: styles.reveal,
    activeClass: styles.active,
  });
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
          <SimpleBox
            IconComponent={FaPersonBooth}
            iconProps={{ size: 50, color: '#319bce' }}
            className="col-span-1"
            boxText="Reserve your place in one of the biggest technology events in
            KSA"
            boxTitle="Exhibit With Us"
            hasButton={true}
          />
          <SimpleBox
            IconComponent={GiSpeaker}
            iconProps={{ size: 50, color: '#319bce' }}
            className="col-span-1"
            boxText="There is still time to be part of a large event in the making"
            boxTitle="Sponser Us"
            hasButton={true}
          />
          <SimpleBox
            IconComponent={AiFillVideoCamera}
            iconProps={{ size: 50, color: '#319bce' }}
            className="col-span-1"
            boxText="Take this chance to cover and record the event as a media
            partner"
            boxTitle="Cover the event"
            hasButton={true}
          />
        </div>
        <div className="container mx-auto my-5">
          <div
            className={`grid lg:grid-cols-2 grid-cols-1 gap-4 max-w-[1000px] mx-auto`}
          >
            <SimpleBox
              IconComponent={BsPeopleFill}
              iconProps={{ size: 50, color: '#319bce' }}
              className="col-span-1"
              boxText="We would love to have you as a visitor"
              boxTitle="Visit Us"
              hasButton={true}
            />
            <SimpleBox
              IconComponent={BsHddNetworkFill}
              iconProps={{ size: 50, color: '#319bce' }}
              className="col-span-1"
              boxText="Don't miss out on attending a workshop from experts and
              professionals in the industry."
              boxTitle="Register for a Workshop"
              hasButton={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
