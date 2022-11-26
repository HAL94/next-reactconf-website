import React from 'react';
import useAppearAnimation from '../../hooks/useAppearAnimation';
import IconCircleImg from '../../public/icon-circle-1.png';
import styles from './IconCircle.module.css';

const IconCircle = () => {
  useAppearAnimation({
    animateClass: styles.reveal,
    activeClass: styles.active,
  });
  return (
    <div
      className={`${styles.reveal} -left-[50%] top-0 lg:bg-[length:100%] opacity-5 absolute w-[500px] h-[500px]`}
      style={{
        backgroundImage: `url(${IconCircleImg.src})`,
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
  );
};

export default IconCircle;
