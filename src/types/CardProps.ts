export type CardProps = {
  title: string;
  category: string;
  image: string;
  githubLink: string;
  isSelected?: boolean;
  onClick?: () => void;
  isMobile?: boolean;
  openModal?: () => void;
};

export type CardListContentProps = {
  cards: CardProps[];
  selectedCardIndex: number | null;
  isMobile: boolean;
  handleCardClick: (index: number, isMobile: boolean) => void;
  openModal: (index: number) => void;
  closeModal: () => void;
  isModalOpen: boolean;
  getToggleData: (index: number) => any;
  getModalImages: (index: number) => string[];
};
