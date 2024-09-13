import { useState } from 'react';
import { cards } from '../data/CardData';

const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(cards.map((card) => card.category)))];

  const filteredCards = selectedCategory === 'All' ? cards : cards.filter((card) => card.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return {
    categories,
    selectedCategory,
    filteredCards,
    handleCategoryChange,
  };
};

export default useCategory;
