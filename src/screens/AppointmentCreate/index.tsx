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

import {
  Header,
  CategorySelect,
  GuildIcon,
  SmallInput,
  TextArea,
  Button,
} from '../../components';
import { theme } from '../../config';
import { styles } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export function AppointmentCreate() {
  const [category, setCategory] = useState<string>('');

  function handleCategorySelect(categoryId: string): void {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <Header title='Agendar partida' />

        <Text style={[styles.label, styles.labelSpace]}>Categoria</Text>

        <CategorySelect
          hasCheckBox
          onSelect={handleCategorySelect}
          categorySelected={category}
        />

        <View style={styles.form}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.select}>
              <GuildIcon />
              {/* <View style={styles.image} /> */}

              <View style={styles.selectBody}>
                <Text style={styles.label}>Selecione um servidor</Text>
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
              <Text style={styles.label}>Dia e mês</Text>

              <View style={styles.column}>
                <SmallInput maxLength={2} />

                <Text style={styles.divider}>/</Text>

                <SmallInput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Hora e minuto</Text>

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
    </KeyboardAvoidingView>
  );
}
