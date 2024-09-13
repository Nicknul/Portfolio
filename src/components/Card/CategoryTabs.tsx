import React from 'react';
import CardStyles from '../../styles/CardStyles';

type CategoryTabsProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className={CardStyles.tabContainer}>
      {categories.map((category, index) => (
        <button
          key={index}
          className={selectedCategory === category ? CardStyles.activeTab : CardStyles.inactiveTab}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
