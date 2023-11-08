import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '100%',
    height: 104,

    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: getStatusBarHeight(),
    paddingHorizontal: RFValue(24),
  },

  title: {
    flex: 1,

    textAlign: 'center',

    fontFamily: theme.fonts.title700,
    fontSize: RFValue(20),

    color: theme.colors.heading,
  },

  empty: {
    width: RFValue(24),
  },
});
