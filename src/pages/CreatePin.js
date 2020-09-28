import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updatePin } from '../redux/actions/auth';

import styles from '../styles/CreatePin';
import * as color from '../styles/colorStyles';

const CreatePin = ({ navigation }) => {
   const dispatch = useDispatch();

   const { msg, register_id, isSuccess } = useSelector(
      (state) => state.auth,
   );

   useEffect(() => {
      if (msg === 'Successfully updated') {
         return navigation.navigate('CreatePinSuccess');
      }
      // if (msg === 'Successfully updated') {
      //    navigation.navigate('CreatePin');
      // }
   }, [navigation, msg]);

   const { control, handleSubmit, errors } = useForm();

   const onSubmit = (data) => {
      dispatch(updatePin(register_id, data));
      // console.log(register_id, data);
   };

   return (
      <View style={styles.container}>
         <View style={styles.containerTop}>
            <Text style={styles.appText}>Zwallet</Text>
         </View>
         <View style={styles.containerBottom}>
            <Text style={styles.loginText}>Create Security PIN</Text>
            <Text style={styles.loginInfoText}>Create a PIN that’s contain 6 digits number for security purpose in Zwallet.</Text>
            <Controller
               control={control}
               render={({ onChange, onBlur, value }) => (
                  <SmoothPinCodeInput
                     containerStyle={styles.pinContainer}
                     cellStyle={styles.pinCell}
                     value={value}
                     onTextChange={text => onChange(text)}
                     codeLength={6}
                     placeholder="__"
                  />
               )}
               name="pin"
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

export default CreatePin;
