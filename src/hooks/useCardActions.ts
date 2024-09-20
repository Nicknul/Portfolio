// import { useState } from 'react';
// import { toggleData } from '../data/ToggleData';

// const useCardActions = () => {
//   const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (index: number) => {
//     setSelectedCardIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleCardClick = (index: number, isMobile: boolean) => {
//     if (isMobile) {
//       setSelectedCardIndex(index);
//     }
//   };

//   const getToggleData = (index: number) => {
//     switch (index) {
//       case 0:
//         return toggleData.erp;
//       case 1:
//         return toggleData.pokemon;
//       case 2:
//         return toggleData.dustApp;
//       default:
//         return [];
//     }
//   };

//   const getModalImages = (index: number) => {
//     switch (index) {
//       case 0:
//         return modalImages.erp;
//       case 1:
//         return modalImages.pokemon;
//       case 2:
//         return modalImages.dustApp;
//       default:
//         return [];
//     }
//   };

//   return {
//     selectedCardIndex,
//     isModalOpen,
//     openModal,
//     closeModal,
//     handleCardClick,
//     getToggleData,
//     getModalImages,
//   };
// };

// export default useCardActions;
