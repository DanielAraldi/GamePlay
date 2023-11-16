import { useNavigation } from '@react-navigation/native';
import { Alert, Image, Text, View } from 'react-native';

import { Background, ButtonIcon } from '../../components';
import { ILLUSTRATION } from '../../config';
import { useAuth } from '../../hooks';
import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  const { isLoadingAuth, signIn } = useAuth();

  async function handleSignIn(): Promise<void> {
    try {
      await signIn();
      navigation.navigate('Home' as never);
    } catch (error) {
      Alert.alert(
        'Falha na autenticação',
        'Não foi possível autenticar, verifique sua conexão com a internet.',
      );
    }
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
            isLoading={isLoadingAuth}
            onPress={async () => await handleSignIn()}
          />
        </View>
      </View>
    </Background>
  );
}
