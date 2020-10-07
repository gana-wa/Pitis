import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { changePassword } from '../redux/actions/auth';

import styles from '../styles/Login';
import * as color from '../styles/colorStyles';

const ResetPassword = ({ navigation }) => {
   const [securedPassword1, setSecuredPassword1] = useState(true);
   const [securedPassword2, setSecuredPassword2] = useState(true);
   const [securedPassword3, setSecuredPassword3] = useState(true);
   const handleShowPassword1 = () => {
      setSecuredPassword1(!securedPassword1);
   };
   const handleShowPassword2 = () => {
      setSecuredPassword2(!securedPassword2);
   };
   const handleShowPassword3 = () => {
      setSecuredPassword3(!securedPassword3);
   };

   const { msg, user, isSuccess } = useSelector(
      (state) => state.auth
   );
   const dispatch = useDispatch();

   const { control, handleSubmit, errors, getValues } = useForm();

   useEffect(() => {
      if (msg !== '...Loading' && msg !== '') {
         ToastAndroid.show(msg, ToastAndroid.SHORT);
      }
      if (msg === 'Successfully updated') {
         navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
         });
      }
   }, [isSuccess, msg, navigation, dispatch]);

   const onSubmit = (data) => {
      if (data.newPassword !== data.newPasswordRepeat) {
         // console.log('Password didnt match');
         return;
      } else {
         dispatch(changePassword(user.user_id, data));
         console.log(user.user_id, data);
      }
   };

   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>Reset Password</Text>
            <Text style={styles.loginInfoText}>Create and confirm your new password so you can login to Zwallet.</Text>
            <Controller
               control={control}
               render={({ onChange, onBlur, value }) => (
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
                           onPress={handleShowPassword2}
                           name={securedPassword2 ? 'eye-off' : 'eye'}
                           size={18}
                           color={color.input}
                        />
                     }
                     inputContainerStyle={styles.input}
                     inputStyle={styles.input}
                     placeholderTextColor={color.input}
                     secureTextEntry={securedPassword2}
                     onBlur={onBlur}
                     onChangeText={text => onChange(text)}
                     value={value}
                  />
               )}
               name="newPassword"
               rules={{ required: true }}
               defaultValue=""
            />
            {errors.newPassword && <Text style={styles.textFormError}>New password is required.</Text>}
            <Controller
               control={control}
               render={({ onChange, onBlur, value }) => (
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
                           onPress={handleShowPassword3}
                           name={securedPassword3 ? 'eye-off' : 'eye'}
                           size={18}
                           color={color.input}
                        />
                     }
                     inputContainerStyle={styles.input}
                     inputStyle={styles.input}
                     placeholderTextColor={color.input}
                     secureTextEntry={securedPassword3}
                     onBlur={onBlur}
                     onChangeText={text => onChange(text)}
                     value={value}
                  />
               )}
               name="newPasswordRepeat"
               rules={{ required: true }}
               defaultValue=""
            />
            {getValues('newPassword') !== getValues('newPasswordRepeat') && <Text style={styles.textFormError}>Password didn't match.</Text>}
            <Pressable style={styles.buttonLogin} onPress={handleSubmit(onSubmit)}>
               <Text style={styles.buttonLoginText}>Reset Password</Text>
            </Pressable>
         </View>
      </View>
   );
};

export default ResetPassword;
