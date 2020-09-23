import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import styles from '../styles/CreatePin';
import * as color from '../styles/colorStyles';

const CreatePin = ({ navigation }) => {
   const [pin, setPin] = useState('');
   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>Create Security PIN</Text>
            <Text style={styles.loginInfoText}>Create a PIN that’s contain 6 digits number for security purpose in Zwallet.</Text>
            <SmoothPinCodeInput
               containerStyle={styles.pinContainer}
               cellStyle={styles.pinCell}
               value={pin}
               onTextChange={(pin) => setPin(pin)}
            // codeLength={6}
            />
            <Pressable style={styles.buttonLogin} onPress={() => navigation.navigate('CreatePinSuccess')}>
               <Text style={styles.buttonLoginText}>Confirm</Text>
            </Pressable>
         </View>
      </View>
   );
};

export default CreatePin;
