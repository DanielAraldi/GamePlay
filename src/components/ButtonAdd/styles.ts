import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: RFValue(49),
    height: RFValue(49),

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.colors.primary,

    borderRadius: 8,
  },
});
