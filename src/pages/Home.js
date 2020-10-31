import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Pressable, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL, SOCKET_URL } from '../utils/environment';
import { fetchBalance } from '../redux/actions/user';
import { history } from '../redux/actions/transaction';
import io from 'socket.io-client';
import { setSystemSocket } from '../redux/actions/system';
import { showLocalNotification } from '../utils/handleNotification';
import PushNotification from 'react-native-push-notification';

import * as color from '../styles/colorStyles';

import profileImg from '../assets/img/profile.jpg';
import defaultProfile from '../assets/img/default_profile.png';

const Item = ({ data }) => {
   const profilImg = `${API_URL}${data.photo}`;
   return (
      <View style={styles.containerTransaction}>
         <View style={styles.profileContainer}>
            {data.category === 'Top Up' ? null : (
               <Image source={data.photo === null ? defaultProfile : ({ uri: profilImg })} style={styles.profileImg} />
            )}
            <View style={styles.textHelloContainer}>
               {data.category === 'Top Up' ? (
                  <Text style={styles.textNameTransaction}>Top Up Zwallet</Text>
               ) : (
                     <Text style={styles.textNameTransaction}>{data.last_name === null ? data.first_name : `${data.first_name} ${data.last_name}`}</Text>
                  )}
               <Text style={styles.textTransaction}>{data.category}</Text>
            </View>
         </View>
         {data.type === 'in' ? (
            <Text style={styles.textTransactionNumberIncome}>{`+Rp${(data.amount).toLocaleString('id-ID')}`}</Text>
         ) : (
               <Text style={styles.textTransactionNumberOutcome}>{`-Rp${(data.amount).toLocaleString('id-ID')}`}</Text>
            )}
      </View>
   );
};

const Home = ({ navigation }) => {

   const stateAuth = useSelector(state => state.auth);
   const { first_name, last_name, phone, photo, balance, user_id } = useSelector(
      (state) => state.auth.user,
   );
   const stateHistory = useSelector(state => state.transaction.history);
   const { socket } = useSelector(state => state.system);

   const dataHistory = stateHistory.slice(0, 3);

   const dispatch = useDispatch();

   useEffect(() => {
      if (stateAuth.isLoggedIn) {
         dispatch(fetchBalance(user_id));
         dispatch(history(user_id));
      } else { return }
   }, [dispatch, user_id]);

   useEffect(() => {
      if (socket !== null) return;
      const newSocket = io(SOCKET_URL, {
         query: { id: user_id },
      });
      dispatch(setSystemSocket(newSocket));
      return () => newSocket.close();
   }, [user_id]);

   const channelId = 'transfer-notification';

   useEffect(() => {
      if (socket === null) return;
      PushNotification.createChannel(
         {
            channelId,
            channelName: 'transfer',
            channelDescription: 'transfer info',
         }, (created) => console.log(`createChannel returned '${created}'`)
      );
      socket.on('transaction', ({ title, message }) => {
         dispatch(fetchBalance(user_id));
         showLocalNotification(
            channelId,
            title,
            message,
         );
      });
      return () => {
         socket.off('transaction');
      };
   }, [socket]);

   const profilImg = `${API_URL}${photo}`;

   const alertEmptyPhone = () => {
      Alert.alert(
         'Phone number not set',
         'Please set up your phone number',
         [
            {
               text: 'Cancel',
            },
            {
               text: 'Ok',
               onPress: () => {
                  navigation.navigate('PersonalInfo');
               },
            },
         ],
         { cancelable: false },
      );
   };

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
            <Text style={styles.textBalanceNumber}>{`Rp${(balance).toLocaleString('id-ID')}`}</Text>
            <Text style={styles.textPhoneNumber}>{phone === null ? 'Phone not set yet' : phone}</Text>
         </View>
         <View style={styles.buttonTransferContainer}>
            {phone === null ? (
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
                  onPress={alertEmptyPhone}
               />
            ) : (
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
               )}
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
               {stateHistory.length < 1 ? (null) : (
                  <Pressable onPress={() => navigation.navigate('History')}>
                     <Text style={styles.dividerSeeAll}>See all</Text>
                  </Pressable>
               )}
            </View>
            {stateHistory.length < 1 ? (
               <Text style={styles.textNoHistory}>(No history yet)</Text>
            ) : (
                  <FlatList
                     data={dataHistory}
                     renderItem={({ item }) => <Item data={item} />}
                     keyExtractor={item => item.transaction_id.toString()}
                  />
               )}
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
   textNoHistory: {
      textAlign: 'center',
      fontStyle: 'italic',
      fontSize: 18,
      color: color.input,
      marginTop: 50,
   },
   containerTransaction: {
      backgroundColor: color.white,
      marginTop: '6%',
      marginBottom: 1,
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
