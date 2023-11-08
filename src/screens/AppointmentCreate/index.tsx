import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
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
import { theme } from '../../config';
import { GuildProps } from '../../@types';
import { Guilds } from '../Guilds';

import { styles } from './styles';

export function AppointmentCreate() {
  const [category, setCategory] = useState<string>('');
  const [openGuildsModal, setOpenGuildsModal] = useState<boolean>(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

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
                {guild?.icon ? <GuildIcon /> : <View style={styles.image} />}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
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
                  <SmallInput maxLength={2} />

                  <Text style={styles.divider}>/</Text>

                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, styles.labelBottom]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />

                  <Text style={styles.divider}>:</Text>

                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, styles.fieldSpace]}>
              <Text style={styles.label}>Descrição</Text>

              <Text style={styles.caracteresLimit}>Máx 100 caracteres</Text>
            </View>

            <TextArea
              autoCorrect={false}
              multiline
              numberOfLines={5}
              maxLength={100}
            />

            <View style={styles.footer}>
              <Button title='Agendar' />
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
