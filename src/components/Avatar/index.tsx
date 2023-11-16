import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { AvatarProps } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function Avatar({ urlImage }: AvatarProps) {
  const { secondary60, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary60, secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
