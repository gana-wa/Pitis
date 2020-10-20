import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Switch, Pressable, ToastAndroid, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../utils/environment';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { logOut } from '../redux/actions/auth';
import { editUser } from '../redux/actions/user';
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios';

import * as color from '../styles/colorStyles';

// import defaultProfile from '../assets/img/default_profile.png';

const Profile = ({ navigation }) => {

   const handleImgPick = () => {
      const options = {
         title: 'Select Picture',
         // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
         storageOptions: {
            skipBackup: true,
            path: 'images',
         },
         noData: true,
      };

      ImagePicker.showImagePicker(options, (response) => {
         console.log('Response = ', response);

         if (response.didCancel) {
            console.log('User cancelled image picker');
         } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
         } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
         } else {
            const source = response;
            if (response.fileSize > (2 * 1000 * 1000)) {
               Alert.alert(
                  'File Size is too Large',
                  'Please Select Photo Below 2MB',
                  [
                     {
                        text: 'Understand',
                        onPress: () => console.log('Ok pressed'),
                     },
                  ],
                  { cancelable: false }
               );
            } else {
               setFormResponse({ ...formRespone, photo: source });
            }
         }
      });
   };

   const { user_id, first_name, last_name, phone, photo } = useSelector(
      (state) => state.auth.user,
   );
   const { msg } = useSelector(
      (state) => state.auth,
   );
   const dispatch = useDispatch();

   const [isEnabled, setIsEnabled] = useState(false);
   const [formRespone, setFormResponse] = useState({
      first_name: first_name,
      photo: '',
   });
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

   const handleNavigation = (to) => {
      navigation.navigate(to);
   };

   const handleSubmit = () => {
      // console.log(formRespone);
      let formData = new FormData();
      formData.append('photo', {
         uri: `file://${formRespone.photo.path}`,
         type: formRespone.photo.type,
         name: formRespone.photo.fileName,
         size: formRespone.photo.fileSize,
      });

      const configHeader = {
         headers: {
            'content-type': 'multipart/form-data',
            contentType: false,
            mimeType: 'multipart/form-data',
            'cache-control': 'no-cache',
            accept: 'application/json',
            // "x-access-token":
            // "Bearer token",
         },
      };

      dispatch(editUser(user_id, formData, configHeader));
   };

   useEffect(() => {
      if (msg !== '...Loading' && msg !== '') {
         ToastAndroid.show(msg, ToastAndroid.SHORT);
      }
   }, [msg]);

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
            {formRespone.photo.length < 1 ? (
               photo === null ? (
                  <View style={styles.profileImgBlank}>
                     <Icon
                        name="user"
                        size={50}
                        color={color.primary}
                     />
                  </View>
               ) : (
                     <Image source={{ uri: profilImg }} style={styles.profileImg} />
                  )
            ) : (
                  <Image source={formRespone.photo} style={styles.profileImg} />
               )}

            {/* <Image source={photo === null ? defaultProfile : ({ uri: profilImg })} style={styles.profileImg} /> */}
            {formRespone.photo.length < 1 ? (
               <Pressable style={styles.editButton} onPress={() => handleImgPick()}>
                  <Icon
                     name="edit-2"
                     size={14}
                     color={color.subtitle}
                  />
                  <Text style={styles.editButtonText}>Edit</Text>
               </Pressable>
            ) : (
                  <Pressable style={styles.editButton} onPress={handleSubmit}>
                     <Icon
                        name="edit-2"
                        size={14}
                        color={color.subtitle}
                     />
                     <Text style={styles.editButtonText}>Save</Text>
                  </Pressable>
               )}

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
