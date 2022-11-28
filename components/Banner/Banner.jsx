import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ bannerImage, bannerText, bannerStyle = {} }) => {
  return (
    <div
      style={{ ...bannerStyle }}
      className={`${styles.banner} flex justify-center items-center w-full h-[250px] lg:h-[450px]`}
    >
      <div
        className="w-full p-0 h-full absolute flex justify-center items-center"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }}
      >
        <h1 className="text-2xl lg:text-5xl font-semibold text-white absolute z-[11]">
          {bannerText}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
