import Image from 'next/image';
import React from 'react';

const SponserCard = ({ sponserImage, sponserCountry, sponserName, className }) => {
  return (
    <div className={`${className} flex justify-center`}>
      <div className="rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer transition-all duration-300 ease-in bg-white max-w-sm flex flex-col justify-center items-center">
        <div className="max-w-full h-[150px] min-w-[384px]">
          <Image
            className="rounded-t-lg p-3 mx-auto"
            width={150}
            height={150}
            src={sponserImage}
            alt={sponserName || 'Sponser of REACTORS'}
          />
        </div>

        <div className="p-6 self-end w-full">
          <h6 className="text-base text-gray-400 m-0">
            {sponserCountry}
          </h6>
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {sponserName}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SponserCard;
