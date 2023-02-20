import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ButtonAddProps } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function ButtonAdd(props: ButtonAddProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <MaterialCommunityIcons
        name='plus'
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  );
}
