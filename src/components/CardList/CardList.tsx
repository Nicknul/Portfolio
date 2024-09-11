import React, { useState } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import { cards } from '../../data/CardData';
import { modalData } from '../../data/ModalData';
import { toggleData } from '../../data/ToggleData';
import { modalImages } from '../../data/ModalImageData';
import ModalContent from '../Modal/ModalContent';
import useIsMobile from './useIsMobile';

const CardList: React.FC = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setSelectedCardIndex(index);
    }
  };

  const openModal = (index: number) => {
    setSelectedCardIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getToggleData = (index: number) => {
    switch (index) {
      case 0:
        return toggleData.erp;
      case 1:
        return toggleData.pokemon;
      case 2:
        return toggleData.dustApp;
      default:
        return [];
    }
  };

  const getModalImages = (index: number) => {
    switch (index) {
      case 0:
        return modalImages.erp;
      case 1:
        return modalImages.pokemon;
      case 2:
        return modalImages.dustApp;
      default:
        return [];
    }
  };

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
            onClick={() => handleCardClick(index)}
            isMobile={isMobile}
            openModal={() => openModal(index)}
          />
        ))}
      </div>

      {selectedCardIndex !== null && (
        <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={cards[selectedCardIndex].image}>
          <ModalContent
            title={modalData[selectedCardIndex].title}
            description={modalData[selectedCardIndex].description}
            toggleData={getToggleData(selectedCardIndex)}
            images={getModalImages(selectedCardIndex)}
          />
        </Modal>
      )}
    </>
  );
};

export default CardList;
