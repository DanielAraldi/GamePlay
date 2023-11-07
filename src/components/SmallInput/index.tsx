import React from 'react';
import { TextInput } from 'react-native';

import { SmallInputProps } from '../../@types';

import { styles } from './styles';

export function SmallInput(props: SmallInputProps) {
  return (
    <TextInput style={styles.container} keyboardType='numeric' {...props} />
  );
}
