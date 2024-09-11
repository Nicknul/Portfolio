import React, { useState } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import ToggleList from '../Toggle/ToggleList';
import { cards } from '../../data/CardData';
import { modalData } from '../../data/ModalData';
import { toggleData } from '../../data/ToggleData';
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
        <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={modalData[selectedCardIndex].imageUrl}>
          <h2 className="text-xl font-semibold">{modalData[selectedCardIndex].title}</h2> <br />
          <ToggleList data={getToggleData(selectedCardIndex)} />
        </Modal>
      )}
    </>
  );
};

export default CardList;
