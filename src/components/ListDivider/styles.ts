import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: '78%',
    height: 1,

    alignSelf: 'flex-end',

    backgroundColor: theme.colors.secondary40,
  },

  centered: {
    marginVertical: RFValue(12),
  },

  normal: {
    marginTop: RFValue(2),
    marginBottom: RFValue(31),
  },
});
