import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: RFValue(234),
  },

  bannerContent: {
    flex: 1,

    justifyContent: 'flex-end',

    marginBottom: RFValue(30),

    paddingHorizontal: RFValue(24),
  },

  title: {
    fontSize: RFValue(28),
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },

  subtitle: {
    fontSize: RFValue(13),
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
  },

  members: {
    marginTop: RFValue(27),
    marginLeft: RFValue(24),
  },

  internalList: {
    paddingBottom: RFValue(69),
  },

  footer: {
    marginBottom: getBottomSpace(),

    paddingHorizontal: RFValue(24),
    paddingVertical: RFValue(20),
  },
});
