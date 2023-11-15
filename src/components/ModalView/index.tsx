import { Modal, View, TouchableWithoutFeedback } from 'react-native';

import { ModalViewProps } from '../../@types';
import { Background } from '../Background';

import { styles } from './styles';

export function ModalView({ children, onDismiss, ...rest }: ModalViewProps) {
  function handleCloseModal(): void {
    if (onDismiss) return onDismiss();
  }

  return (
    <Modal transparent statusBarTranslucent animationType='slide' {...rest}>
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />

              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
