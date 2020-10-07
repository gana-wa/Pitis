import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/auth';

import styles from '../styles/Login';
import * as color from '../styles/colorStyles';

const Login = ({ navigation }) => {
   const [showPassword, setShowPassword] = useState(true);
   const dispatch = useDispatch();

   const { msg, isLoggedIn } = useSelector(
      (state) => state.auth
   );

   useEffect(() => {
      if (isLoggedIn) {
         return navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
         });
      }
      if (msg !== '...Loading' && msg !== '') {
         ToastAndroid.show(msg, ToastAndroid.SHORT);
      }
   }, [isLoggedIn, navigation, msg]);

   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const { control, handleSubmit, errors } = useForm();

   const onSubmit = (data) => {
      dispatch(login(data));
   };

   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.loginInfoText}>Login to your existing account to access all the features in Zwallet.</Text>
            <View>
               <Controller
                  control={control}
                  render={({ onChange, onBlur, value }) => (
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
                        onBlur={onBlur}
                        onChangeText={text => onChange(text)}
                        value={value}
                        keyboardType="email-address"
                     />
                  )}
                  name="email"
                  rules={{ required: true }}
                  defaultValue=""
               />
               {/* {errors.email && <Text>Email is required.</Text>} */}
            </View>
            <View>
               <Controller
                  control={control}
                  render={({ onChange, onBlur, value }) => (
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
                              onPress={handleShowPassword}
                              name={showPassword ? "eye-off" : "eye"}
                              size={18}
                              color={color.input}
                           />
                        }
                        secureTextEntry={showPassword}
                        inputContainerStyle={styles.input}
                        inputStyle={styles.input}
                        placeholderTextColor={color.input}
                        onBlur={onBlur}
                        onChangeText={text => onChange(text)}
                        value={value}
                     />
                  )}
                  name="password"
                  rules={{ required: true }}
                  defaultValue=""
               />
               {/* {errors.password && <Text>Password is required.</Text>} */}
               <Pressable onPress={() => navigation.navigate('ResetPassEmail')}>
                  <Text style={styles.textForgotPass}>Forgot password?</Text>
               </Pressable>
            </View>
            {errors.password || errors.email ? (
               <View style={styles.buttonLoginDisabled}>
                  <Text style={styles.buttonLoginTextDisabled}>Login</Text>
               </View>
            ) : (
                  <Pressable style={styles.buttonLogin} onPress={handleSubmit(onSubmit)}>
                     <Text style={styles.buttonLoginText}>Login</Text>
                  </Pressable>
               )}
            <View style={styles.textSignUpContainer}>
               <Text style={styles.textSignUp}>Don’t have an account? Let’s </Text>
               <Pressable onPress={() => navigation.navigate('Register')}><Text style={styles.textSignUpLink}>Sign Up</Text></Pressable>
            </View>
         </View>
      </View>
   );
};

export default Login;
