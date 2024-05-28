import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

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

export default function RegisterwithEmail({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [name, setName] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = async () => {
    try {
      if (!email || !password || !confirmpassword || !name || !phoneNo) {
        Alert.alert("Please enter all fields");
        return;
      }

      if (password !== confirmpassword) {
        Alert.alert("Passwords do not match");
        return;
      }
      const registrationData = {
        name,
        email,
        phoneNo,
        password,
      };

      const response = await axios.post(
        "http://192.168.1.20:3699/api/users/register",
        registrationData
      );

      if (response.status === 201) {
        navigation.navigate("Login");
      } else {
        Alert.alert(
          "Registration failed",
          response.data.message || "Unknown error"
        );
      }
    } catch (error) {
      Alert.alert(
        "Error occurred while registering",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.login}>Register with Email</Text>
        <View style={styles.emailview}>
          <Text style={styles.email}>Name</Text>
          <TextInput
            style={styles.enteremail}
            value={name}
            onChangeText={(text) => setName(text.trim())}
            placeholder="Enter name"
          />
        </View>

        <View style={styles.emailview}>
          <Text style={styles.email}>Email address</Text>
          <TextInput
            style={styles.enteremail}
            value={email}
            onChangeText={(text) => setEmail(text.trim().toLowerCase())}
            placeholder="Enter email"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.emailview}>
          <Text style={styles.email}>Number</Text>
          <TextInput
            style={styles.enteremail}
            value={phoneNo}
            onChangeText={(text) => setPhoneNo(text.trim())}
            placeholder="Enter phone number"
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
        <TouchableOpacity
          activeOpacity={1}
          style={styles.loginbtn}
          onPress={handleRegister}
        >
          <Text style={styles.logintext}>Register</Text>
        </TouchableOpacity>
        <View style={styles.registerBtnContainer}>
          <Text style={styles.registerText}>Already have an account?</Text>
          <TouchableOpacity activeOpacity={1} onPress={handleLogin}>
            <Text style={styles.signUpText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
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
    paddingTop: 30,
    paddingVertical: 4,
    paddingHorizontal: 20,
    fontFamily: "Poppins",
    color: "#000000",
  },
  emailview: {
    paddingHorizontal: 20,
    paddingVertical: 2,
    width: "100%",
  },
  email: {
    fontSize: 14,
    paddingVertical: 3,
    color: "#000000",
    fontWeight: "500",
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
    paddingVertical: 2,
    width: "100%",
  },
  password: {
    fontSize: 14,
    paddingVertical: 3,
    fontWeight: "500",
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
    paddingTop: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
  },
  registerText: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.7)",
  },
  signUpText: {
    fontSize: 14,
    color: "#000000",
    marginLeft: 5,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});