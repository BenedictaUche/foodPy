import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
  signupButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 25,
  },
  signupText: {
    color: "#000000",
    fontWeight: "bold",
  },
});

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.authBox}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.headerText}>Sign in</Text>
          </TouchableOpacity>
          <Text style={[styles.headerText, styles.activeTab]}>Sign up</Text>
        </View>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
