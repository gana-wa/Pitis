import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ToastAndroid } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updatePin } from '../redux/actions/auth';

import * as color from '../styles/colorStyles';

const ResetPassOtp = ({ navigation }) => {
   const dispatch = useDispatch();

   const updatePwd = useSelector(
      (state) => state.auth.updatePwd,
   );

   // useEffect(() => {
   //    if (msg === 'Successfully updated') {
   //       return navigation.navigate('CreatePinSuccess');
   //    }
   //    // if (msg === 'Successfully updated') {
   //    //    navigation.navigate('CreatePin');
   //    // }
   // }, [navigation, msg]);

   const { control, handleSubmit, errors } = useForm();

   const onSubmit = (data) => {
      if (Number(data.otp) === Number(updatePwd.otp)) {
         navigation.navigate('ResetPassword');
      } else {
         ToastAndroid.show('Wrong OTP code!', ToastAndroid.SHORT);
      }
   };

   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>OTP code sent</Text>
            <Text style={styles.loginInfoText}>Please input the OTP that sent to your email.</Text>
            <Controller
               control={control}
               render={({ onChange, onBlur, value }) => (
                  <SmoothPinCodeInput
                     containerStyle={styles.pinContainer}
                     cellStyle={styles.pinCell}
                     value={value}
                     onTextChange={text => onChange(text)}
                     codeLength={4}
                     placeholder="__"
                  />
               )}
               name="otp"
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

export default ResetPassOtp;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      // height: height,
      backgroundColor: color.backgroud,
   },
   containerTop: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
   },
   appText: {
      color: color.primary,
      fontSize: 26,
   },
   containerBottom: {
      flex: 8,
      backgroundColor: color.white,
      elevation: 3,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      paddingHorizontal: '8%',
      // justifyContent: 'space-evenly',
      justifyContent: 'space-around',
   },
   loginText: {
      color: color.dark,
      fontSize: 24,
      textAlign: 'center',
      fontWeight: '700',
   },
   loginInfoText: {
      color: color.subtitle,
      fontSize: 16,
      textAlign: 'center',
   },
   input: {
      fontSize: 16,
      borderColor: color.input,
   },
   textForgotPass: {
      textAlign: 'right',
      color: 'rgba(58, 61, 66, 0.8)',
      marginTop: 15,
   },
   buttonLogin: {
      width: '100%',
      alignSelf: 'center',
      backgroundColor: color.primary,
      height: 57,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
   },
   buttonLoginText: {
      color: color.white,
      fontSize: 18,
      fontWeight: '700',
   },
   buttonLoginDisabled: {
      width: '100%',
      alignSelf: 'center',
      backgroundColor: color.disabled,
      height: 57,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
   },
   buttonLoginTextDisabled: {
      color: color.disabledText,
      fontSize: 18,
      fontWeight: '700',
   },
   textSignUpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
   },
   textSignUp: {
      fontSize: 16,
   },
   textSignUpLink: {
      color: color.primary,
      fontSize: 16,
   },
   // pin
   pinContainer: {
      alignSelf: 'center',
   },
   pinCell: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: color.input,
      backgroundColor: color.white,
      height: 58,
      width: 47,
   },
   pinCellEmpty: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: color.disabled,
      backgroundColor: color.white,
      height: 58,
      width: 47,
   },
});
