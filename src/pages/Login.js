import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';

import styles from '../styles/Login';

const Login = () => {
   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.loginInfoText}>Login to your existing account to access all the features in Zwallet.</Text>
            <TextInput style={styles.input} placeholder="Enter your e-mail" />
            {/* <Input
               placeholder="Enter email"
               leftIcon={
                  <Icon
                     name="mail"
                     size={24}
                     color="black"
                  />
               }
            /> */}
            <View>
               <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry />
               <Pressable>
                  <Text style={{ textAlign: 'right', color: 'rgba(58, 61, 66, 0.8)', marginTop: 15 }}>Forgot password?</Text>
               </Pressable>
            </View>
            <Pressable style={styles.buttonLogin}>
               <Text style={styles.buttonLoginText}>Login</Text>
            </Pressable>
            <View style={styles.textSignUpContainer}>
               <Text style={styles.textSignUp}>Don’t have an account? Let’s </Text>
               <Pressable><Text style={styles.textSignUpLink}>Sign Up</Text></Pressable>
            </View>
         </View>
      </View>
   );
};

export default Login;
