import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
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
    top: 180,
    right: 0,
    zIndex: 999,
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
  },
  header: {
    flexDirection: "row",
    //   justifyContent: 'space-between',
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "#888888",
  },
  forgotPassword: {
    color: "#FFD700",
  },
  loginButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 25,
  },
  loginText: {
    color: "#000000",
    fontWeight: "bold",
  },
});

export default function Login({ navigation }) {
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
        source={require("../../assets/food-plate.png")}
        style={[styles.foodPlate, { transform: [{ translateX: slideAnim }] }]}
      />
      <View style={styles.authBox}>
        <View style={styles.header}>
          <Text style={[styles.headerText, styles.activeTab]}>Sign in</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.headerText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <View style={styles.row}>
          <View style={styles.checkboxRow}>
            <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
            <Text>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
