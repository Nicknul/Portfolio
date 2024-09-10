import React, { useState } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import { cards } from '../../data/CardData';
import { modalData } from '../../data/ModalData';
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
          <h2 className="text-xl font-semibold">{modalData[selectedCardIndex].title}</h2>
          <p className="mt-4">{modalData[selectedCardIndex].description}</p>
        </Modal>
      )}
    </>
  );
};

export default CardList;
