import React from 'react';
import { SvgProps } from 'react-native-svg';

export interface CategoriesProps {
  id: string;
  title: string;
  icon: React.FC<SvgProps>;
}
