import { useCallback, useEffect } from 'react';

export default function useAppearAnimation({ animateClass, activeClass, repeatAnimation = false }) {
  
  const observeFn = useCallback(() => {
    const reveals = document.querySelectorAll(`.${animateClass}`);
    const observer = new IntersectionObserver((entries) => {
      if (repeatAnimation) {
        entries.forEach(entry => entry.target.classList.toggle(`${activeClass}`, entry.isIntersecting))
      } else {        
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${activeClass}`)
          }
        })        
      }
    });
    reveals.forEach((element) => observer.observe(element));
    return observer;
  }, [animateClass, activeClass, repeatAnimation]);

  useEffect(() => {
    const observer = observeFn();
    return () => {
      if (observer) {
        observer.disconnect();
      }
    }
  }, [observeFn])
}
