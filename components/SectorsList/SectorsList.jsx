import Image from 'next/image';
import React from 'react';
import useAppearAnimation from '../../hooks/useAppearAnimation';
import styles from './SectorsList.module.css';

const SectorsList = ({ sectorsList }) => {
  useAppearAnimation({
    animateClass: styles.reveal,
    activeClass: styles.active,
  });
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-center text-6xl font-semibold text-secondary">
        Exhibition Sectors
      </h1>
      <div className="container mx-auto my-10">
        <div
          className={`grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ${styles.reveal}`}
        >
          {sectorsList.map((sector) => (
            <div
              key={sector._id}
              className="col-span-1 min-h-[200px] max-h-[200px] lg:max-w-[285px] my-2 flex flex-col justify-center items-center group transition-all duration-400 ease-in relative"
            >
                {/* group-hover:-translate-y-[80px] */}
              <div className={`relative w-full h-full flex justify-center items-center border-[5px] rounded-full p-4 cursor-pointer lg:group-hover:shadow-lg lg:transition-all lg:duration-400 lg:ease-in`}>
                <Image
                  src={sector.image}
                  width={200}
                  height={200}
                  alt={'Reactor Exhibitio Sector'}
                />
                <div className={`lg:transition-all lg:origin-right-center lg:group-hover:origin-left-center lg:duration-400 lg:ease-in lg:opacity-0 
                lg:group-hover:opacity-100 lg:group-hover:scale-100 opacity-100 absolute inset-0 rounded-full bg-[#000a] 
                text-xl text-white font-semibold w-full flex justify-center items-center`}>
                    <span>{sector.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectorsList;
