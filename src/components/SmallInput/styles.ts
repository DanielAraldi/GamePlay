import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: RFValue(48),
    height: RFValue(48),

    marginRight: RFValue(4),

    fontFamily: theme.fonts.text400,
    fontSize: RFValue(13),
    color: theme.colors.heading,
    textAlign: 'center',

    backgroundColor: theme.colors.secondary50,

    borderRadius: 8,
  },
});
