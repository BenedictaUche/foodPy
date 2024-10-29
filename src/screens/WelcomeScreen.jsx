import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      width: '100%',
    },
    title: {
      color: '#ffffff',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'left',
      marginBottom: 10,
    },
    subtitle: {
      color: '#cccccc',
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 30,
    },
    loginButton: {
      backgroundColor: '#FFD700',
      borderRadius: 25,
      width: '80%',
      padding: 15,
      alignItems: 'center',
      marginBottom: 10,
    },
    loginText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
    },
    signupButton: {
      borderColor: '#FFFFFF',
      borderWidth: 2,
      borderRadius: 25,
      width: '80%',
      padding: 15,
      alignItems: 'center',
    },
    signupText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });


export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/Welcome.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Get tasty recipes the easy way</Text>
        <Text style={styles.subtitle}>Discover over a thousand recipes from different parts of the world</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
