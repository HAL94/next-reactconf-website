import React from 'react';
import useAppearAnimation from '../../hooks/useAppearAnimation';
import styles from './SimpleBox.module.css';

const SimpleBox = ({
  IconComponent,
  iconProps,
  boxTitle,
  boxText,
  className = '',
  hasButton,
  onBoxClick,
  children
}) => {
  useAppearAnimation({
    animateClass: styles.reveal,
    activeClass: styles.active,
  });
  return (
    <div
      className={`${styles.reveal} ${className} flex flex-col group justify-center items-center p-6 border shadow-lg transition-all duration-300 ease-in lg:hover:shadow-none cursor-pointer`}
    >
      {IconComponent && <div className="bg-[#f1f6fe] p-4 transition-all duration-300 ease-in rounded lg:group-hover:scale-105">
        <IconComponent {...iconProps} />
      </div>}
      <div className="flex flex-col justify-center items-center">
        {children}
        <span className="text-xl text-secondary">{boxTitle}</span>
        <p className="w-full text-center mb-3 mt-2">{boxText}</p>
        {hasButton && (
          <button className="primary-button my-4" onClick={onBoxClick}>
            Register
          </button>
        )}
      </div>
    </div>
  );
};

export default SimpleBox;
