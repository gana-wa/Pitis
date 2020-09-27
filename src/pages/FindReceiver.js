import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Pressable, SafeAreaView, SectionList, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Button, SearchBar } from 'react-native-elements';

import * as color from '../styles/colorStyles';

const DATA = [
   {
      date: 'All Contact',
      data: [
         {
            name: 'Arya Stark',
            category: 'Transfer',
            type: 'income',
            nominal: 'Rp50.000',
            image: 'https://vignette.wikia.nocookie.net/gameofthrones/images/b/be/AryaShipIronThrone.PNG/revision/latest/top-crop/width/360/height/360?cb=20190520174300',
         },
         {
            name: 'Spotify',
            category: 'Subscription',
            type: 'outcome',
            nominal: 'Rp49.000',
            image: 'https://s3-alpha-sig.figma.com/img/570b/b727/0ef239fe7616f3da10bac5dc7675c510?Expires=1601856000&Signature=AvPO60Rw-R3potidy7r4KSm5EkFaVBbo6N5FYi~6Ehfi8irVgan~Wsu4Fck~~2hp2XP~cZnJtSYIhm-EtrENoNySl2ahPMNrS74A05TMfZn4uy3jXCuz2c2WZ2beBF5GjqFDHrRGdr4HuV4BX6f92uWeEI82tK3zGcDSn3N~9bNi7farsJ8TfzcAzYSjWcY6FrArLKQYtQRbg6pmujTl61nVmKzDb06K~q8wNHTqJ59s81h-bTRfNyN2uoSmjdnJMOHemTZtHpBEB1vfMEtF6lPDfiAB5Jfv1~~1~E-iQ2MmDmOUilksDoD9cocQAblZN8UUPxdvnwIBVBkqg6EaPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
         },
         {
            name: 'Jon Snow',
            category: 'Transfer',
            type: 'income',
            nominal: 'Rp50.000',
            image: 'https://i.insider.com/5cb3c8e96afbee373d4f2b62?width=600&format=jpeg&auto=webp',
         },
         {
            name: 'Netflix',
            category: 'Subscription',
            type: 'outcome',
            nominal: 'Rp149.000',
            image: 'https://s3-alpha-sig.figma.com/img/6d32/07de/81456a08f7adaf48e4801b0cae72763b?Expires=1601856000&Signature=GhP3uXKBpSMH7NxyTrPhRPdpX7KYfn7KJB7YxpY6~GQrl2vZi91cKTIOSskebnqVTa9TZlk1io9yYjg4Ews50i-lfwhz52Y8VaGAzsNdBjFYiPF1t5QdQE0fChORODKbODDy7X9~QhrEkMRrxWaAFT0B-Y9Lm4he98yT4BJckQyQby~C0eVdKZP0hQUaLFW4GtcBmoK2LbXXQVAZ2VscnpirhGd7onvq-CDdN663FwTSY3~jXO3qOdqwBsTymaKxfp-mv~f9GAVaPJA1bmEEjD8YuVFVro0P9pLY5klA3AlJIqveHb7DY5Z7Phji23yB07i10omyqwe92xEDPQA~4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
         },
         {
            name: 'Netflix',
            category: 'Subscription',
            type: 'outcome',
            nominal: 'Rp149.000',
            image: 'https://s3-alpha-sig.figma.com/img/6d32/07de/81456a08f7adaf48e4801b0cae72763b?Expires=1601856000&Signature=GhP3uXKBpSMH7NxyTrPhRPdpX7KYfn7KJB7YxpY6~GQrl2vZi91cKTIOSskebnqVTa9TZlk1io9yYjg4Ews50i-lfwhz52Y8VaGAzsNdBjFYiPF1t5QdQE0fChORODKbODDy7X9~QhrEkMRrxWaAFT0B-Y9Lm4he98yT4BJckQyQby~C0eVdKZP0hQUaLFW4GtcBmoK2LbXXQVAZ2VscnpirhGd7onvq-CDdN663FwTSY3~jXO3qOdqwBsTymaKxfp-mv~f9GAVaPJA1bmEEjD8YuVFVro0P9pLY5klA3AlJIqveHb7DY5Z7Phji23yB07i10omyqwe92xEDPQA~4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
         },
         {
            name: 'Netflix',
            category: 'Subscription',
            type: 'outcome',
            nominal: 'Rp149.000',
            image: 'https://s3-alpha-sig.figma.com/img/6d32/07de/81456a08f7adaf48e4801b0cae72763b?Expires=1601856000&Signature=GhP3uXKBpSMH7NxyTrPhRPdpX7KYfn7KJB7YxpY6~GQrl2vZi91cKTIOSskebnqVTa9TZlk1io9yYjg4Ews50i-lfwhz52Y8VaGAzsNdBjFYiPF1t5QdQE0fChORODKbODDy7X9~QhrEkMRrxWaAFT0B-Y9Lm4he98yT4BJckQyQby~C0eVdKZP0hQUaLFW4GtcBmoK2LbXXQVAZ2VscnpirhGd7onvq-CDdN663FwTSY3~jXO3qOdqwBsTymaKxfp-mv~f9GAVaPJA1bmEEjD8YuVFVro0P9pLY5klA3AlJIqveHb7DY5Z7Phji23yB07i10omyqwe92xEDPQA~4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
         },
         {
            name: 'Netflix',
            category: 'Subscription',
            type: 'outcome',
            nominal: 'Rp149.000',
            image: 'https://s3-alpha-sig.figma.com/img/6d32/07de/81456a08f7adaf48e4801b0cae72763b?Expires=1601856000&Signature=GhP3uXKBpSMH7NxyTrPhRPdpX7KYfn7KJB7YxpY6~GQrl2vZi91cKTIOSskebnqVTa9TZlk1io9yYjg4Ews50i-lfwhz52Y8VaGAzsNdBjFYiPF1t5QdQE0fChORODKbODDy7X9~QhrEkMRrxWaAFT0B-Y9Lm4he98yT4BJckQyQby~C0eVdKZP0hQUaLFW4GtcBmoK2LbXXQVAZ2VscnpirhGd7onvq-CDdN663FwTSY3~jXO3qOdqwBsTymaKxfp-mv~f9GAVaPJA1bmEEjD8YuVFVro0P9pLY5klA3AlJIqveHb7DY5Z7Phji23yB07i10omyqwe92xEDPQA~4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
         },
      ],
   },
];

const Item = ({ data, navigation }) => (
   <Pressable style={styles.containerTransaction} onPress={() => navigation.navigate('AmountInput')}>
      <View style={styles.profileContainer}>
         <Image source={{ uri: data.image }} style={styles.profileImg} />
         <View style={styles.textHelloContainer}>
            <Text style={styles.textNameTransaction}>{data.name}</Text>
            <Text style={styles.textTransaction}>{data.category}</Text>
         </View>
      </View>
   </Pressable>
);

const FindReceiver = ({ navigation }) => {
   const [search, setSearch] = useState('');

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle="dark-content" backgroundColor={color.backgroud} />
         <View>
            <SectionList
               sections={DATA}
               keyExtractor={(item, index) => item + index}
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
                  />
               )}
               renderItem={({ item }) => <Item data={item} navigation={navigation} />}
               renderSectionHeader={({ section: { date } }) => (
                  <View style={styles.section}>
                     <Text style={styles.sectionText}>{date}</Text>
                     <Text style={styles.sectionTextSubtitle}>17 Contact Founds</Text>
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