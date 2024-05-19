import React, { useState } from "react";
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
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";
import img from "../assets/airplane.png";

export default function Login({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigation.navigate("Dashboard");
  };
  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.image} />
      </View>
      <Text style={styles.login}>Log In</Text>
      <View style={styles.emailview}>
        <Text style={styles.email}>Email address or number</Text>
        <TextInput
          style={styles.enteremail}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email or number"
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
      <TouchableOpacity activeOpacity={1} style={styles.forgetpasswordbtn} onPress={handleForgetPassword}>
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
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS==="ios"? 60:120,
    marginBottom: 60,
    width:'100%'
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
    fontFamily: "Poppins",
    color: "#000000",
  },
  emailview: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    width:'100%',
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
    width:'100%',
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
  forgetpasswordbtn:{
    width:'100%'
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
    width:'89%',
  },
  logintext: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: Platform.OS==="ios"? 17:14,
    color: "#ffffff",
  },
  registerBtnContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 20,
    width:'100%',
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

Login.navigationOptions = {
  headerShown: false,
};