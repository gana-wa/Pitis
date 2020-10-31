import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Pressable, SafeAreaView, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements';
import { API_URL } from '../utils/environment';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/actions/transaction';
import { DateTime } from 'luxon';

import * as color from '../styles/colorStyles';

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

const History = ({ navigation }) => {
   const currentUser = useSelector(state => state.auth.user);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(history(currentUser.user_id));
   }, []);

   const stateHistory = useSelector(state => state.transaction.history);

   const startDateWeek = DateTime.local().startOf('week').toISODate();
   const endDateWeek = DateTime.local().startOf('week').plus({ days: 7 }).toISODate();
   const getThisMonth = DateTime.local().month;

   const thisWeek = stateHistory.filter((item) => {
      return (
         DateTime.fromISO(item.date).toISODate() >= startDateWeek &&
         DateTime.fromISO(item.date).toISODate() <= endDateWeek
      );
   });

   const thisMonth = stateHistory.filter((item) => {
      return (
         !thisWeek.includes(item) &&
         DateTime.fromISO(item.date).month === getThisMonth
      );
   });

   const beforeAgain = stateHistory.filter((item) => {
      return (
         !thisWeek.includes(item) &&
         !thisMonth.includes(item)
      );
   });

   const historyData = [
      {
         date: 'This Week',
         data: thisWeek,
      },
      {
         date: 'This Month',
         data: thisMonth,
      },
      {
         date: 'Before Again',
         data: beforeAgain,
      },
   ];

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle="default" backgroundColor={color.primary} />
         {stateHistory.length < 1 ? (
            <Text style={styles.textNoHistory}>No history yet</Text>
         ) : (
               <>
                  <SectionList
                     sections={historyData}
                     keyExtractor={(item, index) => item + index}
                     renderItem={({ item }) => <Item data={item} />}
                     renderSectionHeader={({ section: { date, data } }) => (
                        data.length === 0 ? null :
                           <View style={styles.section}>
                              <Text style={styles.sectionText}>{date}</Text>
                           </View>
                     )
                     }
                  />
                  <View style={styles.buttonFilterContainer}>
                     <Button
                        icon={
                           <Icon
                              name="arrow-up"
                              size={20}
                              color={color.error}
                           />
                        }
                        titleStyle={{ color: color.error }}
                        buttonStyle={styles.buttonFillter}
                        containerStyle={{ elevation: 2, flex: 2, marginRight: 20 }}
                     />
                     <Button
                        icon={
                           <Icon
                              name="arrow-down"
                              size={20}
                              color={color.success}
                           />
                        }
                        titleStyle={{ color: color.success }}
                        buttonStyle={styles.buttonFillter}
                        containerStyle={{ elevation: 2, flex: 2, marginRight: 20 }}
                     />
                     <Button
                        title="Filter by Date"
                        titleStyle={{ color: color.primary }}
                        buttonStyle={styles.buttonFillter}
                        containerStyle={{ elevation: 2, flex: 6 }}
                     />
                  </View>
               </>
            )}
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
   textNoHistory: {
      textAlign: 'center',
      fontSize: 20,
      marginTop: 200,
      fontStyle: 'italic',
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: '4%',
      alignItems: 'center',
   },
   sectionText: {
      fontSize: 16,
      fontWeight: '400',
      color: '#7A7886',
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
      elevation: 3,
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

export default History;
