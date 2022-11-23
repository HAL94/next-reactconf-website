import React from 'react';
import styles from './UniqueCard.module.css';
const UniqueCard = ({ className, IconComponent, desc, title }) => {  
  return (
    <div className={`${className} ${styles['unique-card']} flex justify-center items-center py-10 px-7 border shadow-lg`}
    >
      <span className={`mr-6 ${styles.icon}`}>{IconComponent}</span>
      <div className={`flex flex-col justify-center items-start`}>
        <h1 className="text-[22px] font-semibold text-primary">{title}</h1>
        <p className="text-md">{desc}</p>
      </div>
    </div>
  );
};

export default UniqueCard;
