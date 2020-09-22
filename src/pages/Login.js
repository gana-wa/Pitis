import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';

import styles from '../styles/Login';
import * as color from '../styles/colorStyles';

const Login = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.loginInfoText}>Login to your existing account to access all the features in Zwallet.</Text>
            {/* <TextInput style={styles.input} placeholder="Enter your e-mail" /> */}
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
            <View>
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
                  inputContainerStyle={styles.input}
                  inputStyle={styles.input}
                  placeholderTextColor={color.input}
               />
               <Pressable>
                  <Text style={styles.textForgotPass}>Forgot password?</Text>
               </Pressable>
            </View>
            <Pressable style={styles.buttonLogin}>
               <Text style={styles.buttonLoginText}>Login</Text>
            </Pressable>
            <View style={styles.textSignUpContainer}>
               <Text style={styles.textSignUp}>Don’t have an account? Let’s </Text>
               <Pressable onPress={() => navigation.navigate('Register')}><Text style={styles.textSignUpLink}>Sign Up</Text></Pressable>
            </View>
         </View>
      </View>
   );
};

export default Login;
