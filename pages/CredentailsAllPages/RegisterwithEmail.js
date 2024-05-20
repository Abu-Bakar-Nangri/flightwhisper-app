import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import img from "../../assets/airplane.png";

export default function RegisterwithEmail({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Please enter both email and password");
        return;
      }
      // await AsyncStorage.setItem('email', email);
      // await AsyncStorage.setItem('password', password);
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error occurred while registering");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}></View>
        <Text style={styles.login}>Register with Email</Text>
        <View style={styles.emailview}>
          <Text style={styles.email}>Email address</Text>
          <TextInput
            style={styles.enteremail}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
          />
        </View>
        <View style={styles.passwordview}>
          <Text style={styles.password}>Password</Text>
          <View style={styles.passwordInputview}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.enterpassword}
              placeholder="Enter password"
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>
        </View>
        <View style={styles.passwordview}>
          <Text style={styles.password}>Confirm Password</Text>
          <View style={styles.passwordInputview}>
            <TextInput
              value={confirmpassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              style={styles.enterpassword}
              placeholder="Enter confirm password"
            />
            <MaterialCommunityIcons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              style={styles.icon}
              onPress={toggleShowConfirmPassword}
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={1} style={styles.loginbtn}>
          <Text style={styles.logintext}>Register</Text>
        </TouchableOpacity>
        <View style={styles.registerBtnContainer}>
          <Text style={styles.registerText}>Already have an account?</Text>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.signUpText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#f5f5f5",
    width: "100%",
  },
  imageContainer: {
    marginVertical: 50,
  },
  login: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 4,
    paddingHorizontal: 20,
    fontFamily: "Poppins",
    color: "#000000",
  },
  emailview: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    width: "100%",
  },
  email: {
    fontSize: 14,
    paddingVertical: 6,
    fontFamily: "Inter",
    color: "#000000",
  },
  enteremail: {
    borderColor: "#D8DADC",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    height: 55,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  passwordview: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    width: "100%",
  },
  password: {
    fontSize: 14,
    paddingVertical: 6,
    fontFamily: "Inter",
    color: "#000000",
  },
  passwordInputview: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {
    marginRight: 20,
    marginLeft: -40,
  },
  enterpassword: {
    flex: 1,
    borderColor: "#D8DADC",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    height: 55,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  forgetpasswordbtn: {
    width: "100%",
  },
  forgetpassword: {
    textAlign: "right",
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 20,
  },
  loginbtn: {
    height: 55,
    backgroundColor: "#4F718A",
    borderRadius: 6,
    marginHorizontal: 20,
    marginVertical: 20,
    width: "89%",
  },
  logintext: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: Platform.OS === "ios" ? 17 : 14,
    color: "#ffffff",
  },
  registerBtnContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 20,
    width: "100%",
  },
  registerText: {
    fontFamily: "Inter",
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.7)",
  },
  signUpText: {
    fontFamily: "Inter",
    fontSize: 14,
    color: "#000000",
    marginLeft: 5,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
