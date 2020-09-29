import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, StatusBar, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

import * as color from '../styles/colorStyles';

const AddPhoneNumber = ({ navigation }) => {
   const { first_name, last_name, phone } = useSelector(
      (state) => state.auth.user,
   );

   return (
      <SafeAreaView style={styles.container}>
         <View>
            <Text style={styles.subtitle}>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</Text>
            <Input
               placeholder="Enter your phone number"
               leftIcon={
                  <Icon
                     name="phone"
                     size={20}
                     color={color.input}
                  />
               }
               inputContainerStyle={styles.input}
               inputStyle={styles.input}
               placeholderTextColor={color.input}
               // onBlur={onBlur}
               // onChangeText={text => onChange(text)}
               // value={value}
               keyboardType="email-address"
            />
         </View>
         <Button
            title="Submit"
            buttonStyle={styles.buttonSubmit}
            titleStyle={styles.buttonSubmitText}
            onPress={() => navigation.goBack()}
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
