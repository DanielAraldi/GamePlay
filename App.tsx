import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';

import { SignIn } from './src/screens';
import { Background } from './src/components';
import { theme } from './src/config';

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
      <StatusBar
        barStyle='light-content'
        backgroundColor={theme.colors.transparent}
        translucent
      />

      <SignIn />
    </Background>
  );
}
