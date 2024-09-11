import React from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import ModalContent from '../Modal/ModalContent';
import { cards } from '../../data/CardData';
import useCardActions from '../../hooks/useCardActions';
import useIsMobile from '../../hooks/useIsMobile';

const CardList: React.FC = () => {
  const isMobile = useIsMobile();
  const { selectedCardIndex, isModalOpen, openModal, closeModal, handleCardClick, getToggleData, getModalImages } =
    useCardActions();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
          />
        </Modal>
      )}
    </>
  );
};

export default CardList;
