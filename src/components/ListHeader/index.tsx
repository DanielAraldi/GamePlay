import { Text, View } from 'react-native';

import { ListHeaderProps } from '../../@types';

import { styles } from './styles';

export function ListHeader({ subtitle, title }: ListHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
