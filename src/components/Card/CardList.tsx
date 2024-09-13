import React from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import useCardActions from '../../hooks/useCardActions';
import useCategory from '../../hooks/useCategory';
import CategoryTabs from './CategoryTabs';
import CardListContent from './CardListContent';

const CardList: React.FC = () => {
  const isMobile = useIsMobile();
  const { selectedCardIndex, isModalOpen, openModal, closeModal, handleCardClick, getToggleData, getModalImages } =
    useCardActions();
  const { categories, selectedCategory, filteredCards, handleCategoryChange } = useCategory();

  return (
    <>
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <CardListContent
        cards={filteredCards}
        selectedCardIndex={selectedCardIndex}
        isMobile={isMobile}
        handleCardClick={handleCardClick}
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        getToggleData={getToggleData}
        getModalImages={getModalImages}
      />
    </>
  );
};

export default CardList;
