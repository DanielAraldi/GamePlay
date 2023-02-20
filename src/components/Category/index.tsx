import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { CategoryProps } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: CategoryProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check} />

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
