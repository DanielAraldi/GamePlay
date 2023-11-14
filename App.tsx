import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';

import { Routes } from './src/routes';
import { theme } from './src/config';
import { Background } from './src/components';
import { AuthProvider } from './src/hooks';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <Background>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar
            barStyle='light-content'
            backgroundColor={theme.colors.transparent}
            translucent
          />

          <AuthProvider>
            <Routes />
          </AuthProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </Background>
  );
}
