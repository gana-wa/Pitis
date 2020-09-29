import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

import * as color from '../styles/colorStyles';

const data = {
   name: 'Arya Stark',
   phone: '+62 813-8492-9994',
   image: 'https://vignette.wikia.nocookie.net/gameofthrones/images/b/be/AryaShipIronThrone.PNG/revision/latest/top-crop/width/360/height/360?cb=20190520174300',
};

const TransferDetail = ({ navigation }) => {
   const ceklist = false;

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView>
            <View style={styles.containerHeader}>
               {ceklist ? (
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
                        <Text style={styles.textItem}>Rp100.000</Text>
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
                        <Text style={styles.textItem}>May 11, 2020</Text>
                     </View>
                  </View>
                  <View style={styles.itemSmallContainer}>
                     <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Time</Text>
                        <Text style={styles.textItem}>12.20</Text>
                     </View>
                  </View>
               </View>
               <View style={styles.profileContainer}>
                  <View style={styles.textContainer}>
                     <Text style={styles.textTitle}>Notes</Text>
                     <Text style={styles.textItem}>For buying some socks</Text>
                  </View>
               </View>
            </View>
            <View>
               <Text style={styles.sectionText}>From</Text>
               <View style={styles.profileContainer}>
                  <View style={styles.profileFlex}>
                     <Image source={{ uri: data.image }} style={styles.profileImg} />
                     <View style={styles.textProfileContainer}>
                        <Text style={styles.textName}>{data.name}</Text>
                        <Text style={styles.textPhone}>{data.phone}</Text>
                     </View>
                  </View>
               </View>
               <Text style={styles.sectionText}>To</Text>
               <View style={styles.profileContainer}>
                  <View style={styles.profileFlex}>
                     <Image source={{ uri: data.image }} style={styles.profileImg} />
                     <View style={styles.textProfileContainer}>
                        <Text style={styles.textName}>{data.name}</Text>
                        <Text style={styles.textPhone}>{data.phone}</Text>
                     </View>
                  </View>
               </View>
            </View>
            {ceklist ? (
               <Button
                  title="Back to Home"
                  buttonStyle={styles.buttonSubmit}
                  titleStyle={styles.buttonSubmitText}
                  onPress={() => navigation.navigate('Home')}
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
