import { useEffect, useCallback, useState } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';

import { GuildsProps } from '../../@types';
import { Guild, ListDivider, Load } from '../../components';
import { GuildService } from '../../services';

import { styles } from './styles';

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [guilds, setGuilds] = useState<CustomGuildProps[]>([]);

  async function fetchGuilds(): Promise<void> {
    try {
      setIsLoading(true);
      const response = await GuildService.getGuilds();
      setGuilds(response);
    } catch (error) {
      Alert.alert(
        'Servidores não carregadas',
        'Seus servidores não foram carregados, verifique sua conexão com a internet.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  const keyExtractor = useCallback(
    (item: CustomGuildProps) => item.id,
    [guilds]
  );

  const renderItem = useCallback(
    ({ item }: RenderItem<CustomGuildProps>) => (
      <Guild {...item} onPress={() => handleGuildSelect(item)} />
    ),
    [guilds]
  );

  useEffect(() => {
    async function loadGuilds(): Promise<void> {
      await fetchGuilds();
    }

    loadGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Load />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={styles.guilds}
          contentContainerStyle={styles.internalList}
          ListHeaderComponent={() =>
            guilds.length ? <ListDivider isCentered /> : null
          }
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há nenhum servidor{'\n'}disponível no momento!
            </Text>
          )}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
        />
      )}
    </View>
  );
}
