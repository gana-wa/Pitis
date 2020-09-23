import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';

import styles from '../styles/Login';
import * as color from '../styles/colorStyles';

const ResetPassEmail = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>Reset Password</Text>
            <Text style={styles.loginInfoText}>Enter your Zwallet e-mail so we can send you a password reset link.</Text>
            <Input
               placeholder="Enter your e-mail"
               leftIcon={
                  <Icon
                     name="mail"
                     size={20}
                     color={color.input}
                  />
               }
               inputContainerStyle={styles.input}
               inputStyle={styles.input}
               placeholderTextColor={color.input}
            />
            <Pressable style={styles.buttonLogin} onPress={() => navigation.navigate('ResetPassword')}>
               <Text style={styles.buttonLoginText}>Confirm</Text>
            </Pressable>
         </View>
      </View>
   );
};

export default ResetPassEmail;
