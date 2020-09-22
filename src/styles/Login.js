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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   appText: {
      color: color.primary,
      fontSize: 26,
   },
   containerBottom: {
      flex: 5,
      backgroundColor: color.white,
      elevation: 3,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      paddingHorizontal: '8%',
      justifyContent: 'space-evenly',
      // justifyContent: 'space-around',
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
      borderBottomWidth: 1.5,
      borderColor: color.borderInput,
   },
   buttonLogin: {
      width: '100%',
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
});

export default styles;