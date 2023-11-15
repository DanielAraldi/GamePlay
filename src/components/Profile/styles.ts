import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',
  },

  content: {
    flex: 1,
  },

  user: {
    flexDirection: 'row',

    marginRight: RFValue(20),
  },

  message: {
    fontFamily: theme.fonts.text400,

    color: theme.colors.highlight,
  },

  greeting: {
    fontSize: RFValue(24),
    fontFamily: theme.fonts.title500,

    color: theme.colors.heading,
  },

  username: {
    fontSize: RFValue(24),
    fontFamily: theme.fonts.title700,

    color: theme.colors.heading,
  },

  logoutContainer: {
    paddingTop: RFValue(24),
    paddingHorizontal: RFValue(24),

    justifyContent: 'center',
    alignItems: 'center',
  },

  defaultLogoutText: {
    marginBottom: RFValue(24),

    fontSize: RFValue(24),
    fontFamily: theme.fonts.title500,

    color: theme.colors.heading,
  },

  highlightText: {
    fontFamily: theme.fonts.title700,
  },

  highlightPlayText: {
    color: theme.colors.primary,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  gap: {
    width: RFValue(8),
  },
});
