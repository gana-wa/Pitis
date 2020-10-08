import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as color from '../styles/colorStyles';

const SplashScreen = ({ navigation }) => {
   const { msg, isLoggedIn } = useSelector(
      (state) => state.auth
   );

   useEffect(() => {
      setTimeout(() => {
         if (isLoggedIn) {
            return navigation.reset({
               index: 0,
               routes: [{ name: 'Home' }],
            });
         } else {
            return navigation.reset({
               index: 0,
               routes: [{ name: 'Login' }],
            });
         }
      }, 500);
   }, [isLoggedIn, navigation, msg]);

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle="default" backgroundColor={color.primary} />
         <Text style={styles.title}>Zwallet</Text>
      </SafeAreaView>
   );
};

export default SplashScreen;

const styles = StyleSheet.create({
   container: {
      backgroundColor: color.primary,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      fontSize: 32,
      fontWeight: '700',
      color: color.white,
   },
});
