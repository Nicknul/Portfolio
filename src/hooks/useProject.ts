import { useParams } from 'react-router-dom';
import { cardData } from '../data/CardData';

export const useProject = () => {
  const { id } = useParams<{ id: string }>();
  const project = cardData.find((project) => project.id === id);

  return { project };
};
