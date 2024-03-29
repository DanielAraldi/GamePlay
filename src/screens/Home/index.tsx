import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { FlatList, Text, View } from 'react-native';

import {
  Appointment,
  Background,
  ButtonAdd,
  CategorySelect,
  ListDivider,
  ListHeader,
  Load,
  Profile,
} from '../../components';
import { Storage } from '../../libs';
import { styles } from './styles';

export function Home() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string>('');
  const [appoitments, setAppointments] = useState<CustomAppointmentProps[]>([]);

  function handleAppointmentDetails(
    appointmentSelected: CustomAppointmentProps,
  ): void {
    navigation.navigate(
      'AppointmentDetails' as never,
      { appointment: appointmentSelected } as never,
    );
  }

  function handleAppointmentCreate(): void {
    navigation.navigate('AppointmentCreate' as never);
  }

  function handleCategorySelect(categoryId: string): void {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  async function loadAppointments(): Promise<void> {
    const storage = await Storage.getAvailableAppointments();
    const appoitmentStoraged = storage || [];

    if (category) {
      setAppointments(
        appoitmentStoraged.filter(
          appoitment => appoitment.category === category,
        ),
      );
    } else {
      setAppointments(appoitmentStoraged);
    }

    setIsLoading(false);
  }

  const keyExtractor = useCallback(
    (item: CustomAppointmentProps) => item.id,
    [appoitments],
  );

  const renderItem = useCallback(
    ({ item }: RenderItem<CustomAppointmentProps>) => (
      <Appointment
        activeOpacity={0.7}
        onPress={() => handleAppointmentDetails(item)}
        {...item}
      />
    ),
    [appoitments],
  );

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category]),
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

      <If condition={isLoading}>
        <Then>
          <Load />
        </Then>
        <Else>
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
        </Else>
      </If>
    </Background>
  );
}
