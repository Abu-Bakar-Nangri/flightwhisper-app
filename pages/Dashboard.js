import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import img from "../assets/person.png";
import destination from "../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg";

const Dashboard = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleTicket = () => {
    navigation.navigate("Ticket");
  };
  const handleHistory = () => {
    navigation.navigate("History");
  };
  const handleProfile = () => {
    navigation.navigate("Profile");
  };
  const handleDashboard = () => {
    navigation.navigate("Dashboard");
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
          <TouchableOpacity
            activeOpacity={1}
            style={styles.flightbtn}
            onPress={() => navigation.navigate("Flight")}
          >
            <MaterialCommunityIcons
              name={"airplane"}
              size={50}
              color="#4F718A"
            />
            <Text style={styles.flightTitle}>Flights</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.flightbtn}
            onPress={() => navigation.navigate("Hotel")}
          >
            <MaterialCommunityIcons name={"home"} size={50} color="#4F718A" />
            <Text style={styles.flightTitle}>Hotel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.popularDestinationContainer}>
          <View style={styles.popularHeaderContainer}>
            <Text style={styles.popularHeaderText}>Popular Destinations</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.popularDestinationContainer}>
          <View style={styles.popularHeaderContainer}>
            <Text style={styles.popularHeaderText}>Popular Destinations</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.popularDestinationContainer}>
          <View style={styles.popularHeaderContainer}>
            <Text style={styles.popularHeaderText}>Popular Destinations</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
            <View style={styles.popularCard}>
              <Image style={styles.popularImage} source={destination} />
              <Text style={styles.destinationName}>Khao Sok National Park</Text>
              <Text style={styles.destinationPrice}>$3300</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
          onPress={handleDashboard}
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
    justifyContent: "top",
    alignItems: "left",
    backgroundColor: "#f2f2f2",
  },
  profiledata: {
    backgroundColor: "#4F718A",
    marginVertical: 22,
    height: 213,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
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
    top: 20,
    right: 20,
    borderRadius: 30,
    borderWidth: 2,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 15,
    paddingTop: 10,
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
    fontFamily: "Poppins",
    color: "#fff",
  },
  flightSerach: {
    marginHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    top: 170,
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
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  flightTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4F718A",
  },
  enteremail: {
    borderColor: "#D8DADC",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    height: 55,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 100,
  },
  popularDestinationContainer: {
    marginTop: 55,
  },
  popularHeaderContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  popularHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 16,
    color: "blue",
  },
  popularCard: {
    marginLeft: 20,
    width: 250,
    height: 300,
    backgroundColor: "red",
    borderRadius: 10,
    overflow: "hidden",
  },
  popularImage: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
  },

  destinationName: {
    paddingHorizontal: 10,
    paddingTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  destinationPrice: {
    paddingHorizontal: 10,
    paddingBottom: 8,
    fontSize: 18,
    color: "#4F718A",
    fontWeight: "700",
  },
  footerContainer: {
    backgroundColor: "#fff",
    justifyContent: "space-around",
    flexDirection: "row",
    height: 50,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: -5,
  },
  footerBtn: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "red",
    shadowOffset: 60,
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

export default Dashboard;
