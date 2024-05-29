import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Modal,
  ScrollView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import img from "../../assets/person.png";

const Ticket = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.profiledata}>
          <View style={styles.headerContainer}>
            <View style={styles.headerData}>
              <TouchableOpacity
                style={styles.imgContainer}
                onPress={() => setModalVisible(true)}
              >
                <Image source={img} style={styles.image} resizeMode="cover" />
              </TouchableOpacity>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(false);
                }}
              >
                <View style={styles.modalContainer}>
                  <Image
                    source={img}
                    style={styles.fullScreenImage}
                    resizeMode="contain"
                  />
                  <TouchableOpacity
                    activeOpacity={0.4}
                    style={styles.closeButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <MaterialCommunityIcons
                      name="close"
                      size={30}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </Modal>
              <View>
                <Text style={styles.userName}>Abu Bakar Siddique</Text>
                <Text style={styles.userEmail}>abububakarnangri@gmail.com</Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.bellContainer}
              onPress={handleHistory}
            >
              <MaterialCommunityIcons
                name={"bell-badge-outline"}
                size={23}
                color="#f5f5f5"
                style={styles.bellicon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.DashboardTitle}> Book Your Flight Ticket</Text>
        </View>
        
        <View style={styles.flightSerach}>

        </View>

        </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
       
        >
          <MaterialCommunityIcons name={"home"} size={26} color="#4F718A" />
          <Text style={styles.homeIconText}>Home</Text>
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

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f2f2f2",
    width:'100%',
  },
  profiledata: {
    backgroundColor: "#4F718A",
    height: 225,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Platform.OS === "ios" ? 20 : 30,
    marginHorizontal: 20,
  },
  headerData: {
    flexDirection: "row",
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderColor: "#f9f9f9",
    borderWidth: 2,
    borderRadius: 60,
    marginVertical: 6,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: {
    width: width,
    height: height,
  },
  closeButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 60 : 20,
    right: Platform.OS === "ios" ? 25 : 20,
    borderRadius: 30,
    borderWidth: 2,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 15,
    paddingTop: 12,
    color: "rgba(255,255,255,0.9)",
  },
  userEmail: {
    fontSize: 11,
    fontWeight: "400",
    paddingHorizontal: 15,
    color: "rgba(255,255,255,0.5)",
  },
  bellContainer: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 18,
    backgroundColor: "#728DA1",
    borderColor: "#f9f9f9",
  },
  bellicon: {
    paddingHorizontal: 5,
    paddingVertical: 4,
    color: "#f9f9f9",
  },
  DashboardTitle: {
    paddingHorizontal: 20,
    fontSize: 26,
    fontWeight: "400",
    color: "#fff",
    paddingVertical: 12,
  },
  flightSerach: {
    marginHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    top: 156,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  flightbtn: {
    backgroundColor: "#f9f9f9",
    width: "42%",
    height: 110,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  flightTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4F718A",
  },
  popularDestinationContainer: {
    marginTop: 60,
  },
  trendingCountriesContainer: {
    marginTop: 10,
    marginBottom: 15,
  },
  popularHeaderContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  popularHeaderText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  seeAllText: {
    fontSize: 16,
    color: "rgba(0,0,0,0.6)",
    fontWeight: "400",
  },
  popularCard: {
    marginLeft: 20,
    width: 250,
    height: 300,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  popularImage: {
    width: "100%",
    height: 218,
    resizeMode: "cover",
  },
  destinationRating: {
    paddingHorizontal: 10,
    paddingTop: 6,
    fontSize: 16,
    fontWeight: "400",
  },
  destinationName: {
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  destinationPrice: {
    paddingHorizontal: 10,
    paddingBottom: 8,
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
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
