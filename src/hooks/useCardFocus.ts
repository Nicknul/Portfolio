import { useState } from 'react';

const useCardFocus = (initialIndex: number, totalCards: number) => {
  const [focusedCard, setFocusedCard] = useState<number>(initialIndex);

  const focusNextCard = () => {
    setFocusedCard((prev) => (prev < totalCards - 1 ? prev + 1 : 0));
  };

  const focusPreviousCard = () => {
    setFocusedCard((prev) => (prev > 0 ? prev - 1 : totalCards - 1));
  };

  return {
    focusedCard,
    focusNextCard,
    focusPreviousCard,
  };
};

export default useCardFocus;
