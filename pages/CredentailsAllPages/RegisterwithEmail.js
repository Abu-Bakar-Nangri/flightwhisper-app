import React, { useState, useEffect } from "react";
import axios from "axios";
import Toast from "react-native-toast-message";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator
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
  const [loading, setLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = async () => {
    // Basic form validation
    if (!name || !email || !phoneNo || !password || !confirmpassword) {
      Toast.show({
        type: 'error',
        text1: 'Empty fields',
        text2: 'Please enter all fields',
        topOffset: 20,
      });
      return;
    }

    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid email',
        text2: 'Please enter a valid email address',
        topOffset: 20,
      });
      return;
    }

    // Validate phone number format (you can customize this based on your requirements)
    const phoneRegex = /^03\d{9}$/;
    if (!phoneRegex.test(phoneNo)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid phone number',
        text2: 'Phone number should start with 03 and have 11 digits',
        topOffset: 20,
      });
      return;
    }

    // Validate password length and match rwith confirm password
    if (password.length < 8) {
      Toast.show({
        type: 'error',
        text1: 'Weak password',
        text2: 'Password should be at least 8 characters long',
        topOffset: 20,
      });
      return;
    }

    if (password !== confirmpassword) {
      Toast.show({
        type: 'error',
        text1: 'Password Error',
        text2: 'Passwords do not match',
        topOffset: 20,
      });
      return;
    }

    try {
      setLoading(true);
      const registrationData = {
        name,
        email,
        phoneNo,
        password,
      };

      const response = await axios.post(
        'http://192.168.1.83:3699/api/users/register',
        registrationData
      );

      if (response.status === 201) {
        Toast.show({
          type: 'success',
          text1: 'Registration successful',
          text2: 'You can now login with your credentials',
          topOffset: 20,
        });
        navigation.navigate('Login');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Registration failed',
          text2: response.data.message || 'Unknown error',
          topOffset: 20,
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error occurred while registering',
        text2: error.response?.data?.message || error.message,
        topOffset: 20,
      });
    } finally {
      setLoading(false);
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
      {loading && <ActivityIndicator style={styles.loader} size={70} color={"#4F718A"} />}
      <Toast  />
        <Text style={styles.login}>Register with Email</Text>
        <View style={styles.emailview}>
          <Text style={styles.email}>Name</Text>
          <TextInput
            style={styles.enteremail}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter name"
          />
        </View>

        <View style={styles.emailview}>
          <Text style={styles.email}>Email address</Text>
          <TextInput
            style={styles.enteremail}
            value={email}
            keyboardType="email-address"
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
             keyboardType="phone-pad"
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
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1, width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.6)'
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
    color: "#000000",
    zIndex:-100,
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
