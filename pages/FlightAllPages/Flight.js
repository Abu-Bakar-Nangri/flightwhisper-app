import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  Image,
  Dimensions,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import img from "../../assets/person.png";

const Flight = ({ navigation }) => {
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
        contentContainerStyle={styles.scrollViewContent}
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
          <Text style={styles.DashboardTitle}>Book Your Flight Ticket</Text>
        </View>
        <View style={styles.flightSearch}>
          <TouchableOpacity style={styles.departurebtn} activeOpacity={0.8}>
            <MaterialCommunityIcons
              name={"airplane-takeoff"}
              size={30}
              color="#000"
            />
            <Text ellipsizeMode="tail" style={styles.flightTitle}>
              From
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.arivelbtn} activeOpacity={0.8}>
            <MaterialCommunityIcons
              name={"airplane-landing"}
              size={30}
              color="#000"
            />
            <Text ellipsizeMode="tail" style={styles.flightTitle}>
              To
            </Text>
          </TouchableOpacity>
          <View style={styles.dateContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.departuredate}>
              <Text style={styles.deteTitle}>Departure date</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.arivaldate}>
              <Text style={styles.deteTitle}>Retrun date</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.Travelers}>
            <Text style={styles.CabinClassTitle}>1 Adult</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.cabinClass}>
            <Text style={styles.CabinClassTitle}>Economy</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.searchbtn}>
            <Text style={styles.searchtext}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.PopularFlightContainer}>
          <Text style={styles.popularHeaderText}>Upcoming Flight</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
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
          <MaterialCommunityIcons name={"file"} size={26} color="gray" />
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
    backgroundColor: "#f2f2f2",
    width: "100%",
  },

  profiledata: {
    backgroundColor: "#4F718A",
    height: 260,
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
    fontFamily: "Poppins",
    color: "#fff",
    paddingVertical: 12,
  },
  flightSearch: {
    marginHorizontal: 20,
    paddingVertical: 5,
    top: -90,
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  arivelbtn: {
    backgroundColor: "#B5C5D2",
    height: 60,
    borderRadius: 6,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 5,
    borderStyle: "dashed",
    borderColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  departurebtn: {
    backgroundColor: "#B5C5D2",
    height: 60,
    borderRadius: 6,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 5,
    borderStyle: "dashed",
    borderColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  flightTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "rgba(0,0,0,0.5)",
    paddingHorizontal: 20,
  },
  dateContainer: {
    flexDirection: "row",
    width: "99%",
    position: "relative",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 6,
  },
  departuredate: {
    width: "46%",
    height: 60,
    backgroundColor: "#B5C5D2",
    borderRadius: 6,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  arivaldate: {
    width: "46%",
    height: 60,
    backgroundColor: "#B5C5D2",
    borderRadius: 6,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  deteTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(0,0,0,0.8)",
  },
  Travelers: {
    backgroundColor: "#B5C5D2",
    height: 60,
    borderRadius: 6,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 4,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  cabinClass: {
    backgroundColor: "#B5C5D2",
    height: 60,
    borderRadius: 6,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 8,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  CabinClassTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: "rgba(0,0,0,0.8)",
  },
  searchbtn: {
    height: 55,
    backgroundColor: "#4F718A",
    borderRadius: 6,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 15,
  },
  searchtext: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: Platform.OS === "ios" ? 17 : 14,
    color: "#ffffff",
  },
  PopularFlightContainer: {
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    marginTop:-60,
  },
  popularHeaderText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  seeAllText: {
    fontSize: 14,
    color: "rgba(0,0,0,0.6)",
    fontWeight: "400",
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

export default Flight;
