import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ButtonAddProps } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function ButtonAdd(props: ButtonAddProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <MaterialCommunityIcons
        name='plus'
        color={theme.colors.heading}
        size={RFValue(24)}
      />
    </TouchableOpacity>
  );
}
