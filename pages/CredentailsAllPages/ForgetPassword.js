import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import Toast from "react-native-toast-message";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = async () => {
    try {
      if (!email) {
        Toast.show({
          type: 'error',
          text1: 'Empty field',
          text2: 'Please enter the email to search',
          topOffset: 20,
        });
        return;
      }
      const response = await axios.post(`http://192.168.50.171:3699/api/users/resetPassword/${email}`);

      if (response.status === 200) {
         navigation.navigate("VerifyOTP", { code: response.data.code, email, });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.response ? error.response.data.message : error.message,
        topOffset: 20,
      });
    }
  };

  const handleLogin = () => {
    navigation.reset({ index: 0, routes: [{ name: "Login" }] });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toast />
      <Text style={styles.forgetTitle}>Forgot password?</Text>
      <Text style={styles.forgetSubTitle}>
        Don't worry! it happens. Please enter the email
        associated with your account.
      </Text>
      <View style={styles.emailview}>
        <Text style={styles.email}>Email address</Text>
        <TextInput
          style={styles.enteremail}
          value={email}
          onChangeText={setEmail}
          placeholder="Email your email address"
          autoCapitalize='none'
        />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.sendCodebtn}
        onPress={handleForgetPassword}
      >
        <Text style={styles.sendCodetext}>Send code</Text>
      </TouchableOpacity>
      <View style={styles.rememberBtnContainer}>
        <Text style={styles.rememberText}>Remember password?</Text>
        <TouchableOpacity onPress={handleLogin} activeOpacity={1}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f5f5f5",
  },
  forgetTitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
    paddingTop: 60,
    paddingBottom: 6,
    paddingHorizontal: 20,
    zIndex:-100,
  },
  forgetSubTitle: {
    fontSize: 16,
    textAlign: "left",
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontWeight: "400",
    color: "rgba(0, 0, 0, 0.5)",
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
  sendCodebtn: {
    height: 55,
    backgroundColor: "#4F718A",
    borderRadius: 6,
    marginHorizontal: 20,
    marginVertical: 32,
    width: "91%",
  },
  sendCodetext: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 14,
    color: "#ffffff",
  },
  rememberBtnContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 20,
    width: "100%",
  },
  rememberText: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.7)",
  },
  loginText: {
    fontSize: 14,
    color: "#000000",
    marginLeft: 5,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default ForgetPassword;
