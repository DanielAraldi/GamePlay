import { StyleSheet } from 'react-native';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  user: {
    flexDirection: 'row',
  },

  message: {
    fontFamily: theme.fonts.text400,

    color: theme.colors.highlight,
  },

  greeting: {
    marginRight: 6,

    fontSize: 24,
    fontFamily: theme.fonts.title500,

    color: theme.colors.heading,
  },

  username: {
    fontSize: 24,
    fontFamily: theme.fonts.title700,

    color: theme.colors.heading,
  },
});
