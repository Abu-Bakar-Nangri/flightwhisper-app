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
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import img from "../../assets/person.png";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const Flight = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fromModalVisible, setFromModalVisible] = useState(false);
  const [toModalVisible, setToModalVisible] = useState(false);
  const [departureDateModalVisible, setDepartureDateModalVisible] =
    useState(false);
  const [returnDateModalVisible, setReturnDateModalVisible] = useState(false);
  const [classTypeModalVisible, setClassTypeModalVisible] = useState(false);
  const [travelerModalVisible, setTravelerModalVisible] = useState(false);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState(null);
  const [selectedReturnDate, setSelectedReturnDate] = useState(null);
  const [seatType, setSeatType] = useState("Economy");

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

  const handleDepartureDateSelect = (day) => {
    if (!selectedReturnDate || day.dateString <= selectedReturnDate) {
      setSelectedDepartureDate(day.dateString);
      setDepartureDateModalVisible(false);
    } else {
      Alert.alert("Error: Departure date cannot be after return date.");
    }
  };

  const handleReturnDateSelect = (day) => {
    if (!selectedDepartureDate || day.dateString >= selectedDepartureDate) {
      setSelectedReturnDate(day.dateString);
      setReturnDateModalVisible(false);
    } else {
      Alert.alert("Error: Return date cannot be before departure date.");
    }
  };

  const handleClassSelect = (seat) => {
    setSeatType(seat);
    setClassTypeModalVisible(false);
  };

  const handleTravelerCount = () => {
      setTravelerModalVisible(false)
  }

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
          <TouchableOpacity
            style={styles.departurebtn}
            activeOpacity={0.8}
            onPress={() => setFromModalVisible(true)}
          >
            <MaterialCommunityIcons
              name={"airplane-takeoff"}
              size={30}
              color="#000"
            />
            <Text ellipsizeMode="tail" style={styles.flightTitle}>
              From
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.arivelbtn}
            activeOpacity={0.8}
            onPress={() => setToModalVisible(true)}
          >
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
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.departuredate}
              onPress={() => setDepartureDateModalVisible(true)}
            >
              <Text style={styles.deteTitle}>
                {selectedDepartureDate === null
                  ? "Departure Date"
                  : selectedDepartureDate}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.arivaldate}
              onPress={() => setReturnDateModalVisible(true)}
            >
              <Text style={styles.deteTitle}>
                {selectedReturnDate === null
                  ? "Retrun date"
                  : selectedReturnDate}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.Travelers}
            onPress={() => setTravelerModalVisible(true)}
          >
            <Text style={styles.CabinClassTitle}>1 Adult</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.cabinClass}
            onPress={() => setClassTypeModalVisible(true)}
          >
            <Text style={styles.CabinClassTitle}>{seatType}</Text>
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
          <MaterialCommunityIcons name={"airplane"} size={26} color="#4F718A" />
          <Text style={styles.homeIconText}>Flight</Text>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={fromModalVisible}
        onRequestClose={() => {
          setFromModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text>From</Text>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={toModalVisible}
        onRequestClose={() => {
          setToModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text>To</Text>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={departureDateModalVisible}
        onRequestClose={() => {
          setDepartureDateModalVisible(false);
        }}
      >
        <View style={styles.modalDepartureDateContainer}>
          <TouchableOpacity onPress={() => setDepartureDateModalVisible(false)}>
            <Text style={styles.closeButtonDate}>Close</Text>
          </TouchableOpacity>
          <Text style={styles.DateModalTitle}>Departure Date</Text>
          <Calendar
            current={new Date()}
            minDate={new Date()}
            onDayPress={handleDepartureDateSelect}
            markedDates={{ [selectedDepartureDate]: { selected: true } }}
            theme={{
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#b6c1cd",
              selectedDayBackgroundColor: "#4F718A",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#00adf5",
              dayTextColor: "#2d4150",
              textDisabledColor: "#d9e1e8",
              dotColor: "#00adf5",
              selectedDotColor: "#ffffff",
              arrowColor: "#4F718A",
              disabledArrowColor: "#d9e1e8",
              monthTextColor: "#4F718A",
              indicatorColor: "#4F718A",
              textDayFontFamily: "monospace",
              textMonthFontFamily: "monospace",
              textDayHeaderFontFamily: "monospace",
              textDayFontSize: 16,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={returnDateModalVisible}
        onRequestClose={() => {
          setReturnDateModalVisible(false);
        }}
      >
        <View style={styles.modalDepartureDateContainer}>
          <TouchableOpacity onPress={() => setReturnDateModalVisible(false)}>
            <Text style={styles.closeButtonDate}>Close</Text>
          </TouchableOpacity>
          <Text style={styles.DateModalTitle}>Return Date</Text>
          <Calendar
            current={new Date()}
            minDate={new Date()}
            onDayPress={handleReturnDateSelect}
            markedDates={{ [selectedReturnDate]: { selected: true } }}
            theme={{
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#b6c1cd",
              selectedDayBackgroundColor: "#4F718A",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#00adf5",
              dayTextColor: "#2d4150",
              textDisabledColor: "#d9e1e8",
              dotColor: "#00adf5",
              selectedDotColor: "#ffffff",
              arrowColor: "#4F718A",
              disabledArrowColor: "#d9e1e8",
              monthTextColor: "#4F718A",
              indicatorColor: "#4F718A",
              textDayFontFamily: "monospace",
              textMonthFontFamily: "monospace",
              textDayHeaderFontFamily: "monospace",
              textDayFontSize: 16,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={classTypeModalVisible}
        onRequestClose={() => {
          setClassTypeModalVisible(false);
        }}
      >
        <View style={styles.modalClassContainer}>
          <Text style={styles.modalClassTitle}>Select Any Class</Text>
          <TouchableOpacity
            style={styles.seatSelectionModalBtn}
            onPress={() => handleClassSelect("Economy")}
          >
            <Text style={styles.seatSelectionModalText}>Economy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.seatSelectionModalBtn}
            onPress={() => handleClassSelect("First Class")}
          >
            <Text style={styles.seatSelectionModalText}>First Class</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.seatSelectionModalBtn}
            onPress={() => handleClassSelect("Business")}
          >
            <Text style={styles.seatSelectionModalText}>Business</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.seatSelectionModalBtn}
            onPress={() => handleClassSelect("Premium Economy")}
          >
            <Text style={styles.seatSelectionModalText}>Premium Economy</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={travelerModalVisible}
        onRequestClose={() => {
          setTravelerModalVisible(false);
        }}
      >
        <View style={styles.modalTravelerContainer}>
          <View style={styles.modalTravelerBtn}>
            <TouchableOpacity onPress={() => setTravelerModalVisible(false)}>
              <MaterialCommunityIcons name="close" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={ handleTravelerCount}>
              <MaterialCommunityIcons name="check" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    fontSize: 16,
    fontWeight: "600",
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
    fontWeight: "600",
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
    fontWeight: "600",
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
    alignItems: "center",
    marginTop: -60,
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
  modalDepartureDateContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  closeButtonDate: {
    fontSize: 18,
    marginBottom: 40,
    color: "red",
    textAlign: "right",
  },
  DateModalTitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  modalClassContainer: {
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20,
    width: "100%",
    bottom: 0,
    position: "absolute",
    height: "45%",
  },
  closeClassButton: {
    fontSize: 18,
    marginBottom: 20,
    color: "red",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
  },
  modalClassTitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: 15,
  },
  seatSelectionModalBtn: {
    backgroundColor: "#4F718A",
    borderRadius: 6,
    width: "100%",
    height: 45,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  seatSelectionModalText: {
    fontSize: 16,
    fontWeight: "500",
    paddingBottom: 15,
    color: "#fff",
    paddingVertical: 10,
  },
  modalTravelerContainer: {
    backgroundColor: "white",
    paddingTop: 20,
    paddingHorizontal: 20,
    width: "100%",
    bottom: 0,
    position: "absolute",
    height: "60%",
  },
  modalTravelerBtn: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Flight;
