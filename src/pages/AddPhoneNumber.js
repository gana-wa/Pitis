import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { editUser } from '../redux/actions/user';

import * as color from '../styles/colorStyles';

const AddPhoneNumber = ({ navigation }) => {

   const dispatch = useDispatch();

   const { user_id, phone } = useSelector(
      (state) => state.auth.user,
   );

   const { msg, isSuccess } = useSelector(
      (state) => state.auth,
   );

   useEffect(() => {
      if (msg === 'Successfully updated') {
         // ToastAndroid.show(msg, ToastAndroid.SHORT);
         return navigation.goBack();
      }
   }, [navigation, msg]);

   const { control, handleSubmit, errors } = useForm();

   const onSubmit = (data) => {
      dispatch(editUser(user_id, ({ ...data, phone: `+62${data.phone}` })));
      // console.log(user_id, ({ ...data, phone: `+62${data.phone}` }));
   };

   return (
      <SafeAreaView style={styles.container}>
         <View>
            <Text style={styles.subtitle}>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</Text>
            <Controller
               control={control}
               render={({ onChange, onBlur, value }) => (
                  <Input
                     placeholder="Enter your phone number"
                     leftIconContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between', width: '20%', marginBottom: 6, }}
                     leftIcon={
                        <>
                           <Icon
                              name="phone"
                              size={20}
                              color={color.input}
                           />
                           <Text style={{ fontSize: 16, }}>+62</Text>
                        </>
                     }
                     maxLength={11}
                     inputContainerStyle={styles.input}
                     inputStyle={styles.input}
                     placeholderTextColor={color.input}
                     onBlur={onBlur}
                     onChangeText={text => onChange(text)}
                     value={value}
                     keyboardType="phone-pad"
                  />
               )}
               name="phone"
               rules={{ required: true }}
               defaultValue={phone}
            />
         </View>
         <Button
            title="Submit"
            buttonStyle={styles.buttonSubmit}
            titleStyle={styles.buttonSubmitText}
            // onPress={() => navigation.goBack()}
            onPress={handleSubmit(onSubmit)}
         />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: color.backgroud,
      justifyContent: 'space-between',
   },
   subtitle: {
      color: color.subtitle,
      fontSize: 16,
      marginVertical: '3%',
      marginHorizontal: '4%',
      textAlign: 'center',
      lineHeight: 27,
   },
   input: {
      fontSize: 16,
      borderColor: color.input,
   },
   buttonSubmit: {
      backgroundColor: color.primary,
      marginHorizontal: '4%',
      marginVertical: '10%',
      borderRadius: 12,
      height: 57,
   },
   buttonSubmitText: {
      fontSize: 18,
      color: color.white,
      // fontWeight: '700',
   },
});

export default AddPhoneNumber;
