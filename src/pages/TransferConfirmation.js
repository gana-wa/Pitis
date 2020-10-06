import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { API_URL } from '../utils/environment';
import { DateTime } from 'luxon';

import * as color from '../styles/colorStyles';
import defaultProfile from '../assets/img/default_profile.png';

const profilImg = (from) => `${API_URL}${(from)}`;

const TransferConfirmation = ({ navigation }) => {
   const stateTransaction = useSelector(state => state.transaction);
   const currentUser = useSelector(state => state.auth.user);

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle="default" backgroundColor={color.primary} />
         <ScrollView>
            <Text style={styles.sectionText}>Transfer to</Text>
            <View style={styles.profileContainer}>
               <View style={styles.profileFlex}>
                  <Image source={stateTransaction.receiver.photo === null ? defaultProfile : ({ uri: profilImg(stateTransaction.receiver.photo) })} style={styles.profileImg} />
                  <View style={styles.textProfileContainer}>
                     <Text style={styles.textName}>{stateTransaction.receiver.last_name === null ? stateTransaction.receiver.first_name : `${stateTransaction.receiver.first_name} ${stateTransaction.receiver.last_name}`}</Text>
                     <Text style={styles.textPhone}>{stateTransaction.receiver.phone}</Text>
                  </View>
               </View>
            </View>
            <Text style={styles.sectionText}>Details</Text>
            <View style={styles.profileContainer}>
               <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>Amount</Text>
                  <Text style={styles.textItem}>{`Rp${Number(stateTransaction.transaction.amount).toLocaleString('id-ID')}`}</Text>
               </View>
            </View>
            <View style={styles.profileContainer}>
               <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>Balance Left</Text>
                  <Text style={styles.textItem}>{`Rp${(Number(currentUser.balance) - Number(stateTransaction.transaction.amount)).toLocaleString('id-ID')}`}</Text>
               </View>
            </View>
            <View style={styles.profileContainer}>
               <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>Date &amp; Time</Text>
                  <Text style={styles.textItem}>{`${DateTime.local().setLocale('en').toLocaleString(DateTime.DATE_MED)} - ${DateTime.local().setLocale('id').toLocaleString(DateTime.TIME_SIMPLE)}`}</Text>
               </View>
            </View>
            <View style={styles.profileContainer}>
               <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>Notes</Text>
                  <Text style={styles.textItem}>{stateTransaction.transaction.notes === null ? '(No notes)' : stateTransaction.transaction.notes}</Text>
               </View>
            </View>
            <Button
               title="Continue"
               buttonStyle={styles.buttonSubmit}
               titleStyle={styles.buttonSubmitText}
               onPress={() => {
                  navigation.navigate('PinConfirmation');
               }}
            />
         </ScrollView>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: color.backgroud,
   }, containerTwoItems: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   itemSmallContainer: {
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
      flex: 1,
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
      fontSize: 22,
      fontWeight: '700',
   },
   // long item
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
   profileFlex: {
      flexDirection: 'row',
   },
   profileImg: {
      width: 50,
      height: 50,
      borderRadius: 10,
   },
   textProfileContainer: {
      justifyContent: 'space-between',
      height: 50,
      marginLeft: 20,
   },
   textName: {
      fontWeight: '700',
      fontSize: 16,
   },
   textPhone: {
      color: '#7A7886',
      fontSize: 14,
   },
   sectionText: {
      fontSize: 18,
      fontWeight: '700',
      color: color.dark,
      marginHorizontal: '4%',
      marginVertical: '5%',
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

export default TransferConfirmation;
