import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../utils/environment';
import { useForm, Controller } from 'react-hook-form';
import { inputAmount } from '../redux/actions/transaction';

import defaultProfile from '../assets/img/default_profile.png';

import * as color from '../styles/colorStyles';

const AmountInput = ({ navigation }) => {
   const dispatch = useDispatch();
   const stateUser = useSelector(state => state.auth.user);
   const { receiver_id, first_name, last_name, photo, phone } = useSelector(state => state.transaction.receiver);

   const profilImg = `${API_URL}${photo}`;

   const { control, handleSubmit, errors } = useForm();

   const onSubmit = (data) => {
      dispatch(inputAmount(data));
      navigation.navigate('TransferConfirmation');
   };

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle="default" backgroundColor={color.primary} />
         <View style={styles.containerHeader}>
            <View style={styles.containerProfile}>
               <View style={styles.profileFlex}>
                  {photo === null ? (
                     <Image source={defaultProfile} style={styles.profileImg} />
                  ) : (
                        <Image source={{ uri: profilImg }} style={styles.profileImg} />
                     )}
                  <View style={styles.textProfileContainer}>
                     <Text style={styles.textName}>{`${first_name} ${last_name === null ? '' : last_name}`}</Text>
                     <Text style={styles.textPhone}>{phone}</Text>
                  </View>
               </View>
            </View>
         </View>
         <View style={styles.containerMainContent}>
            <View>
               <Controller
                  control={control}
                  render={({ onChange, onBlur, value }) => (
                     <TextInput
                        placeholder="0.00"
                        style={styles.inpuBalance}
                        keyboardType="numeric"
                        maxLength={10}
                        onBlur={onBlur}
                        onChangeText={text => onChange(text)}
                        value={value}
                     />
                  )}
                  name="amount"
                  rules={{ required: true }}
                  defaultValue=""
               />
               <Text style={styles.textBalance}>{`Rp${(stateUser.balance).toLocaleString()} Available`}</Text>
               <Controller
                  control={control}
                  render={({ onChange, onBlur, value }) => (
                     <Input
                        leftIcon={
                           <Icon
                              name="edit-2"
                              size={20}
                              color={color.input}
                           />
                        }
                        placeholder="Add some notes"
                        placeholderTextColor={color.input}
                        style={styles.notes}
                        containerStyle={styles.notesContainer}
                        onBlur={onBlur}
                        onChangeText={text => onChange(text)}
                        value={value}
                     />
                  )}
                  name="notes"
                  rules={{ required: false }}
                  defaultValue={null}
               />
            </View>
            <Button
               title="Continue"
               buttonStyle={styles.buttonSubmit}
               titleStyle={styles.buttonSubmitText}
               // onPress={()=>navigation.navigate('TransferConfirmation')}
               onPress={handleSubmit(onSubmit)}
            />
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: color.backgroud,
      flex: 1,
   },
   containerHeader: {
      backgroundColor: color.primary,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
   },
   containerProfile: {
      backgroundColor: color.white,
      // marginTop: '5%',
      marginBottom: '5%',
      marginHorizontal: '4%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4%',
      borderRadius: 10,
      elevation: 1,
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
   containerMainContent: {
      flex: 1,
      justifyContent: 'space-between',
   },
   inpuBalance: {
      marginTop: '5%',
      fontSize: 56,
      color: color.primary,
      alignSelf: 'center',
   },
   textBalance: {
      marginTop: '5%',
      color: '#7C7895',
      fontSize: 16,
      alignSelf: 'center',
   },
   notesContainer: {
      marginTop: '10%',
   },
   notes: {
      fontSize: 16,
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
   },
});

export default AmountInput;
