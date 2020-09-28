import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../styles/CreatePinSuccess';
import * as color from '../styles/colorStyles';

const CreatePinSuccess = ({ navigation }) => {
   const [pin, setPin] = useState('');
   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <View style={{ backgroundColor: '#1EC15F', width: 70, height: 70, borderRadius: 70, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
               <Icon
                  name="check"
                  size={60}
                  color={color.white}
               />
            </View>
            <Text style={styles.loginText}>PIN Successfully Created</Text>
            <Text style={styles.loginInfoText}>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</Text>
            <Pressable style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
               <Text style={styles.buttonLoginText}>Login Now</Text>
            </Pressable>
         </View>
      </View>
   );
};

export default CreatePinSuccess;
