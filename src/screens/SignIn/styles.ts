import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: RFValue(360),
  },

  content: {
    marginTop: RFValue(-40),

    paddingHorizontal: RFValue(50),
  },

  title: {
    marginBottom: RFValue(16),

    fontSize: RFValue(40),
    fontFamily: theme.fonts.title700,

    textAlign: 'center',
    lineHeight: RFValue(40),

    color: theme.colors.heading,
  },

  subtitle: {
    marginBottom: RFValue(64),

    fontSize: RFValue(15),
    fontFamily: theme.fonts.title500,

    textAlign: 'center',
    lineHeight: RFValue(25),

    color: theme.colors.heading,
  },
});
