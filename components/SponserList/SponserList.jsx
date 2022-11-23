
import React, { useState } from 'react';
import useAppearAnimation from '../../hooks/useAppearAnimation';
import SponserCard from './SponserCard';
import styles from './SponserList.module.css';

const SponserList = ({ sponserList }) => {
  const [platinuimSponsers] = useState(
    sponserList.filter((sponser) => sponser.sponserTier === 'PLATINIUM'),
  );
  const [goldSponsers] = useState(
    sponserList.filter((sponser) => sponser.sponserTier === 'GOLD'),
  );
  const [diamondSponsers] = useState(
    sponserList.filter((sponser) => sponser.sponserTier === 'DIAMOND'),
  );

  useAppearAnimation({ animateClass: styles.reveal, activeClass: styles.active });

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-center text-6xl font-semibold text-secondary">
        Official Sponsers
      </h1>
      <div className={`flex flex-col ${styles.reveal}`} data-sponser="sponser">
        <h1 className="container mx-auto text-left mt-8 w-full text-4xl font-semibold text-primary">
          Platinium Sponsers
        </h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 my-12">
          {platinuimSponsers.map((sponser) => (
            <SponserCard
              key={sponser._id}
              className="col-span-1 border-t-4 rounded border-primary"
              sponserName={sponser.sponserName}
              sponserCountry={sponser.sponserCountry}
              sponserImage={sponser.sponserImage}
            />
          ))}
        </div>
      </div>
      <div className={`flex flex-col ${styles.reveal}`} data-sponser="sponser">
        <h1 className="container mx-auto text-left mt-8 w-full text-4xl font-semibold text-yellow-500">
          Gold Sponsers
        </h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 my-12">
          {goldSponsers.map((sponser) => (
            <SponserCard
              key={sponser._id}
              className="col-span-1 border-t-4 rounded border-yellow-500"
              sponserName={sponser.sponserName}
              sponserCountry={sponser.sponserCountry}
              sponserImage={sponser.sponserImage}
            />
          ))}
        </div>
      </div>
      <div className={`flex flex-col ${styles.reveal}`} data-sponser="sponser">
        <h1 className="container mx-auto text-left mt-8 w-full text-4xl font-semibold text-[#38717e]">
          Diamond Sponsers
        </h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 my-12">
          {diamondSponsers.map((sponser) => (
            <SponserCard
              key={sponser._id}
              className="col-span-1 border-t-4 rounded border-[#38717e]"
              sponserName={sponser.sponserName}
              sponserCountry={sponser.sponserCountry}
              sponserImage={sponser.sponserImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponserList;
