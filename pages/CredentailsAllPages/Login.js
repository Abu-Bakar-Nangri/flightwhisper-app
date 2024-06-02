import React, { useState, useEffect, useRef, useContext } from "react";
import axios from 'axios';

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
  ActivityIndicator
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import img from "../../assets/airplane.png";
import Toast from "react-native-toast-message";
import { UserContext } from "../Context/UserContext";

export default function Login({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {setUser} = useContext(UserContext); 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Empty fields',
        text2: 'Please enter both email and password',
      });
      return;
    }
    try {
      setLoading(true);
  
      const response = await axios.post("http://192.168.50.171:3699/api/users/login", {
        email,
        password,
      });
  
      if (response.status === 201) { // Update response status check
        setUser(response.data);
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'Welcome to your dashboard',
        });
        navigation.navigate("Dashboard");
        setEmail('');
        setPassword('');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login failed',
          text2: response.data?.message || "Unknown error",
        });
      }
    } catch (error) {
      if (error.response) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error.response.data?.message || "Unknown server error",
        });
      } else if (error.request) {
        Toast.show({
          type: 'error',
          text1: 'Network error',
          text2: 'No response from server. Please try again later.',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'An error occurred while logging in',
        });
      }
    } finally{
      setLoading(false);
    }
  };

  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.container}>
    {loading && <ActivityIndicator style={styles.loader} size={70} color={"#4F718A"} />}
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.image} />
      </View>
      <Toast ref={(ref)=> useRef(ref)}/>
      <Text style={styles.login}>Log In</Text>
      <View style={styles.emailview}>
      
        <Text style={styles.email}>Email address or number</Text>
        <TextInput
          style={styles.enteremail}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email or number"
          autoCapitalize="none"
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
      <TouchableOpacity
        activeOpacity={1}
        style={styles.forgetpasswordbtn}
        onPress={handleForgetPassword}
      >
        <Text style={styles.forgetpassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.loginbtn}
        onPress={handleLogin}
      >
        <Text style={styles.logintext}>Login in</Text>
      </TouchableOpacity>
      <View style={styles.registerBtnContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity activeOpacity={1} onPress={handleRegister}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "top",
    justifyContent: "left",
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 60 : 120,
    marginBottom: 60,
    width: "100%",
  },
  image: {
    width: 300,
    height: 380,
  },
  login: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 4,
    paddingHorizontal: 20,
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

Login.navigationOptions = {
  headerShown: false,
};
