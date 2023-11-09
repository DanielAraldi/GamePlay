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

  disabled: {
    opacity: 0.7,
  },

  iconWrapper: {
    width: RFValue(56),
    height: RFValue(56),

    justifyContent: 'center',
    alignItems: 'center',

    borderRightWidth: 1,
    borderColor: theme.colors.line,
  },

  icon: {
    width: RFValue(24),
    height: RFValue(18),
  },

  title: {
    flex: 1,

    fontSize: RFValue(15),
    fontFamily: theme.fonts.text500,
    textAlign: 'center',
    color: theme.colors.heading,
  },

  loading: {
    flex: 1,
  },
});
