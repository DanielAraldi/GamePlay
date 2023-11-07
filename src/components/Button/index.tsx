import { Text, TouchableOpacity } from 'react-native';

import { ButtonProps } from '../../@types';

import { styles } from './styles';

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
