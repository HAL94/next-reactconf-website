import { useEffect } from 'react';

export default function useAppearAnimation({ animateClass, activeClass }) {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(`.${animateClass}`);
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight) {
          reveals[i].classList.add(`${activeClass}`);
        }
      }
    };

    window.addEventListener('scroll', reveal);

    reveal();

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, [animateClass, activeClass]);
}
