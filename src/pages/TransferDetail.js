import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../utils/environment';
import { DateTime } from 'luxon';
import { clearTransaction } from '../redux/actions/transaction';

import * as color from '../styles/colorStyles';

import defaultProfile from '../assets/img/default_profile.png';

const profilImg = (from) => `${API_URL}${(from)}`;

const TransferDetail = ({ navigation }) => {

   const dispatch = useDispatch();
   const stateTransaction = useSelector(state => state.transaction);
   const currentUser = useSelector(state => state.auth.user);

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle="default" backgroundColor={color.primary} />
         <ScrollView>
            <View style={styles.containerHeader}>
               {stateTransaction.isSuccess ? (
                  <>
                     <View style={styles.iconSuccessContainer}>
                        <Icon
                           name="check"
                           size={60}
                           color={color.white}
                        />
                     </View>
                     <Text style={styles.textStatus}>Transfer Success</Text>
                  </>
               ) : (
                     <>
                        <View style={styles.iconFailedContainer}>
                           <Icon
                              name="x"
                              size={60}
                              color={color.white}
                           />
                        </View>
                        <Text style={styles.textStatus}>Transfer Failed</Text>
                        <Text style={styles.subtitleFailed}>We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</Text>
                     </>
                  )}
            </View>
            <View>
               <View style={styles.containerTwoItems}>
                  <View style={styles.itemSmallContainer}>
                     <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Amount</Text>
                        <Text style={styles.textItem}>{`Rp${Number(stateTransaction.transaction.amount).toLocaleString()}`}</Text>
                     </View>
                  </View>
                  <View style={styles.itemSmallContainer}>
                     <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Balance Left</Text>
                        <Text style={styles.textItem}>Rp20.000</Text>
                     </View>
                  </View>
               </View>
               <View style={styles.containerTwoItems}>
                  <View style={styles.itemSmallContainer}>
                     <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Date</Text>
                        <Text style={styles.textItem}>{DateTime.local().setLocale('en').toLocaleString(DateTime.DATE_MED)}</Text>
                     </View>
                  </View>
                  <View style={styles.itemSmallContainer}>
                     <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Time</Text>
                        <Text style={styles.textItem}>{DateTime.local().setLocale('id').toLocaleString(DateTime.TIME_SIMPLE)}</Text>
                     </View>
                  </View>
               </View>
               <View style={styles.profileContainer}>
                  <View style={styles.textContainer}>
                     <Text style={styles.textTitle}>Notes</Text>
                     <Text style={styles.textItem}>{stateTransaction.transaction.notes === '' ? '(No notes)' : stateTransaction.transaction.notes}</Text>
                  </View>
               </View>
            </View>
            <View>
               <Text style={styles.sectionText}>From</Text>
               <View style={styles.profileContainer}>
                  <View style={styles.profileFlex}>
                     <Image source={currentUser.photo === null ? defaultProfile : ({ uri: profilImg(currentUser.photo) })} style={styles.profileImg} />
                     <View style={styles.textProfileContainer}>
                        <Text style={styles.textName}>{currentUser.last_name === null ? currentUser.first_name : `${currentUser.first_name} ${currentUser.last_name}`}</Text>
                        <Text style={styles.textPhone}>{currentUser.phone}</Text>
                     </View>
                  </View>
               </View>
               <Text style={styles.sectionText}>To</Text>
               <View style={styles.profileContainer}>
                  <View style={styles.profileFlex}>
                     <Image source={stateTransaction.receiver.photo === null ? defaultProfile : ({ uri: profilImg(stateTransaction.receiver.photo) })} style={styles.profileImg} />
                     <View style={styles.textProfileContainer}>
                        <Text style={styles.textName}>{stateTransaction.receiver.last_name === null ? stateTransaction.receiver.first_name : `${stateTransaction.receiver.first_name} ${stateTransaction.receiver.last_name}`}</Text>
                        <Text style={styles.textPhone}>{stateTransaction.receiver.phone}</Text>
                     </View>
                  </View>
               </View>
            </View>
            {stateTransaction.isSuccess ? (
               <Button
                  title="Back to Home"
                  buttonStyle={styles.buttonSubmit}
                  titleStyle={styles.buttonSubmitText}
                  onPress={() => {
                     navigation.navigate('Home');
                     dispatch(clearTransaction());
                  }}
               />
            ) : (
                  <Button
                     title="Try Again"
                     buttonStyle={styles.buttonSubmit}
                     titleStyle={styles.buttonSubmitText}
                     onPress={() => navigation.navigate('AmountInput')}
                  />
               )}
         </ScrollView>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: color.backgroud,
   },
   containerHeader: {
      marginVertical: '10%',
   },
   iconSuccessContainer: {
      backgroundColor: color.success,
      width: 70,
      height: 70,
      borderRadius: 70,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: '5%',
   },
   iconFailedContainer: {
      backgroundColor: color.error,
      width: 70,
      height: 70,
      borderRadius: 70,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: '5%',
   },
   textStatus: {
      fontSize: 22,
      fontWeight: '700',
      textAlign: 'center',
   },
   subtitleFailed: {
      color: color.subtitle,
      fontSize: 16,
      marginTop: '5%',
      marginHorizontal: '4%',
      textAlign: 'center',
      lineHeight: 27,
   },
   //small item
   containerTwoItems: {
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
      fontSize: 18,
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

export default TransferDetail;
