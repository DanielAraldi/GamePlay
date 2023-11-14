import { createStackNavigator } from '@react-navigation/stack';

import { AppointmentCreate, AppointmentDetails, Home } from '../screens';
import { theme } from '../config';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName='SignIn'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name='Home' component={Home} />
      <Screen name='AppointmentDetails' component={AppointmentDetails} />
      <Screen name='AppointmentCreate' component={AppointmentCreate} />
    </Navigator>
  );
}
