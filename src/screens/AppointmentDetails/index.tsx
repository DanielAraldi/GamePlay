import { useCallback } from 'react';
import {
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Background,
  Header,
  ListHeader,
  Member,
  ListDivider,
  ButtonIcon,
} from '../../components';
import { theme, BANNER } from '../../config';
import { MEMBERS } from '../../utils';
import { HomeParams, MemberProps } from '../../@types';

import { styles } from './styles';

export function AppointmentDetails() {
  const route = useRoute();
  const { appointment } = route.params as HomeParams;

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
            {appointment.guild.name}
          </Text>

          <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode='tail'>
            {appointment.description}
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title='Jogadores' subtitle='Total 2' />

      <FlatList
        data={MEMBERS}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        style={styles.members}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={styles.internalList}
      />

      <View style={styles.footer}>
        <ButtonIcon title='Entrar na partida' />
      </View>
    </Background>
  );
}
