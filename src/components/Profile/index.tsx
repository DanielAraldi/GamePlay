import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useAuth } from '../../hooks';
import { Avatar } from '../Avatar';
import { GenericButton } from '../GenericButton';
import { ModalView } from '../ModalView';

import { styles } from './styles';

export function Profile() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openLogoutModal, setOpenLogoutModal] = useState<boolean>(false);

  const { user, signOut } = useAuth();

  function handleOpenModal(): void {
    setOpenLogoutModal(true);
  }

  function handleCloseModal(): void {
    setOpenLogoutModal(false);
  }

  async function handleLogout(): Promise<void> {
    setIsLoading(true);
    await signOut();
    setOpenLogoutModal(false);
    setIsLoading(false);
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleOpenModal}>
          <Avatar urlImage={user.avatar} />
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.user}>
            <Text
              ellipsizeMode='tail'
              numberOfLines={2}
              style={styles.username}
            >
              <Text style={styles.greeting}>Olá, </Text>
              {user.firstName}
            </Text>
          </View>

          <Text style={styles.message}>Hoje é dia de vitória</Text>
        </View>
      </View>

      <ModalView
        type='logout'
        visible={openLogoutModal}
        onDismiss={handleCloseModal}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.logoutContainer}>
          <Text style={styles.defaultLogoutText}>
            Deseja sair do <Text style={styles.highlightText}>Game</Text>
            <Text style={[styles.highlightText, styles.highlightPlayText]}>
              Play
            </Text>
            <Text>?</Text>
          </Text>

          <View style={styles.row}>
            <GenericButton
              title='Não'
              variant='cancel'
              onPress={handleCloseModal}
            />

            <View style={styles.gap} />

            <GenericButton
              title='Sim'
              variant='primary'
              isLoading={isLoading}
              onPress={async () => await handleLogout()}
            />
          </View>
        </View>
      </ModalView>
    </>
  );
}
