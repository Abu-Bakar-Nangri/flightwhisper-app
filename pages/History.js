import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const History = ({ navigation }) => {
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
          <View  style={styles.NotificatonContainer}>
            <TouchableOpacity activeOpacity={1} style={styles.BackBtnContainer}>
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={28}
                  color={"#f5f5f5"}
                />
              </TouchableOpacity>
              <Text style={styles.NotificatonTitle}>Notification</Text>
              <View></View>
           </View>
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
              <MaterialCommunityIcons name={"ticket"} size={26} color="gray" />
              <Text style={styles.otherIconText}>Ticket</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.footerBtn}
              onPress={handleHistory}
            >
              <MaterialCommunityIcons name={"history"} size={26} color="#4F718A" />
              <Text style={styles.homeIconText}>History</Text>
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
          justifyContent: "flex-start", 
          alignItems: "flex-start", 
          backgroundColor: "#f5f5f5",
          width:'100%',
        },
        NotificatonContainer:{
          backgroundColor:'#4F718A',
          width:"100%",
          flexDirection:'row',
          height:Platform.OS === 'ios' ? 80 : 100,
          justifyContent:"space-between",
          alignItems:'center',
        },
        BackBtnContainer: {
          width: 32,
          height: 32,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 30,
          borderColor: "#f9f9f9",
          backgroundColor: "#728DA1",
          marginLeft:20,
        },
        NotificatonTitle: {
          fontSize: 22,
          color: '#fff',
          marginLeft:-50,
        },        
        footerContainer: {
          backgroundColor: "#fff",
          justifyContent: "space-around",
          flexDirection: "row",
          height: Platform.OS === 'ios' ? 60 : 50,
          width:"100%"
        },
        footerBtn: {
          width: 100,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "red",
          shadowOffset: { width: 0, height: 8 }, 
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
      
export default History;
