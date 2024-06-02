import { useRoute } from "@react-navigation/native";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Toast from "react-native-toast-message";
import axios from "axios";

const VerifyOTP = ({ navigation }) => {
  const route = useRoute();
  const { code, email } = route.params;
  const [seconds, setSeconds] = useState(30);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }

    if (!value && index > 0 && newOtp[index - 1] !== "") {
      inputs.current[index - 1].focus();
    }
  };


  const handleVerifyOTP = async () => {
    try {
      setLoading(true);
      const otpString = otp.join("");
      const otpIntegers = parseInt(otpString, 10);
  
      const response = await axios.post('http://192.168.50.171:3699/api/users/verifyOTP', { otp: otpIntegers });
  
      if (response.status === 200) { 
        navigation.navigate("ResetPassword", { email });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2:'OTP is incorrect',
          topOffset: 10,
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred during OTP verification',
        topOffset: 10,
      });
    } finally {
      setLoading(false);
    }
  };
  
  
  

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    {loading && <ActivityIndicator style={styles.loader} size={70} color={"#4F718A"} />}
      <Text style={styles.verifyOTPTitle}>Please check your email</Text>
      <Text style={styles.verifyOTPSubTitle}>
        We've sent a code to {code} {" "}
        <Text style={styles.verifyOTPEmail}>{email}</Text>
      </Text>
      <Toast/>
      <View style={styles.inputContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs.current[index] = input)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleInputChange(index, text)}
          />
        ))}
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.verifybtn}
        onPress={handleVerifyOTP}
      >
        <Text style={styles.verifytext}>Verify</Text>
      </TouchableOpacity>
      <View style={styles.sendCodeContainer}>
        <TouchableOpacity
          style={styles.sendCodeButton}
          onPress={() => setSeconds(30)}
        >
          <Text style={styles.sendCodeButtonText}>Send code again</Text>
        </TouchableOpacity>
        <Text style={styles.timerText}>{`00:${
          seconds < 10 ? `0${seconds}` : seconds
        }`}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "left",
    backgroundColor: "#f5f5f5",
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1, width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.6)'
  },
  verifyOTPTitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
    paddingTop: 80,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  verifyOTPSubTitle: {
    fontSize: 16,
    textAlign: "left",
    paddingBottom: 15,
    paddingHorizontal: 20,
    fontWeight: "400",
    color: "rgba(0, 0, 0, 0.5)",
  },
  verifyOTPEmail: {
    fontWeight: "600",
    color: "#000000",
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
    width: "90%",
  },
  input: {
    width: 70,
    height: 70,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 6,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700",
  },
  verifybtn: {
    height: 55,
    backgroundColor: "#4F718A",
    borderRadius: 6,
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  verifytext: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },
  sendCodeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  sendCodeButton: {
    padding: 10,
    color: "#000000",
  },
  sendCodeButtonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.6)",
  },
  timerText: {
    fontSize: 17,
    color: "rgba(0,0,0,0.5)",
  },
});

export default VerifyOTP;
