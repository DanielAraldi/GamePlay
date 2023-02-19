import { StyleSheet } from 'react-native';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.colors.background,
  },

  image: {
    width: '100%',
    height: 360,
  },

  content: {
    marginTop: -40,

    paddingHorizontal: 50,
  },

  title: {
    marginBottom: 16,

    fontSize: 40,

    textAlign: 'center',

    color: theme.colors.heading,
  },

  subtitle: {
    marginBottom: 64,

    fontSize: 15,

    textAlign: 'center',

    color: theme.colors.heading,
  },
});
