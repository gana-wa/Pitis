import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Pressable, SafeAreaView, SectionList, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Button, SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../utils/environment';
import { showContact, searchUser } from '../redux/actions/user';
import { addReceiver } from '../redux/actions/transaction';

import defaultProfile from '../assets/img/default_profile.png';

import * as color from '../styles/colorStyles';

const Item = ({ sender, dispatch, data, navigation }) => {
   const receiver = {
      sender_id: sender,
      receiver_id: data.user_id,
      first_name: data.first_name,
      last_name: data.last_name,
      photo: data.photo,
      phone: data.phone,
   };

   return (
      <Pressable style={styles.containerTransaction} onPress={() => {
         navigation.navigate('AmountInput');
         dispatch(addReceiver(receiver));
      }}>
         <View style={styles.profileContainer}>
            {data.photo === null ? (
               <Image source={defaultProfile} style={styles.profileImg} />
            ) : (
                  <Image source={{ uri: `${API_URL}${data.photo}` }} style={styles.profileImg} />
               )}
            <View style={styles.textHelloContainer}>
               {data.last_name === null ? (
                  <Text style={styles.textNameTransaction}>{`${data.first_name}`}</Text>
               ) : (
                     <Text style={styles.textNameTransaction}>{`${data.first_name} ${data.last_name}`}</Text>
                  )}
               <Text style={styles.textTransaction}>{data.phone}</Text>
            </View>
         </View>
      </Pressable>
   )
};

const FindReceiver = ({ navigation }) => {
   const dispatch = useDispatch();

   const contact = useSelector(
      (state) => state.user.contact,
   );

   const curentUser = useSelector(
      (state) => state.auth.user,
   );

   useEffect(() => {
      dispatch(showContact(curentUser.user_id));
   }, []);

   const DATA = [
      {
         date: 'All Contact',
         data: contact,
      },
   ];

   const [search, setSearch] = useState('');

   const handleSubmitSearch = () => {
      console.log(search, curentUser.user_id);
      dispatch(searchUser({ first_name: search, user_id: curentUser.user_id }));
   };

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle="dark-content" backgroundColor={color.backgroud} />
         <View>
            <SectionList
               sections={DATA}
               keyExtractor={(item) => item.user_id}
               ListHeaderComponent={() => (
                  <SearchBar
                     platform="android"
                     placeholder="Search receiver here"
                     value={search}
                     onChangeText={(text) => setSearch(text)}
                     lightTheme={true}
                     containerStyle={{
                        backgroundColor: color.backgroud,
                        // marginTop: 10,
                        paddingHorizontal: '4%',
                     }}
                     inputContainerStyle={{ backgroundColor: 'rgba(58, 61, 66, 0.1)', borderRadius: 12, paddingLeft: 10 }}
                     inputStyle={{ fontSize: 16, fontWeight: '400' }}
                     placeholderTextColor="rgba(58, 61, 66, 0.4)"
                     onSubmitEditing={handleSubmitSearch}
                  />
               )}
               renderItem={({ item }) => <Item data={item} sender={curentUser.user_id} dispatch={dispatch} navigation={navigation} />}
               renderSectionHeader={({ section: { date } }) => (
                  <View style={styles.section}>
                     <Text style={styles.sectionText}>{date}</Text>
                     <Text style={styles.sectionTextSubtitle}>{`${contact.length} Contact Founds`}</Text>
                  </View>
               )}
            />
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: color.backgroud,
      flex: 1,
      // justifyContent: 'space-evenly'
      // marginTop: 10,
   },
   // header
   containerHeader: {
      marginTop: '8%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '4%',
      backgroundColor: color.primary,
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
   // 3 button
   buttonFilterContainer: {
      // marginVertical: '6%',
      marginTop: '4%',
      marginBottom: '10%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '4%',
   },
   buttonFillter: {
      backgroundColor: color.white,
      borderRadius: 10,
      height: 57,
      // width: 57,
   },
   // Transaction
   section: {
      // marginTop: '8%',
      marginVertical: '6%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginHorizontal: '4%',
   },
   sectionTextSubtitle: {
      fontSize: 14,
      fontWeight: '400',
      color: '#7A7886',
   },
   sectionText: {
      fontSize: 18,
      fontWeight: '700',
      color: color.dark,
   },
   dividerSeeAll: {
      color: color.primary,
      fontSize: 14,
   },
   containerTransaction: {
      backgroundColor: color.white,
      // marginTop: '5%',
      marginBottom: '5%',
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
      color: color.success,
      fontSize: 18,
      fontWeight: 'bold',
   },
   textTransactionNumberOutcome: {
      color: color.error,
      fontSize: 18,
      fontWeight: 'bold',
   },
});

export default FindReceiver;
