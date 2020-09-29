import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../utils/environment';

import * as color from '../styles/colorStyles';

import profileImg from '../assets/img/profile.jpg';
import defaultProfile from '../assets/img/default_profile.png';

const Home = ({ navigation }) => {

   const { username, first_name, last_name, phone, photo, balance } = useSelector(
      (state) => state.auth.user,
   );

   const profilImg = `${API_URL}${photo}`;

   return (
      <View style={styles.container}>
         <StatusBar barStyle="dark-content" backgroundColor={color.backgroud} />
         <View style={styles.containerHeader}>
            <View style={styles.profileContainer}>
               <Pressable onPress={() => navigation.navigate('Profile')}>
                  <Image source={photo === null ? defaultProfile : ({ uri: profilImg })} style={styles.profileImg} />
               </Pressable>
               <View style={styles.textHelloContainer}>
                  <Text style={styles.textHello}>Hello,</Text>
                  {last_name === null ? (
                     <Text style={styles.textName}>{first_name}</Text>
                  ) : (
                        <Text style={styles.textName}>{`${first_name} ${last_name}`}</Text>
                     )}
               </View>
            </View>
            <Icon
               name="bell"
               size={30}
               color={color.dark}
            />
         </View>
         <View style={styles.containerBalance}>
            <Text style={styles.textBalanceLabel}>Balance</Text>
            <Text style={styles.textBalanceNumber}>{`Rp${(balance).toLocaleString()}`}</Text>
            <Text style={styles.textPhoneNumber}>{phone === null ? 'Phone not set yet' : phone}</Text>
         </View>
         <View style={styles.buttonTransferContainer}>
            <Button
               title="Transfer"
               icon={
                  <Icon
                     name="arrow-up"
                     size={20}
                     color="#608DE2"
                  />
               }
               titleStyle={{ color: color.dark, marginLeft: 16, }}
               buttonStyle={styles.buttonTransferTopUp}
               onPress={() => navigation.navigate('FindReceiver')}
            />
            <Button
               title="Top Up"
               icon={
                  <Icon
                     name="plus"
                     size={20}
                     color="#608DE2"
                  />
               }
               titleStyle={{ color: color.dark, marginLeft: 16, }}
               buttonStyle={styles.buttonTransferTopUp}
            />
         </View>
         <View>
            <View style={styles.divider}>
               <Text style={styles.dividerText}>Transaction History</Text>
               <Pressable onPress={() => navigation.navigate('History')}>
                  <Text style={styles.dividerSeeAll}>See all</Text>
               </Pressable>
            </View>
            <View style={styles.containerTransaction}>
               <View style={styles.profileContainer}>
                  <Image source={profileImg} style={styles.profileImg} />
                  <View style={styles.textHelloContainer}>
                     <Text style={styles.textNameTransaction}>Samuel Suhi</Text>
                     <Text style={styles.textTransaction}>Transfer</Text>
                  </View>
               </View>
               <Text style={styles.textTransactionNumberIncome}>+Rp50.000</Text>
            </View>
            <View style={styles.containerTransaction}>
               <View style={styles.profileContainer}>
                  <Image source={profileImg} style={styles.profileImg} />
                  <View style={styles.textHelloContainer}>
                     <Text style={styles.textNameTransaction}>Samuel Suhi</Text>
                     <Text style={styles.textTransaction}>Transfer</Text>
                  </View>
               </View>
               <Text style={styles.textTransactionNumberIncome}>+Rp50.000</Text>
            </View>
            <View style={styles.containerTransaction}>
               <View style={styles.profileContainer}>
                  <Image source={profileImg} style={styles.profileImg} />
                  <View style={styles.textHelloContainer}>
                     <Text style={styles.textNameTransaction}>Samuel Suhi</Text>
                     <Text style={styles.textTransaction}>Transfer</Text>
                  </View>
               </View>
               <Text style={styles.textTransactionNumberIncome}>+Rp50.000</Text>
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: color.backgroud,
      flex: 1,
      // justifyContent: 'space-evenly'
   },
   // header
   containerHeader: {
      marginTop: '8%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '4%',
   },
   profileContainer: {
      flexDirection: 'row',
   },
   profileImg: {
      width: 50,
      height: 50,
      borderRadius: 10,
   },
   textHelloContainer: {
      justifyContent: 'space-between',
      height: 50,
      marginLeft: 20,
   },
   textHello: {
      fontSize: 16,
   },
   textName: {
      fontWeight: '700',
      fontSize: 18,
   },
   // balance
   containerBalance: {
      backgroundColor: color.primary,
      height: 140,
      borderRadius: 20,
      marginTop: '8%',
      marginHorizontal: '4%',
      paddingHorizontal: '6%',
      paddingVertical: '5%',
      justifyContent: 'space-evenly',
   },
   textBalanceLabel: {
      color: '#D0D0D0',
   },
   textBalanceNumber: {
      color: color.white,
      fontSize: 24,
      fontWeight: '700',
   },
   textPhoneNumber: {
      color: '#DFDCDC',
   },
   // 2 button
   buttonTransferContainer: {
      marginTop: '8%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '4%',
   },
   buttonTransferTopUp: {
      backgroundColor: '#E5E8ED',
      width: 160,
      height: 57,
      borderRadius: 10,
   },
   // Transaction
   divider: {
      marginTop: '8%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: '4%',
      alignItems: 'center',
   },
   dividerText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#514F5B',
   },
   dividerSeeAll: {
      color: color.primary,
      fontSize: 14,
   },
   containerTransaction: {
      backgroundColor: color.white,
      marginTop: '6%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4%',
      borderRadius: 10,
      elevation: 1,
   },
   textNameTransaction: {
      fontWeight: '700',
      fontSize: 16,
   },
   textTransaction: {
      color: '#7A7886',
      fontSize: 14,
   },
   textTransactionNumberIncome: {
      color: '#1EC15F',
      fontSize: 18,
      fontWeight: 'bold',
   },
   textTransactionNumberOutcome: {
      color: color.error,
      fontSize: 18,
      fontWeight: 'bold',
   },
});

export default Home;
