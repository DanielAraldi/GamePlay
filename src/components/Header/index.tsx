import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Else, If, Then } from 'react-if';
import { Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { HeaderProps } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function Header({ title, action }: HeaderProps) {
  const navigation = useNavigation();

  const { secondary100, secondary50, heading } = theme.colors;

  function handleGoBack(): void {
    navigation.goBack();
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary50]}
    >
      <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
        <Feather name='arrow-left' size={RFValue(24)} color={heading} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <If condition={!!action}>
        <Then>
          <View>{action}</View>
        </Then>
        <Else>
          <View style={styles.empty} />
        </Else>
      </If>
    </LinearGradient>
  );
}
