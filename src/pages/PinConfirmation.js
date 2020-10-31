import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useSelector, useDispatch } from 'react-redux';
import { transaction } from '../redux/actions/transaction';

import * as color from '../styles/colorStyles';

const PinConfirmation = ({ navigation }) => {
   const [pin, setPin] = useState('');
   const [pinValid, setPinValid] = useState(false);

   const dispatch = useDispatch();
   const transactionState = useSelector(state => state.transaction.transaction);
   const stateAuth = useSelector(state => state.auth);

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle="dark-content" backgroundColor={color.backgroud} />
         <View style={styles.containerMainContent}>
            <View style={styles.topContent}>
               <Text style={styles.infoText}>Enter your 6 digits PIN for confirmation to continue transferring money. </Text>
               <SmoothPinCodeInput
                  password mask="﹡"
                  maskDelay={100}
                  containerStyle={styles.pinContainer}
                  cellStyle={pinValid ? styles.pinCell : styles.pinCellEmpty}
                  value={pin}
                  onTextChange={(value) => setPin(value)}
                  codeLength={6}
                  textStyle={styles.textPin}
                  cellStyleFocused={styles.cellStyleFocused}
                  placeholder="__"
                  onFulfill={() => setPinValid(true)}
                  onBackspace={() => setPinValid(false)}
               />
            </View>
            {pinValid ? (
               <Button
                  title="Transfer Now"
                  buttonStyle={styles.buttonSubmit}
                  titleStyle={styles.buttonSubmitText}
                  onPress={() => {
                     if (Number(pin) !== Number(stateAuth.pin)) {
                        Alert.alert(
                           'Incorrect Pin',
                           'Please input your pin correctly',
                           [
                              {
                                 text: 'Ok',
                              },
                           ],
                           { cancelable: true },
                        );
                     } else {
                        navigation.navigate('TransferDetail');
                        dispatch(transaction(transactionState));
                     }
                     // console.log(transaction);
                  }}
               />
            ) : (
                  <View style={styles.buttonSubmitDisabled}>
                     <Text style={styles.buttonSubmitTextDisabled}>Transfer Now</Text>
                  </View>
               )}
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: color.backgroud,
      flex: 1,
   },
   infoText: {
      color: '#7A7886',
      fontSize: 16,
      textAlign: 'justify',
      marginHorizontal: '4%',
   },
   containerMainContent: {
      flex: 1,
      justifyContent: 'space-between',
   },
   topContent: {
      marginTop: '4%',
   },
   // pin
   pinContainer: {
      alignSelf: 'center',
      marginTop: '10%',
   },
   pinCell: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: color.primary,
      backgroundColor: color.white,
      height: 58,
      width: 47,
   },
   pinCellEmpty: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: color.disabled,
      backgroundColor: color.white,
      height: 58,
      width: 47,
   },
   textPin: {
      fontSize: 24,
      color: '#3A3D42',
      fontWeight: '700',
   },
   cellStyleFocused: {
      borderColor: color.primary,
      borderWidth: 2,
   },
   buttonSubmit: {
      backgroundColor: color.primary,
      marginHorizontal: '4%',
      marginBottom: '10%',
      borderRadius: 12,
      height: 57,
   },
   buttonSubmitText: {
      fontSize: 18,
      color: color.white,
      // fontWeight: '700',
   },
   buttonSubmitDisabled: {
      backgroundColor: color.disabled,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: '4%',
      marginBottom: '10%',
      borderRadius: 12,
      height: 57,
   },
   buttonSubmitTextDisabled: {
      color: color.disabledText,
      fontSize: 18,
      fontWeight: '700',
   },
});

export default PinConfirmation;
