import { StyleSheet } from 'react-native';

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

    marginRight: 20,
  },

  message: {
    fontFamily: theme.fonts.text400,

    color: theme.colors.highlight,
  },

  greeting: {
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
