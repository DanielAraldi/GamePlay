import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: RFValue(62),
    height: RFValue(66),

    overflow: 'hidden',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.colors.discord,

    borderRadius: 8,
  },

  image: {
    width: RFValue(62),
    height: RFValue(66),
  },
});
