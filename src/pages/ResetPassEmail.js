import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmail, sendOtp } from '../redux/actions/auth';

import styles from '../styles/Login';
import * as color from '../styles/colorStyles';

const ResetPassEmail = ({ navigation }) => {
   const dispatch = useDispatch();
   const [dataUser, setDataUser] = useState({});

   const { msg, user, isSuccess } = useSelector(
      (state) => state.auth
   );

   useEffect(() => {
      if (msg !== '...Loading' && msg !== '') {
         ToastAndroid.show(msg, ToastAndroid.SHORT);
      }
      if (user.user_id) {
         dispatch(sendOtp(dataUser));
         navigation.navigate('ResetPassOtp');
      }
   }, [isSuccess, msg, navigation, dispatch, user.user_id, dataUser]);

   const { control, handleSubmit, errors, getValues } = useForm();

   const onSubmit = (data) => {
      // console.log(data);
      dispatch(fetchEmail(data));
      setDataUser(data);
   };

   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>Reset Password</Text>
            <Text style={styles.loginInfoText}>Enter your Zwallet e-mail so we can send you a password reset link.</Text>
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
                  />
               )}
               name="email"
               rules={{ required: true }}
               defaultValue=""
            />
            <Pressable style={styles.buttonLogin} onPress={handleSubmit(onSubmit)}>
               <Text style={styles.buttonLoginText}>Confirm</Text>
            </Pressable>
         </View>
      </View>
   );
};

export default ResetPassEmail;
