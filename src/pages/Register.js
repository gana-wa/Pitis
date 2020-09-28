import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/auth';

import styles from '../styles/Login';
import * as color from '../styles/colorStyles';

const Register = ({ navigation }) => {
   const [showPassword, setShowPassword] = useState(true);
   const dispatch = useDispatch();

   const { msg, isSuccess } = useSelector(
      (state) => state.auth,
   );

   useEffect(() => {
      // if (isSuccess) {
      //    return navigation.navigate('CreatePin');
      // }
      if (msg === 'Successfully registered') {
         // ToastAndroid.show(msg, ToastAndroid.SHORT);
         return navigation.navigate('CreatePin');
      }
   }, [isSuccess, navigation, msg]);

   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const { control, handleSubmit, errors } = useForm();

   const onSubmit = (data) => {
      dispatch(register(data));
      // console.log(data);
   };

   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>Sign Up</Text>
            <Text style={styles.loginInfoText}>Create your account to access Zwallet.</Text>
            <Controller
               control={control}
               render={({ onChange, onBlur, value }) => (
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
                     onBlur={onBlur}
                     onChangeText={text => onChange(text)}
                     value={value}
                  />
               )}
               name="username"
               rules={{ required: true }}
               defaultValue=""
            />
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
                     keyboardType="email-address"
                     inputContainerStyle={styles.input}
                     inputStyle={styles.input}
                     placeholderTextColor={color.input}
                     onBlur={onBlur}
                     onChangeText={text => onChange(text)}
                     value={value}
                  />
               )}
               name="email"
               rules={{ required: true }}
               defaultValue=""
            />
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
                           name={showPassword ? 'eye-off' : 'eye'}
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
            <Pressable style={styles.buttonLogin} onPress={handleSubmit(onSubmit)}>
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
