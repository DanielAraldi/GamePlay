import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { If, Then, Else } from 'react-if';

import { ButtonIconProps } from '../../@types';
import { DISCORD, theme } from '../../config';
import { styles } from './styles';

export function ButtonIcon({
  title,
  isLoading,
  disabled,
  ...rest
}: ButtonIconProps) {
  return (
    <TouchableOpacity
      style={[styles.container, isLoading && styles.disabled]}
      disabled={isLoading || disabled}
      activeOpacity={0.7}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DISCORD} style={styles.icon} />
      </View>

      <If condition={isLoading}>
        <Then>
          <ActivityIndicator
            style={styles.loading}
            color={theme.colors.heading}
            size={RFValue(15)}
          />
        </Then>
        <Else>
          <Text style={styles.title}>{title}</Text>
        </Else>
      </If>
    </TouchableOpacity>
  );
}
