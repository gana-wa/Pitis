import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

import * as color from '../styles/colorStyles';

const ChangePassword = ({ navigation }) => {
   const [showPassword, setShowPassword] = useState(true);
   const handleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <SafeAreaView style={styles.container}>
         <View>
            <Text style={styles.subtitle}>You must enter your current password and then type your new password twice.</Text>
            <Input
               placeholder="Current Password"
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
               inputContainerStyle={styles.input}
               inputStyle={styles.input}
               placeholderTextColor={color.input}
               secureTextEntry={showPassword}
               // onBlur={onBlur}
               // onChangeText={text => onChange(text)}
               // value={value}
               keyboardType="email-address"
            />
            <Input
               placeholder="New Password"
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
               inputContainerStyle={styles.input}
               inputStyle={styles.input}
               placeholderTextColor={color.input}
               secureTextEntry={showPassword}
               // onBlur={onBlur}
               // onChangeText={text => onChange(text)}
               // value={value}
               keyboardType="email-address"
            />
            <Input
               placeholder="Repeat Password"
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
               inputContainerStyle={styles.input}
               inputStyle={styles.input}
               placeholderTextColor={color.input}
               secureTextEntry={showPassword}
               // onBlur={onBlur}
               // onChangeText={text => onChange(text)}
               // value={value}
               keyboardType="email-address"
            />
         </View>
         <Button
            title="Change Password"
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
      // marginVertical: '3%',
      marginTop: '3%',
      marginHorizontal: '4%',
      textAlign: 'left',
      lineHeight: 27,
      marginBottom: '10%',
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

export default ChangePassword;
