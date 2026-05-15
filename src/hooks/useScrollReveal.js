import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (options = { threshold: 0.1, rootMargin: '0px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing if we want a one-time animation
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [domRef, isVisible];
};

export default useScrollReveal;
