import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, StatusBar, Pressable } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import * as color from '../styles/colorStyles';

const PersonalInfo = () => {
   const { first_name, last_name, phone } = useSelector(
      (state) => state.auth.user,
   );

   return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.subtitle}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</Text>
         <View style={styles.profileContainer}>
            <View style={styles.textContainer}>
               <Text style={styles.textTitle}>First Name</Text>
               {first_name === null ? (
                  <Text style={styles.textItemNull}>Not set</Text>
               ) : (
                     <Text style={styles.textItem}>{first_name}</Text>
                  )}
            </View>
         </View>
         <View style={styles.profileContainer}>
            <View style={styles.textContainer}>
               <Text style={styles.textTitle}>Last Name</Text>
               {last_name === null ? (
                  <Text style={styles.textItemNull}>Not set</Text>
               ) : (
                     <Text style={styles.textItem}>{last_name}</Text>
                  )}
            </View>
         </View>
         <View style={styles.profileContainer}>
            <View style={styles.textContainer}>
               <Text style={styles.textTitle}>Verified E-mail</Text>
               {last_name === null ? (
                  <Text style={styles.textItemNull}>Not set</Text>
               ) : (
                     <Text style={styles.textItem}>Email</Text>
                  )}
            </View>
         </View>
         <View style={styles.profileContainer}>
            <View style={styles.textContainer}>
               <Text style={styles.textTitle}>Phone Number</Text>
               {phone === null ? (
                  <Pressable>
                     <Text style={styles.textItemAddPhone}>Add phone number</Text>
                  </Pressable>
               ) : (
                     <Text style={styles.textItem}>{phone}</Text>
                  )}
            </View>
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: color.backgroud,
   },
   profileContainer: {
      backgroundColor: color.white,
      // marginTop: '5%',
      marginBottom: '5%',
      marginHorizontal: '4%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4%',
      borderRadius: 10,
      elevation: 3,
   },
   textContainer: {
      justifyContent: 'space-between',
      height: 50,
      // marginLeft: 20,
   },
   textTitle: {
      fontWeight: '400',
      fontSize: 16,
      color: color.subtitle,
   },
   textItem: {
      color: color.dark,
      fontSize: 18,
      fontWeight: '700',
   },
   textItemNull: {
      color: color.dark,
      fontSize: 18,
      fontWeight: '700',
      fontStyle: 'italic',
   },
   textItemAddPhone: {
      color: color.primary,
      fontSize: 18,
      fontWeight: '700',
      fontStyle: 'italic',
   },
   subtitle: {
      color: color.subtitle,
      fontSize: 16,
      marginVertical: '3%',
      marginHorizontal: '4%',
      textAlign: 'justify',
      lineHeight: 27,
   },
});

export default PersonalInfo;
