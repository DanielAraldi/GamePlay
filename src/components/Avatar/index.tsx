import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../config';
import { AvatarProps } from '../../@types';
import { styles } from './styles';

export function Avatar({ urlImage }: AvatarProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
