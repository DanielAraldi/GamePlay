import { LinearGradient } from 'expo-linear-gradient';
import { When } from 'react-if';
import { Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { CategoryProps } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function Category({
  title,
  icon: Icon,
  hasCheckBox = false,
  checked = false,
  ...rest
}: CategoryProps) {
  const { secondary50, secondary60, secondary70 } = theme.colors;

  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary60, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary70 : secondary60, secondary50]}
        >
          <When condition={hasCheckBox}>
            <View style={checked ? styles.checked : styles.check} />
          </When>

          <Icon width={RFValue(48)} height={RFValue(48)} />

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
}
