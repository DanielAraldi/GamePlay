import { StatusBar } from 'react-native';
import { theme } from './src/config';
import { SignIn } from './src/screens';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor={theme.colors.transparent}
        translucent
      />

      <SignIn />
    </>
  );
}
