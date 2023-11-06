import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background, ButtonIcon } from '../../components';
import { ILLUSTRATION } from '../../config';
import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn(): void {
    navigation.navigate('Home' as never);
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={ILLUSTRATION}
          style={styles.image}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}e organize suas{'\n'}jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
          </Text>

          <ButtonIcon
            title='Entrar com Discord'
            activeOpacity={0.7}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}
