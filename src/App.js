import React from 'react';
import 'react-native-gesture-handler';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import * as color from './styles/colorStyles';

import Login from './pages/Login';
import Register from './pages/Register';
import CreatePin from './pages/CreatePin';
import CreatePinSuccess from './pages/CreatePinSuccess';
import ResetPassEmail from './pages/ResetPassEmail';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import History from './pages/History';
import FindReceiver from './pages/FindReceiver';
import AmountInput from './pages/AmountInput';
import TransferConfirmation from './pages/TransferConfirmation';
import PinConfirmation from './pages/PinConfirmation';
import TransferDetail from './pages/TransferDetail';
import Profile from './pages/Profile';
import PersonalInfo from './pages/PersonalInfo';
import AddPhoneNumber from './pages/AddPhoneNumber';
import ChangePassword from './pages/ChangePassword';
import ResetPassOtp from './pages/ResetPassOtp';

import SplashScreen from './pages/SplashScreen';

const { persistor, store } = configureStore();

const Stack = createStackNavigator();

const headerStyle = {
  // header white
  headerStyleWhite: {
    backgroundColor: color.backgroud,
    elevation: 0,
    height: 80,
  },
  headerTintColorWhite: color.dark,
  // header primary color
  headerStyleBlue: {
    backgroundColor: color.primary,
    elevation: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 80,
  },
  headerTintColorBlue: color.white,
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="History" component={History} options={{
              headerStyle: headerStyle.headerStyleBlue,
              headerTintColor: headerStyle.headerTintColorBlue,
            }} />
            <Stack.Screen name="FindReceiver" component={FindReceiver} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Find Receiver',
            }} />
            <Stack.Screen name="AmountInput" component={AmountInput} options={{
              headerStyle: {
                backgroundColor: color.primary,
                elevation: 0,
                height: 80,
              },
              headerTintColor: color.white,
              title: 'Transfer',
            }} />
            <Stack.Screen name="TransferConfirmation" component={TransferConfirmation} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Confirmation',
            }} />
            <Stack.Screen name="PinConfirmation" component={PinConfirmation} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Enter Your PIN',
            }} />
            <Stack.Screen name="TransferDetail" component={TransferDetail} options={{
              headerStyle: headerStyle.headerStyleBlue,
              headerTintColor: headerStyle.headerTintColorBlue,
              title: 'Transfer Details',
            }} />
            <Stack.Screen name="Profile" component={Profile} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: '',
            }} />
            <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Personal Information',
            }} />
            <Stack.Screen name="AddPhoneNumber" component={AddPhoneNumber} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Add Phone Number',
            }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Change Password',
            }} />
            <Stack.Screen name="CreatePin" component={CreatePin} options={{ headerShown: false }} />
            <Stack.Screen name="CreatePinSuccess" component={CreatePinSuccess} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassEmail" component={ResetPassEmail} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassOtp" component={ResetPassOtp} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
