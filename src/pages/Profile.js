import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Switch, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../utils/environment';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { logOut } from '../redux/actions/auth';

import * as color from '../styles/colorStyles';

// import defaultProfile from '../assets/img/default_profile.png';

const Profile = ({ navigation }) => {
   const { username, first_name, last_name, phone, photo } = useSelector(
      (state) => state.auth.user,
   );
   const dispatch = useDispatch();

   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

   const handleNavigation = (to) => {
      navigation.navigate(to);
   };

   const handleLogout = () => {
      dispatch(logOut());
      navigation.reset({
         index: 0,
         routes: [{ name: 'Login' }],
      });
   };

   const profilImg = `${API_URL}${photo}`;
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.containerTop}>
            {photo === null ? (
               <View style={styles.profileImgBlank}>
                  <Icon
                     name="user"
                     size={50}
                     color={color.primary}
                  />
               </View>
            ) : (
                  <Image source={{ uri: profilImg }} style={styles.profileImg} />
               )}
            {/* <Image source={photo === null ? defaultProfile : ({ uri: profilImg })} style={styles.profileImg} /> */}
            <Pressable style={styles.editButton}>
               <Icon
                  name="edit-2"
                  size={14}
                  color={color.subtitle}
               />
               <Text style={styles.editButtonText}>Edit</Text>
            </Pressable>
            {last_name === null ? (
               <Text style={styles.textName}>{first_name}</Text>
            ) : (
                  <Text style={styles.textName}>{`${first_name} ${last_name}`}</Text>
               )
            }
            {phone === null ? (
               <Text style={styles.textNoPhone}>Phone number not set yet</Text>
            ) : (
                  <Text style={styles.textPhone}>{phone}</Text>
               )
            }
         </View>
         <View style={styles.containerAllButton}>
            <TouchableOpacity style={styles.buttonItem} onPress={() => handleNavigation('PersonalInfo')}>
               <>
                  <Text style={styles.textButton}>Personal Information</Text>
                  <Icon
                     name="arrow-right"
                     size={25}
                     color={color.subtitle}
                  />
               </>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonItem} onPress={() => handleNavigation('ChangePassword')}>
               <>
                  <Text style={styles.textButton}>Change Password</Text>
                  <Icon
                     name="arrow-right"
                     size={25}
                     color={color.subtitle}
                  />
               </>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonItem}>
               <>
                  <Text style={styles.textButton}>Change PIN</Text>
                  <Icon
                     name="arrow-right"
                     size={25}
                     color={color.subtitle}
                  />
               </>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonItem}>
               <>
                  <Text style={styles.textButton}>Notification</Text>
                  <Switch
                     trackColor={{ false: color.disabled, true: color.primary }}
                     thumbColor={isEnabled ? color.white : color.white}
                     ios_backgroundColor="#3e3e3e"
                     onValueChange={toggleSwitch}
                     value={isEnabled}
                  />
               </>
            </TouchableOpacity>
            <Button
               title="Logout"
               buttonStyle={styles.buttonLogout}
               titleStyle={{ ...styles.textButton, color: color.error }}
               onPress={handleLogout}
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
   containerTop: {
      alignItems: 'center',
   },
   profileImg: {
      width: 80,
      height: 80,
      borderRadius: 10,
   },
   profileImgBlank: {
      width: 80,
      height: 80,
      borderRadius: 10,
      backgroundColor: '#EBEEF2',
      justifyContent: 'center',
      alignItems: 'center',
   },
   editButton: {
      marginTop: '4%',
      flexDirection: 'row',
      alignItems: 'center',
      width: 50,
      justifyContent: 'space-between',
   },
   editButtonText: {
      color: color.subtitle,
      fontSize: 16,
   },
   textName: {
      marginTop: '4%',
      fontWeight: '700',
      fontSize: 24,
      color: color.dark,
   },
   textPhone: {
      marginTop: '4%',
      fontWeight: '400',
      fontSize: 16,
      color: color.subtitle,
   },
   textNoPhone: {
      marginTop: '4%',
      fontWeight: '400',
      fontSize: 16,
      color: color.subtitle,
      fontStyle: 'italic',
   },
   containerAllButton: {
      marginVertical: '5%',
   },
   buttonItem: {
      backgroundColor: color.white,
      elevation: 3,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '5%',
      marginHorizontal: '4%',
      marginVertical: '3%',
      borderRadius: 10,
      height: 58,
   },
   textButton: {
      fontSize: 16,
      fontWeight: '700',
      color: color.dark,
   },
   buttonLogout: {
      backgroundColor: color.white,
      elevation: 3,
      marginHorizontal: '4%',
      marginVertical: '3%',
      borderRadius: 10,
      height: 58,
   },
});

export default Profile;
