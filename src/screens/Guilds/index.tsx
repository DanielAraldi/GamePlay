import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';

import { GuildProps, GuildsProps } from '../../@types';
import { Guild, ListDivider } from '../../components';
import { GUILDS } from '../../utils';

import { styles } from './styles';

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const keyExtractor = useCallback((item: GuildProps) => item.id, [GUILDS]);

  const renderItem = useCallback(
    ({ item }: RenderItem<GuildProps>) => (
      <Guild {...item} onPress={() => handleGuildSelect(item)} />
    ),
    [GUILDS]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={GUILDS}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <ListDivider isCentered />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
        contentContainerStyle={styles.internalList}
      />
    </View>
  );
}
