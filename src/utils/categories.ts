import { DUEL_SVG, FUN_SVG, RANKED_SVG, TRAINING_SVG } from '../config';
import { CategoriesProps } from '../@types';

export const CATEGORIES: CategoriesProps[] = [
  {
    id: '1',
    title: 'Ranqueado',
    icon: RANKED_SVG,
  },
  {
    id: '2',
    title: 'Duelo 1x1',
    icon: DUEL_SVG,
  },
  {
    id: '3',
    title: 'Diversão',
    icon: FUN_SVG,
  },
  {
    id: '4',
    title: 'Treino',
    icon: TRAINING_SVG,
  },
];
