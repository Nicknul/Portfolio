import { useState, useEffect } from 'react';

const useCardFocus = (initialIndex: number, totalCards: number) => {
  const [focusedCard, setFocusedCard] = useState<number>(initialIndex);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const focusLeft = () => {
    if (!isMobile) {
      setFocusedCard((prev) => (prev > 0 ? prev - 1 : totalCards - 1));
    }
  };

  const focusRight = () => {
    if (!isMobile) {
      setFocusedCard((prev) => (prev < totalCards - 1 ? prev + 1 : 0));
    }
  };

  return { focusedCard, focusLeft, focusRight, isMobile };
};

export default useCardFocus;
