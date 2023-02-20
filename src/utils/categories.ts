import { DuelSvg, FunSvg, RankedSvg, TrainingSvg } from '../config';
import { CategoriesProps } from '../@types';

export const CATEGORIES: CategoriesProps[] = [
  {
    id: '1',
    title: 'Ranqueado',
    icon: RankedSvg,
  },
  {
    id: '2',
    title: 'Duelo 1x1',
    icon: DuelSvg,
  },
  {
    id: '3',
    title: 'Diversão',
    icon: FunSvg,
  },
  {
    id: '4',
    title: 'Treino',
    icon: TrainingSvg,
  },
];
