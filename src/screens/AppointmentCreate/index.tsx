import { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import z from 'zod';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Header,
  CategorySelect,
  GuildIcon,
  SmallInput,
  TextArea,
  Button,
  ModalView,
  Background,
} from '../../components';
import { Storage, UUID, validate } from '../../libs';
import { theme } from '../../config';
import { AppointmentProps, GuildProps } from '../../@types';
import { Guilds } from '../Guilds';

import { styles } from './styles';

export function AppointmentCreate() {
  const [minute, setMinute] = useState<string>('');
  const [hour, setHour] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openGuildsModal, setOpenGuildsModal] = useState<boolean>(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const navigation = useNavigation();

  function handleOpenGuilds(): void {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds(): void {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps): void {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string): void {
    if (category !== categoryId) setCategory(categoryId);
  }

  function formatNumbersOfDate(value: string): string {
    return value.length === 1 ? `0${value}` : value;
  }

  async function handleSave(): Promise<void> {
    try {
      setIsLoading(true);

      if (!guild?.id) {
        setIsLoading(false);
        return Alert.alert(
          'Servidor não selecionado!',
          'Por favor, selecione um servidor para agendar uma jogatina!'
        );
      }

      const formattedDay = formatNumbersOfDate(day);
      const formattedMonth = formatNumbersOfDate(month);
      const formattedHour = formatNumbersOfDate(hour);
      const formattedMinute = formatNumbersOfDate(minute);
      const year = new Date().getFullYear();

      const newAppoitment: AppointmentProps = {
        id: UUID.generate(),
        guild,
        category,
        date: `${formattedDay}/${formattedMonth} às ${formattedHour}:${formattedMinute}h`,
        description,
      };

      validate.isBlack(category);
      validate.isBlack(description);

      validate.isDate(
        `${year}-${formattedMonth}-${formattedDay}T${formattedHour}:${formattedMinute}:00.000Z`
      );

      const storage = await Storage.get<AppointmentProps[]>('appointments');
      const appointments = storage || [];

      await Storage.set<AppointmentProps[]>('appointments', [
        ...appointments,
        newAppoitment,
      ]);

      navigation.goBack();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const message = error.errors[0].message;
        Alert.alert('Seus dados não estão coerentes!', message);
      } else {
        Alert.alert(
          'Tivemos um probleminha ao salvar!',
          'Certifique-se se os dados inseridos estão corretos e tente novamente!'
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
                {guild?.icon ? (
                  <GuildIcon guildId={guild?.id} iconId={guild?.icon} />
                ) : (
                  <View style={styles.image} />
                )}

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
        visible={openGuildsModal}
        onDismiss={handleCloseGuilds}
        onRequestClose={handleCloseGuilds}
      >
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
