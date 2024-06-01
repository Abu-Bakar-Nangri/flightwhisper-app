import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const ResetPassword = ({ navigation }) => {
  const route = useRoute();
  const {email} = route.params;
  const [showNewPassword, setNewShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const toggleShowNewPassword = () => {
    setNewShowPassword(!showNewPassword);
  };
  const toggleShowConfirmPassword = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const handleResetPassword = async() => {
      try {
  
        Toast.show({
          type: 'success',
          text1: 'Updating Request',
          text2: 'Data is sending for update',
          position: "bottom",
        });
  
        const response = await axios.post(`http://192.168.50.171:3699/api/users/updateUserPassword/${email}`, {
          password
        });
  
        if (response.status === 200) {
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Update was successful',
            position: "bottom",
          });
          setUpdatedData(response.data)
        } else {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Update failed',
            position: "bottom",
          });
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'An error occurred during the update',
          position: "bottom",
        });
      } finally {
        setModalVisible(false);
      }

    navigation.navigate("PasswordChanged");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.resetTitle}>Reset password</Text>
      <Text style={styles.resetSubTitle}>
        Please type something you'll remember
      </Text>
      <View style={styles.passwordview}>
        <Text style={styles.password}>New password</Text>
        <View style={styles.passwordInputview}>
          <TextInput
            secureTextEntry={!showNewPassword}
            style={styles.enterpassword}
            placeholder="must be 8 characters"
          />
          <MaterialCommunityIcons
            name={showNewPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowNewPassword}
          />
        </View>
      </View>
      <View style={styles.passwordview}>
        <Text style={styles.password}>Confirm new password</Text>
        <View style={styles.passwordInputview}>
          <TextInput
            secureTextEntry={!showConfirmPassword}
            style={styles.enterpassword}
            placeholder="repeat password"
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
        style={styles.resetbtn}
        onPress={handleResetPassword}
      >
        <Text style={styles.resettext}>Reset password</Text>
      </TouchableOpacity>
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
  iconContainer: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 40,
  },
  backIcon: {
    padding: 2,
  },
  resetTitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
    paddingTop: 60,
    paddingBottom: 6,
    paddingHorizontal: 20,
  },
  resetSubTitle: {
    fontSize: 16,
    textAlign: "left",
    paddingBottom: 12,
    paddingHorizontal: 20,
    fontWeight: "400",
    color: "rgba(0, 0, 0, 0.5)",
  },
  passwordview: {
    paddingHorizontal: 20,
    paddingVertical: 3,
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
    width: "100%",
  },

  icon: {
    marginRight: 20, // Adjust margin to create space between text and icon
    marginLeft: -40,
  },
  enterpassword: {
    flex: 1, // Allow the TextInput to grow to take available space
    borderColor: "#D8DADC",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    height: 55,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  resetbtn: {
    height: 55,
    backgroundColor: "#4F718A",
    borderRadius: 6,
    marginHorizontal: 20,
    marginVertical: 32,
    width: "90%",
  },
  resettext: {
    fontSize: Platform.OS === "ios" ? 18 : 17,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: Platform.OS === "ios" ? 17 : 14,
    color: "#ffffff",
  },
});

export default ResetPassword;
