import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 1,

    alignSelf: 'flex-end',

    marginVertical: RFValue(21),

    backgroundColor: theme.colors.secondary40,
  },
});
