import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';

import { GenericButtonProps } from '../../@types';

import { styles } from './styles';

export function GenericButton({
  variant,
  title,
  isLoading,
  disabled,
  ...rest
}: GenericButtonProps) {
  const background: Record<
    GenericButtonProps['variant'],
    StyleProp<ViewStyle>
  > = {
    cancel: styles.cancel,
    primary: styles.primary,
  };

  return (
    <View style={[styles.container, background[variant]]}>
      <TouchableOpacity
        style={styles.content}
        disabled={isLoading || disabled}
        activeOpacity={0.7}
        {...rest}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
