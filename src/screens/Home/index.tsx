import { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';

import {
  Appointment,
  Background,
  ButtonAdd,
  CategorySelect,
  ListDivider,
  ListHeader,
  Profile,
} from '../../components';
import { APPOINTMENTS } from '../../utils';
import { AppointmentProps } from '../../@types';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  const [category, setCategory] = useState<string>('');

  function handleAppointmentDetails(): void {
    navigation.navigate('AppointmentDetails' as never);
  }

  function handleAppointmentCreate(): void {
    navigation.navigate('AppointmentCreate' as never);
  }

  function handleCategorySelect(categoryId: string): void {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const keyExtractor = useCallback(
    (item: AppointmentProps) => item.id,
    [APPOINTMENTS]
  );

  const renderItem = useCallback(
    ({ item }: RenderItem<AppointmentProps>) => (
      <Appointment
        activeOpacity={0.7}
        onPress={handleAppointmentDetails}
        {...item}
      />
    ),
    [APPOINTMENTS]
  );

  return (
    <Background>
      <View style={styles.header}>
        <Profile />

        <ButtonAdd activeOpacity={0.7} onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        onSelect={handleCategorySelect}
      />

      <ListHeader subtitle='Total 6' title='Partidas agendadas' />

      <FlatList
        data={APPOINTMENTS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </Background>
  );
}
