import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '100%',

    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: RFValue(27),

    paddingHorizontal: RFValue(24),
  },

  title: {
    fontSize: RFValue(18),
    fontFamily: theme.fonts.title700,

    color: theme.colors.heading,
  },

  subtitle: {
    fontSize: RFValue(13),
    fontFamily: theme.fonts.text400,

    color: theme.colors.highlight,
  },
});
