import { useCallback, useState, useEffect } from 'react';
import {
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  Alert,
  Share,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { If, Then, Else, When } from 'react-if';

import {
  Background,
  Header,
  ListHeader,
  Member,
  ListDivider,
  ButtonIcon,
  Load,
} from '../../components';
import { theme, BANNER } from '../../config';
import {
  HomeParams,
  UserGuildWidgetProps,
  UserWidgetMembersProps,
} from '../../@types';
import { GuildService } from '../../services';

import { styles } from './styles';

export function AppointmentDetails() {
  const route = useRoute();
  const { appointment } = route.params as HomeParams;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [widget, setWidget] = useState<UserGuildWidgetProps>(
    {} as UserGuildWidgetProps
  );

  const url = widget?.instant_invite || '';
  const guildName = appointment.guild.name;

  function handleShare(): void {
    const message = `Junte-se a ${guildName}! Acesso em: ${url}`;

    Share.share({
      message,
      url,
      title: 'Quer fazer parte do meu servidor?',
    });
  }

  async function handleOpenGuild(): Promise<void> {
    const canOpenURL = await Linking.canOpenURL(url);
    if (canOpenURL) await Linking.openURL(url);
  }

  async function fetchGuildWidget(): Promise<void> {
    try {
      const guildId = appointment.guild.id;
      const guild = await GuildService.getGuild(guildId);
      setWidget(guild);
    } catch (error) {
      Alert.alert(
        'Seu widget não foi encontrado!',
        'Certifique-se que as configurações widget do seu servidor está habilitada!'
      );
    } finally {
      setIsLoading(false);
    }
  }

  const keyExtractor = useCallback(
    (item: UserWidgetMembersProps) => item.id,
    [widget?.members]
  );

  const renderItem = useCallback(
    ({ item }: RenderItem<UserWidgetMembersProps>) => (
      <Member {...item} avatarUrl={item.avatar_url} />
    ),
    [widget?.members]
  );

  useEffect(() => {
    async function loadWidget(): Promise<void> {
      await fetchGuildWidget();
    }

    loadWidget();
  }, []);

  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          widget?.instant_invite && (
            <TouchableOpacity activeOpacity={0.7} onPress={handleShare}>
              <Fontisto
                name='share'
                size={RFValue(24)}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          )
        }
      />

      <ImageBackground source={BANNER} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>
            {guildName}
          </Text>

          <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode='tail'>
            {appointment.description}
          </Text>
        </View>
      </ImageBackground>

      <If condition={isLoading}>
        <Then>
          <Load />
        </Then>
        <Else>
          <ListHeader
            title='Jogadores'
            subtitle={`Total ${widget?.id ? widget.members.length : 0}`}
          />

          <FlatList
            data={widget?.members || []}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            style={styles.members}
            contentContainerStyle={styles.internalList}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                Não há nenhum jogador no{'\n'}servidor no momento!
              </Text>
            )}
          />

          <When condition={url}>
            <View style={styles.footer}>
              <ButtonIcon
                title='Entrar na partida'
                onPress={async () => await handleOpenGuild()}
              />
            </View>
          </When>
        </Else>
      </If>
    </Background>
  );
}
