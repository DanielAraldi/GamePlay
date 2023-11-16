import { Else, If, Then } from 'react-if';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ButtonProps } from '../../@types';
import { theme } from '../../config';
import { styles } from './styles';

export function Button({ title, isLoading, disabled, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, isLoading && styles.disabled]}
      disabled={isLoading || disabled}
      {...rest}
    >
      <If condition={isLoading}>
        <Then>
          <ActivityIndicator
            style={styles.loading}
            color={theme.colors.heading}
            size={RFValue(15)}
          />
        </Then>
        <Else>
          <Text style={styles.title}>{title}</Text>
        </Else>
      </If>
    </TouchableOpacity>
  );
}
