import { useState } from 'react';

const useCardFocus = (initialIndex: number, totalCards: number) => {
  const [focusedCard, setFocusedCard] = useState<number>(initialIndex);

  const focusLeft = () => {
    setFocusedCard((prev) => (prev > 0 ? prev - 1 : totalCards - 1));
  };

  const focusRight = () => {
    setFocusedCard((prev) => (prev < totalCards - 1 ? prev + 1 : 0));
  };

  return { focusedCard, focusLeft, focusRight };
};

export default useCardFocus;
