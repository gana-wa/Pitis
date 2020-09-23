import React from 'react';
import 'react-native-gesture-handler';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Register from './pages/Register';
import CreatePin from './pages/CreatePin';
import CreatePinSuccess from './pages/CreatePinSuccess';
import ResetPassEmail from './pages/ResetPassEmail';
import ResetPassword from './pages/ResetPassword';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePin" component={CreatePin} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePinSuccess" component={CreatePinSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassEmail" component={ResetPassEmail} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
