import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';

import styles from '../styles/Login';
import * as color from '../styles/colorStyles';

const Register = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>Sign Up</Text>
            <Text style={styles.loginInfoText}>Create your account to access Zwallet.</Text>
            {/* <TextInput style={styles.input} placeholder="Enter your e-mail" /> */}
            <Input
               placeholder="Enter your username"
               leftIcon={
                  <Icon
                     name="user"
                     size={20}
                     color={color.input}
                  />
               }
               inputContainerStyle={styles.input}
               inputStyle={styles.input}
               placeholderTextColor={color.input}
            />
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
            {/* <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry /> */}
            <Input
               placeholder="Enter your password"
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
            <Pressable style={styles.buttonLogin}>
               <Text style={styles.buttonLoginText}>Sign Up</Text>
            </Pressable>
            <View style={styles.textSignUpContainer}>
               <Text style={styles.textSignUp}>Already have an account? </Text>
               <Pressable onPress={() => navigation.goBack()}><Text style={styles.textSignUpLink}>Let’s Login</Text></Pressable>
            </View>
         </View>
      </View>
   );
};

export default Register;
