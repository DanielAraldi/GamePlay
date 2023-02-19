import { Text, View, Image } from 'react-native';
import { ButtonIcon } from '../../components';

import { ILLUSTRATION } from '../../config';
import { styles } from './styles';

export function SignIn() {
  return (
    <View style={styles.constainer}>
      <Image source={ILLUSTRATION} style={styles.image} resizeMode='stretch' />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize{'\n'}suas jogatinas{'\n'}facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </Text>

        <ButtonIcon title='Entrar com Discord' activeOpacity={0.7} />
      </View>
    </View>
  );
}
