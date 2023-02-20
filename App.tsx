import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';

import { Routes } from './src/routes';
import { theme } from './src/config';
import { Background } from './src/components';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      async function hideSplashScreen(): Promise<void> {
        await SplashScreen.hideAsync();
      }

      hideSplashScreen();
    }
  }, [fontsLoaded]);

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

          <Routes />
        </SafeAreaView>
      </SafeAreaProvider>
    </Background>
  );
}
