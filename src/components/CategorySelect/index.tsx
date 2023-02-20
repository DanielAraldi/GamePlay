import { ScrollView } from 'react-native';

import { Category } from '../';
import { CategorySelectProps } from '../../@types';
import { CATEGORIES } from '../../utils';

import { styles } from './styles';

export function CategorySelect({
  categorySelected,
  onSelect,
}: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      {CATEGORIES.map(({ id, ...rest }) => (
        <Category
          key={id}
          checked={id === categorySelected}
          activeOpacity={0.7}
          onPress={() => onSelect(id)}
          {...rest}
        />
      ))}
    </ScrollView>
  );
}
