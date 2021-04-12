import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Easing, Dimensions, CheckBox, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { Easing } from 'react-native-reanimated';
import styles from '../screens/styles/LogInScreenStyle';





const { height, width } = Dimensions.get('screen');


//   const [isLoading, setIsLoading] = React.useState(true);
//   const [userToken, setUserToken] = React.useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, []);


// if (isLoading) {
//   return(
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <ActivityIndicator size="large" />
//     </View>
//   );
// }




export default class LogInScreen extends Component{
  
  state = {
    screenAnimation: new Animated.Value(height),
    inputAnimation: new Animated.Value(0),
  };

  AnimateContainer = () => {
    Animated.timing(this.state.screenAnimation, {
      toValue: height / 3,
      duration: 1000,
      easing: Easing.elastic(1.3),
    }).start();
  };

  AnimateInput = () => {
    Animated.timing(this.state.inputAnimation, {
      toValue: -height / 5,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  reverseAnimateInput = () => {
    Animated.timing(this.state.inputAnimation, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };
 
  componentDidMount() {
   this.AnimateContainer();
 }

  Animatedcontainer = {
    height: this.state.screenAnimation,
  };

  AnimatedInput = {
    transform: [
      {
        translateY: this.state.inputAnimation,
      }
    ]
  }


  
  render(){
    return(
      
      <Animated.View style={[styles.container, this.Animatedcontainer]}>
      <LinearGradient
      style={styles.centerAlign}
      colors={['#ff00cc', '#333399']}
                 
      >
        <Image source={require("../../assets/elephants.png")} 
        style={styles.logo} />
           </LinearGradient>
           <View style={[styles.centerAlign, { 
             marginTop: 10, 
             backgroundColor:'rgba(200, 200, 200, 0.9)',
             height: height, 
             }, ]}>
        <Animated.View style={[styles.inputContainer, this.AnimatedInput]}>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>SIGN IN</Text>
          
          <View style={{ marginTop: 30, marginBottom: 10 }}>
             <TextInput onFocus={() => this.AnimateInput()}
             placeholder="username" 
             style={styles.input} 
             />
             <TextInput 
             secureTextEntry={true}
             placeholder="password" style={styles.input} />
          </View>
          <View style={{ flexDirection: 'row'}}>
           <View>
            <CheckBox style={{ width: 20, height: 20, borderColor: '#aaa' }} />
            <Text style={{ marginLeft: 8 }}>Remember Password</Text>
            </View>
            <View style={{ flex: 0.5, alignItems: 'flex-end', }}>
            <TouchableOpacity>
              <Text style={{ color: '#c08' }}>Forgot Password</Text>
            </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity>
              <LinearGradient style={{ width: 100, padding: 15, borderRadius: 20 }} colors={['ff00cc', '#333399']}>
              <Text style={styles.signInButtonText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'stretch', marginVertical: 100, flexDirection: 'row' }}>
            <Text style={{ color: '#888'}}>Don't have an account?</Text>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>

   
      </Animated.View>
    );
    
  }
}






