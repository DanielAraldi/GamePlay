import { ScrollView } from 'react-native';

import { CategorySelectProps } from '../../@types';
import { CATEGORIES } from '../../utils';
import { Category } from '../Category';

import { styles } from './styles';

export function CategorySelect({
  categorySelected,
  onSelect,
  hasCheckBox = false,
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
          hasCheckBox={hasCheckBox}
          onPress={() => onSelect(id)}
          {...rest}
        />
      ))}
    </ScrollView>
  );
}
