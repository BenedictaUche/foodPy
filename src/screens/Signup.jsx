import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  foodPlate: {
    // width: 100,
    // height: 100,
    position: "absolute",
    top: 120,
    right: 0,
    zIndex: 999
  },
  authBox: {
    width: "80%",
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 18,
  },
  headerText: {
    fontSize: 25,
    color: "#888888",
  },
  activeTab: {
    color: "#000",
    fontWeight: "bold",
    borderBottomColor: "#FFD700",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#888888",
    marginBottom: 20,
    paddingVertical: 10,
  },
  signupButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    width: "50%",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 10
  },
  signupText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18
  },
});

export default function Signup({ navigation }) {
  const slideAnim = useRef(new Animated.Value(-200)).current; // Initial position off-screen to the top-right

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/food-plate.png')}
        style={[styles.foodPlate, { transform: [{ translateX: slideAnim }] }]}
      />
      <View style={styles.authBox}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.headerText}>Sign in</Text>
          </TouchableOpacity>
          <Text style={[styles.headerText, styles.activeTab]}>Sign up</Text>
        </View>
        <TextInput placeholder="Full Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Phone Number" style={styles.input} />
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      </View>
      <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
