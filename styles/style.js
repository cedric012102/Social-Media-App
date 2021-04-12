import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
 container: {
     width: '100%',
   
 },
 centerAlign: {
     justifyContent: 'center',
     alignItems: 'center',
 },

 inputContainer: {
     backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 20,
    marginTop: -height / 1.6,
    borderRadius: 20,
    width: width / 1.1,
    height: height / 2.1,
    
 },

 input: {
     textAlign: 'center',
     fontSize: 18,
     borderWidth: 1.5,
     borderColor: '#aaa',
     borderRadius: 30,
     width: width / 1.2,
     padding: 10,
     marginVertical: 15,
 },

 logo: { 
        width: width / 1,
        height: height / 3,

 },


    signInButtonText: {
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    signInButtonContainer: {
        justifyContent: 'center',
        padding: 10,
    },

});

export { styles };