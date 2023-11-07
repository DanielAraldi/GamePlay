import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: RFValue(100),
  },

  overlay: {
    flex: 1,

    backgroundColor: theme.colors.overlay,
  },

  bar: {
    width: RFValue(39),
    height: 2,

    alignSelf: 'center',

    marginTop: RFValue(13),
    marginBottom: RFValue(103),

    backgroundColor: theme.colors.secondary40,
  },
});
