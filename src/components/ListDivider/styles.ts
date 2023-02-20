import { StyleSheet } from 'react-native';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 1,

    alignSelf: 'flex-end',

    marginVertical: 21,

    backgroundColor: theme.colors.secondary40,
  },
});
