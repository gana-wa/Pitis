import { StyleSheet, Dimensions } from 'react-native';
import * as color from './colorStyles';

const { height } = Dimensions.get('screen');
const styles = StyleSheet.create({
   container: {
      flex: 1,
      // height: height,
      backgroundColor: color.backgroud,
   },
   containerTop: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
   },
   appText: {
      color: color.primary,
      fontSize: 26,
   },
   containerBottom: {
      flex: 8,
      backgroundColor: color.white,
      elevation: 3,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      paddingHorizontal: '8%',
      // justifyContent: 'space-evenly',
      justifyContent: 'space-around',
   },
   loginText: {
      color: color.dark,
      fontSize: 24,
      textAlign: 'center',
      fontWeight: '700',
   },
   loginInfoText: {
      color: color.subtitle,
      fontSize: 16,
      textAlign: 'center',
   },
   input: {
      fontSize: 16,
      borderColor: color.input,
   },
   textForgotPass: {
      textAlign: 'right',
      color: 'rgba(58, 61, 66, 0.8)',
      marginTop: 15,
   },
   buttonLogin: {
      width: '100%',
      alignSelf: 'center',
      backgroundColor: color.primary,
      height: 57,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
   },
   buttonLoginText: {
      color: color.white,
      fontSize: 18,
      fontWeight: '700',
   },
   buttonLoginDisabled: {
      width: '100%',
      alignSelf: 'center',
      backgroundColor: color.disabled,
      height: 57,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
   },
   buttonLoginTextDisabled: {
      color: color.disabledText,
      fontSize: 18,
      fontWeight: '700',
   },
   textSignUpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
   },
   textSignUp: {
      fontSize: 16,
   },
   textSignUpLink: {
      color: color.primary,
      fontSize: 16,
   },
   // pin
   pinContainer: {
      alignSelf: 'center',
   },
   pinCell: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: color.input,
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
});

export default styles;
