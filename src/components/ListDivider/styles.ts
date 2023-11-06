import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: '78%',
    height: 1,

    alignSelf: 'flex-end',

    marginTop: 2,
    marginVertical: RFValue(31),

    backgroundColor: theme.colors.secondary40,
  },
});
