import { useCallback, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import {
  Appointment,
  Background,
  ButtonAdd,
  CategorySelect,
  ListDivider,
  ListHeader,
  Profile,
  Load,
} from '../../components';
import { AppointmentProps, HomeParams } from '../../@types';
import { styles } from './styles';
import { Storage } from '../../libs';

export function Home() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string>('');
  const [appoitments, setAppointments] = useState<AppointmentProps[]>([]);

  function handleAppointmentDetails(appointment: AppointmentProps): void {
    console.warn(appointment);
    navigation.navigate(
      'AppointmentDetails' as never,
      { appointment } as never
    );
  }

  function handleAppointmentCreate(): void {
    navigation.navigate('AppointmentCreate' as never);
  }

  function handleCategorySelect(categoryId: string): void {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const keyExtractor = useCallback(
    (item: AppointmentProps) => item.id,
    [appoitments]
  );

  const renderItem = useCallback(
    ({ item }: RenderItem<AppointmentProps>) => (
      <Appointment
        activeOpacity={0.7}
        onPress={() => handleAppointmentDetails(item)}
        {...item}
      />
    ),
    [appoitments]
  );

  async function loadAppointments(): Promise<void> {
    const storage = await Storage.get<AppointmentProps[]>('appointments');
    const appoitmentStoraged = storage || [];

    if (category) {
      setAppointments(
        appoitmentStoraged.filter(
          appoitment => appoitment.category === category
        )
      );
    } else {
      setAppointments(appoitmentStoraged);
    }

    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
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

      {isLoading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            subtitle={`Total ${appoitments.length}`}
            title='Partidas agendadas'
          />

          <FlatList
            data={appoitments}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                Você não possui nenhuma partida{'\n'}agendada no momento!
              </Text>
            )}
          />
        </>
      )}
    </Background>
  );
}
