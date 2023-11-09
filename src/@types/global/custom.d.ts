declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '@env' {
  export const REDIRECT_URI: string;
  export const SCOPE: string;
  export const CLIENT_ID: string;
}

interface RenderItem<T> {
  item: T;
  index: number;
}
