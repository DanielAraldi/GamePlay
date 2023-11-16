import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '100%',

    alignItems: 'center',

    paddingHorizontal: RFValue(24),
  },

  content: {
    flex: 1,

    justifyContent: 'center',

    marginLeft: RFValue(20),
  },

  title: {
    marginBottom: RFValue(4),

    fontFamily: theme.fonts.title700,
    fontSize: RFValue(18),
    color: theme.colors.heading,
  },

  type: {
    fontFamily: theme.fonts.text400,
    fontSize: RFValue(13),
    color: theme.colors.highlight,
  },
});
