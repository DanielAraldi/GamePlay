import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Else, If, Then } from 'react-if';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import z from 'zod';

import {
  Background,
  Button,
  CategorySelect,
  GuildIcon,
  Header,
  ModalView,
  SmallInput,
  TextArea,
} from '../../components';
import { theme } from '../../config';
import { DateHelper } from '../../helpers';
import { Storage, UUID, validate } from '../../libs';
import { Guilds } from '../Guilds';
import { styles } from './styles';

export function AppointmentCreate() {
  const navigation = useNavigation();

  const [minute, setMinute] = useState<string>('');
  const [hour, setHour] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openGuildsModal, setOpenGuildsModal] = useState<boolean>(false);
  const [guild, setGuild] = useState<CustomGuildProps>({} as CustomGuildProps);

  function handleOpenGuilds(): void {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds(): void {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: CustomGuildProps): void {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string): void {
    if (category !== categoryId) setCategory(categoryId);
  }

  async function handleSave(): Promise<void> {
    try {
      setIsLoading(true);

      if (!guild?.id) {
        setIsLoading(false);
        return Alert.alert(
          'Servidor não selecionado!',
          'Por favor, selecione um servidor para agendar uma jogatina!',
        );
      }

      const { formatNumbersOfDate, getCurrentDate } = DateHelper;
      const formattedDay = formatNumbersOfDate(day);
      const formattedMonth = formatNumbersOfDate(month);
      const formattedHour = formatNumbersOfDate(hour);
      const formattedMinute = formatNumbersOfDate(minute);
      const year = getCurrentDate().getFullYear();

      const appointmentDate = new Date(
        `${year}-${formattedMonth}-${formattedDay}T${formattedHour}:${formattedMinute}:00.000Z`,
      );

      validate.isDate(appointmentDate.toISOString());
      validate.isBlack(category);
      validate.isBlack(description);

      const expireOfDay = appointmentDate.getDate() + 1;
      const expiredIn = new Date(
        appointmentDate.setDate(expireOfDay),
      ).getTime();

      const newAppoitment: CustomAppointmentProps = {
        id: UUID.generate(),
        guild,
        category,
        date: `${formattedDay}/${formattedMonth} às ${formattedHour}:${formattedMinute}h`,
        description,
        expiredIn,
      };

      const storage =
        await Storage.get<CustomAppointmentProps[]>('appointments');
      const appointments = storage || [];

      await Storage.set<CustomAppointmentProps[]>('appointments', [
        ...appointments,
        newAppoitment,
      ]);

      navigation.navigate('Home' as never);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const message = error.errors[0].message;
        Alert.alert('Seus dados não estão coerentes!', message);
      } else {
        Alert.alert(
          'Tivemos um probleminha ao salvar!',
          'Certifique-se se os dados inseridos estão corretos e tente novamente!',
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header title='Agendar partida' />

          <Text style={[styles.label, styles.labelSpace]}>Categoria</Text>

          <CategorySelect
            hasCheckBox
            onSelect={handleCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>
            <TouchableOpacity activeOpacity={0.7} onPress={handleOpenGuilds}>
              <View style={styles.select}>
                <If condition={guild?.icon}>
                  <Then>
                    <GuildIcon guildId={guild.id} iconId={guild.icon} />
                  </Then>
                  <Else>
                    <View style={styles.image} />
                  </Else>
                </If>

                <View style={styles.selectBody}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.label}
                  >
                    {guild?.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>

                <Feather
                  name='chevron-right'
                  color={theme.colors.heading}
                  size={RFValue(18)}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, styles.labelBottom]}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} value={day} onChangeText={setDay} />

                  <Text style={styles.divider}>/</Text>

                  <SmallInput
                    maxLength={2}
                    value={month}
                    onChangeText={setMonth}
                  />
                </View>
              </View>

              <View>
                <Text style={[styles.label, styles.labelBottom]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    value={hour}
                    onChangeText={setHour}
                  />

                  <Text style={styles.divider}>:</Text>

                  <SmallInput
                    maxLength={2}
                    value={minute}
                    onChangeText={setMinute}
                  />
                </View>
              </View>
            </View>

            <View style={[styles.field, styles.fieldSpace]}>
              <Text style={styles.label}>Descrição</Text>

              <Text style={styles.caracteresLimit}>Máx 100 caracteres</Text>
            </View>

            <TextArea
              value={description}
              numberOfLines={5}
              maxLength={100}
              autoCorrect
              multiline
              onChangeText={setDescription}
            />

            <View style={styles.footer}>
              <Button
                title='Agendar'
                onPress={async () => await handleSave()}
                isLoading={isLoading}
              />
            </View>
          </View>
        </ScrollView>
      </Background>

      <ModalView
        type='list'
        visible={openGuildsModal}
        onDismiss={handleCloseGuilds}
        onRequestClose={handleCloseGuilds}
      >
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
