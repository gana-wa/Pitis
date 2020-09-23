import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';

import styles from '../styles/Login';
import * as color from '../styles/colorStyles';

const ResetPassword = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>Reset Password</Text>
            <Text style={styles.loginInfoText}>Create and confirm your new password so you can login to Zwallet.</Text>
            <Input
               placeholder="Create new password"
               leftIcon={
                  <Icon
                     name="lock"
                     size={20}
                     color={color.input}
                  />
               }
               rightIcon={
                  <Icon
                     name="eye-off"
                     size={18}
                     color={color.input}
                  />
               }
               secureTextEntry={true}
               inputStyle={styles.input}
               inputContainerStyle={styles.input}
               placeholderTextColor={color.input}
            />
            <Input
               placeholder="Confirm new password"
               leftIcon={
                  <Icon
                     name="lock"
                     size={20}
                     color={color.input}
                  />
               }
               rightIcon={
                  <Icon
                     name="eye-off"
                     size={18}
                     color={color.input}
                  />
               }
               secureTextEntry={true}
               inputStyle={styles.input}
               inputContainerStyle={styles.input}
               placeholderTextColor={color.input}
            />
            <Pressable style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
               <Text style={styles.buttonLoginText}>Reset Password</Text>
            </Pressable>
         </View>
      </View>
   );
};

export default ResetPassword;
