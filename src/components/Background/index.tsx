import { LinearGradient } from 'expo-linear-gradient';

import { BackgroundProps } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function Background({ children }: BackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
