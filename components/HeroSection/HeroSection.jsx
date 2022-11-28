import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = ({ confDetails }) => {
  const { confName, confStartDate, confEndDate, confLocation, confOpeningTimes } = confDetails;
  const [startDate] = useState(new Date(confStartDate));
  const [timeLeft, setTimeLeft] = useState({});
  // const startdate = new Date(confStartDate);
  const enddate = new Date(confEndDate); 

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = startDate - now;
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    }
  }, [startDate]);

  return (
    <div
      className={`flex-1 relative ${styles.hero}`}
      style={{
        backgroundImage: `url(${confDetails.images['websiteBanner']})`,
        backgroundPosition: 'bottom center',
      }}
    >
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center pt-30">
        <span className='primary-gradient cursor-pointer p-4 text-white rounded shadow-md'>{startDate.toLocaleString('default', { day: 'numeric' })} - {enddate.toLocaleString('default', { day: 'numeric' })}, {startDate.toLocaleString('default', { month: 'long' })} { enddate.getFullYear() } </span>
        <h1 className='lg:text-6xl text-2xl font-semibold text-white my-2'>{confName}</h1>
        <h3 className='lg:text-3xl text-xl font-semibold text-white'>{confLocation}</h3>
        <h4 className='lg:text-3xl text-xl font-semibold text-white my-6'>Opening Times: {confOpeningTimes}</h4>

        <div className={`w-full px-4 lg:px-10 py-2  text-white flex flex-wrap flex-row items-center justify-center my-4`}>
          <div className={`flex flex-col justify-center items-center p-4 mx-2 w-[130px] rounded primary-gradient my-2`}>
            <span className='text-2xl lg:text-5xl'>{timeLeft?.days}</span>
            <span className='text-lg lg:text-2xl'>Days</span>
          </div>
          <div className={`flex flex-col justify-center items-center p-4 mx-2 w-[130px] rounded primary-gradient my-2`}>
            <span className='text-2xl lg:text-5xl'>{timeLeft?.hours}</span>
            <span className='text-lg lg:text-2xl'>Hours</span>
          </div>
          <div className={`flex flex-col justify-center items-center p-4 mx-2 w-[130px] rounded primary-gradient my-2`}>
            <span className='text-2xl lg:text-5xl'>{timeLeft?.minutes}</span>
            <span className='text-lg lg:text-2xl'>Minutes</span>
          </div>
          <div className={`flex flex-col justify-center items-center p-4 mx-2 w-[130px] rounded primary-gradient my-2`}>
            <span className='text-2xl lg:text-5xl'>{timeLeft?.seconds}</span>
            <span className='text-lg lg:text-2xl'>Seconds</span>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
