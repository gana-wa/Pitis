import React from 'react';
import 'react-native-gesture-handler';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as color from './styles/colorStyles';

import Login from './pages/Login';
import Register from './pages/Register';
import CreatePin from './pages/CreatePin';
import CreatePinSuccess from './pages/CreatePinSuccess';
import ResetPassEmail from './pages/ResetPassEmail';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import History from './pages/History';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="History" component={History} options={{
          headerStyle: {
            backgroundColor: color.primary,
            elevation: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            height: 80,
          },
          headerTintColor: color.white,
        }} />
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
