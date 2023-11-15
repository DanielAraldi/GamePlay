import uuid from 'react-native-uuid';

import { UUIDProps } from '../@types';

export const UUID: UUIDProps = {
  generate(): string {
    return uuid.v4().toString();
  },
};
