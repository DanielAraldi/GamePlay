import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  image: {
    width: RFValue(64),
    height: RFValue(64),

    marginRight: RFValue(20),

    borderRadius: 8,
  },
});
