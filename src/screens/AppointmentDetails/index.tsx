import React, { useCallback } from 'react';
import {
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import {
  Background,
  Header,
  ListHeader,
  Member,
  ListDivider,
  ButtonIcon,
} from '../../components';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme, BANNER } from '../../config';
import { styles } from './styles';
import { MEMBERS } from '../../utils';
import { MemberProps } from '../../@types';

export function AppointmentDetails() {
  const keyExtractor = useCallback((item: MemberProps) => item.id, [MEMBERS]);

  const renderItem = useCallback(
    ({ item }: RenderItem<MemberProps>) => <Member {...item} />,
    [MEMBERS]
  );

  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          <TouchableOpacity activeOpacity={0.7}>
            <Fontisto
              name='share'
              size={RFValue(24)}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        }
      />

      <ImageBackground source={BANNER} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>
            Lendários
          </Text>

          <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode='tail'>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title='Jogadores' subtitle='Total 2' />

      <FlatList
        data={MEMBERS}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title='Entrar na partida' />
      </View>
    </Background>
  );
}
