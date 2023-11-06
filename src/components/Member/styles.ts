import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '100%',

    alignItems: 'center',
  },

  status: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  bulletStatus: {
    width: RFValue(8),
    height: RFValue(8),

    marginRight: RFValue(9),

    borderRadius: RFValue(4),
  },

  title: {
    fontSize: RFValue(18),
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },

  nameStatus: {
    fontSize: RFValue(13),
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
});
