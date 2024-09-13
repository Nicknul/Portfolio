import React from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import ModalContent from '../Modal/ModalContent';
import { CardListContentProps } from '../../types/CardProps';
import CardStyles from '../../styles/CardStyles';

const CardListContent: React.FC<CardListContentProps> = ({
  cards,
  selectedCardIndex,
  isMobile,
  handleCardClick,
  openModal,
  closeModal,
  isModalOpen,
  getToggleData,
  getModalImages,
}) => {
  return (
    <>
      <div className={CardStyles.gridContainer}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            category={card.category}
            image={card.image}
            githubLink={card.githubLink}
            isSelected={selectedCardIndex === index && isMobile}
            onClick={() => handleCardClick(index, isMobile)}
            isMobile={isMobile}
            openModal={() => openModal(index)}
          />
        ))}
      </div>

      {selectedCardIndex !== null && (
        <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={cards[selectedCardIndex].image}>
          <ModalContent
            title={cards[selectedCardIndex].title}
            description="설명이 없습니다."
            toggleData={getToggleData(selectedCardIndex)}
            images={getModalImages(selectedCardIndex)}
            isMobile={isMobile}
          />
        </Modal>
      )}
    </>
  );
};

export default CardListContent;
