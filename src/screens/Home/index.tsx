import { View } from 'react-native';

import { ButtonAdd, Profile } from '../../components';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />

        <ButtonAdd activeOpacity={0.7} />
      </View>
    </View>
  );
}
