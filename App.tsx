import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Background } from './src/components';
import { theme } from './src/config';
import { AuthProvider } from './src/hooks';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  useEffect(() => {
    const subscriptions = Notifications.addNotificationResponseReceivedListener(
      notification => console.log(notification),
    );

    return () => subscriptions.remove();
  }, []);

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
