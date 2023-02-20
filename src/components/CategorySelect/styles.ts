import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    maxHeight: RFValue(120),
    minHeight: RFValue(120),

    paddingLeft: RFValue(24),
  },

  contentContainerStyle: {
    paddingRight: RFValue(40),
  },
});
