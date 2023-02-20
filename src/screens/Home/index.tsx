import { useState } from 'react';
import { View } from 'react-native';

import { ButtonAdd, CategorySelect, Profile } from '../../components';
import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState<string>('');

  function handleCategorySelect(categoryId: string): void {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />

        <ButtonAdd activeOpacity={0.7} />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          onSelect={handleCategorySelect}
        />
      </View>
    </View>
  );
}
