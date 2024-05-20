import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Ticket = ({ navigation }) => {
  const handleTicket = () => {
    navigation.navigate("Ticket");
  };
  const handleHome = () => {
    navigation.navigate("Dashboard");
  };
  const handleProfile = () => {
    navigation.navigate("Profile");
  };
  const handleHistory = () => {
    navigation.navigate("History");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Ticket</Text>
      </ScrollView>

      <View style={styles.footerContainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
          onPress={handleHome}
        >
          <MaterialCommunityIcons name={"home"} size={26} color="gray" />
          <Text style={styles.otherIconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
          onPress={handleTicket}
        >
          <MaterialCommunityIcons name={"ticket"} size={26} color="#4F718A" />
          <Text style={styles.homeIconText}>Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
          onPress={handleHistory}
        >
          <MaterialCommunityIcons name={"history"} size={26} color="gray" />
          <Text style={styles.otherIconText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
          onPress={handleProfile}
        >
          <MaterialCommunityIcons name={"account"} size={30} color="gray" />
          <Text style={styles.otherIconText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align content at the top
    alignItems: "flex-start", // Align content to the left
    backgroundColor: "#f5f5f5",
    width: "100%",
  },
  footerContainer: {
    backgroundColor: "#fff",
    justifyContent: "space-around",
    flexDirection: "row",
    height: Platform.OS === "ios" ? 60 : 50,
    width: "100%",
  },
  footerBtn: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "red",
    shadowOffset: { width: 0, height: 8 }, // Corrected shadow offset
  },
  homeIconText: {
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "bold",
    color: "#4F718A",
  },
  otherIconText: {
    fontSize: 11,
    lineHeight: 15,
    color: "gray",
  },
});

export default Ticket;
