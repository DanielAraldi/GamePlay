import {
  Modal,
  View,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { When } from 'react-if';

import { ModalViewProps } from '../../@types';
import { Background } from '../Background';

import { styles } from './styles';

export function ModalView({
  type,
  children,
  onDismiss,
  ...rest
}: ModalViewProps) {
  const { height } = useWindowDimensions();

  function handleCloseModal(): void {
    if (onDismiss) return onDismiss();
  }

  const logoutModalHeight = RFValue(height - 175, height);
  const isLogout = type === 'logout';

  return (
    <Modal transparent statusBarTranslucent animationType='slide' {...rest}>
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <View style={styles.overlay}>
          <View
            style={[
              styles.container,
              isLogout && { marginTop: logoutModalHeight },
            ]}
          >
            <Background>
              <When condition={!isLogout}>
                <View style={styles.bar} />
              </When>

              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
