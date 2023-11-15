import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: RFValue(56),

    borderRadius: 8,
  },

  content: {
    minWidth: RFValue(144),
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    padding: RFValue(8),
  },

  primary: {
    backgroundColor: theme.colors.primary,
  },

  cancel: {
    backgroundColor: theme.colors.transparent,

    borderWidth: 1,
    borderColor: theme.colors.secondary40,
  },

  title: {
    fontSize: RFValue(15),
    fontFamily: theme.fonts.text500,

    color: theme.colors.heading,
  },
});
