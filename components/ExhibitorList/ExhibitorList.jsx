import Image from 'next/image';
import React from 'react';
import useAppearAnimation from '../../hooks/useAppearAnimation';
import styles from './ExhibitorList.module.css';

const ExhibitorList = ({ exhibitorList }) => {
  useAppearAnimation({ animateClass: styles.reveal, activeClass: styles.active });
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-center text-6xl font-semibold text-secondary">
        Our Exhibitors
      </h1>
      <div className="w-full my-10">
        <div
          className={`grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ${styles.reveal}`}
          data-exhibitor="exhibitor"
        >
          {exhibitorList.map((exhibitor) => (
            <div key={exhibitor._id} className="col-span-1 my-2 flex justify-center items-center">
              <div className="min-h-[200px] max-h-[200px] max-w-[285px] flex justify-center items-center">
                <Image
                  src={exhibitor.exhibitorImage}
                  width={200}
                  height={200}
                  alt={'Reactor Exhibitor'}                  
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExhibitorList;
