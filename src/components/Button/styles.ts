import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '100%',
    height: RFValue(56),

    alignItems: 'center',

    backgroundColor: theme.colors.primary,

    borderRadius: 8,
  },

  title: {
    flex: 1,

    fontSize: RFValue(15),
    fontFamily: theme.fonts.text500,
    textAlign: 'center',
    color: theme.colors.heading,
  },
});
