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

const PasswordChanged = ({ navigation }) => {
  const handleLogin = () => {
    // Reset navigation stack to Login screen
    navigation.reset({ index: 0, routes: [{ name: "Login" }] });
  };
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons
        name={"checkbox-marked-circle"}
        size={120}
        color="#4F718A"
      />
      <Text style={styles.passwordChangedTitle}>Password changed</Text>
      <Text style={styles.passwordChangedSubTitle}>
        Your password has been changed succesfully
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.passwordChangedbtn}
        onPress={handleLogin}
      >
        <Text style={styles.passwordChangedtext}>Back to login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

PasswordChanged.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  passwordChangedTitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  passwordChangedSubTitle: {
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 15,
    paddingHorizontal: 30,
    fontWeight: "400",
    color: "rgba(0, 0, 0, 0.5)",
  },
  passwordChangedbtn: {
    width: "85%",
    height: 55,
    backgroundColor: "#4F718A",
    borderRadius: 6,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  passwordChangedtext: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: Platform.OS === "ios" ? 17 : 14,
    color: "#ffffff",
  },
});

export default PasswordChanged;
