import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ButtonIconProps } from '../../@types';
import { DISCORD } from '../../config';
import { styles } from './styles';

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DISCORD} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
