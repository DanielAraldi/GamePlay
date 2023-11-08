import { View } from 'react-native';

import { ListDividerProps } from '../../@types';

import { styles } from './styles';

export function ListDivider({ isCentered }: ListDividerProps) {
  return (
    <View
      style={[styles.container, styles[isCentered ? 'centered' : 'normal']]}
    />
  );
}
