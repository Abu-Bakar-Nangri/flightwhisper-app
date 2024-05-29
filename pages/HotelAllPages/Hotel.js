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
  TextInput,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import img from "../../assets/person.png";
import { Calendar} from "react-native-calendars";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from "@expo/vector-icons";

const Hotel = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [destinationModalVisible, setDestinationModalVisible] = useState(false);
  const [checkInDateModalVisible, setCheckInDateModalVisible] =
    useState(false);
  const [checkOutDateModalVisible, setCheckOutDateModalVisible] = useState(false);
  const [travelerModalVisible, setTravelerModalVisible] = useState(false);
  const [selectedCheckInDate, setSelectedCheckInDate] = useState(null);
  const [selectedCheckOutDate, setselectedCheckOutDate] = useState(null);
  const [seatType, setSeatType] = useState("Economy");
  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [infants, setInfants] = useState(0);
  const [destinationValue, setDestinationValue] = useState(null);
  const [toValue, setToValue] = useState(null);
  const [rooms ,setRooms] = useState(1);

  const getTotalPassengers = () => adults + childs + infants;

  const handleHistory = () => {
    navigation.navigate("History");
  };

  const handleDepartureDateSelect = (day) => {
    if (!selectedCheckOutDate || day.dateString <= selectedCheckOutDate) {
      setSelectedCheckInDate(day.dateString);
      setCheckInDateModalVisible(false);
    } else {
      Alert.alert("Error: Check-in date cannot be after check-out date.");
    }
  };

  const handleCheckOutDateSelect = (day) => {
    if (!selectedCheckInDate || day.dateString >= selectedCheckInDate) {
      setselectedCheckOutDate(day.dateString);
      setCheckOutDateModalVisible(false);
    } else {
      Alert.alert("Error: Check-out cannot be before check-in date.");
    }
  };


  const handleTravelerCount = () => {
    setTravelerModalVisible(false);
  };

  const handleRoomPlus = () => {
    if (rooms < 5) {
      setRooms(rooms + 1);
    }
  }
  const handleRoomMinus = () => {
    if(rooms>1){
      setRooms(rooms-1);
    }
  }

  const handleAdultMinus = () => {
    if (adults > 1) {
      setAdults(adults - 1);
      if (infants > adults - 1) {
        setInfants(adults - 1);
      }
    }
  };

  const handleAdultPlus = () => {
    if (getTotalPassengers() < 10) {
      setAdults(adults + 1);
    }
  };

  const handleChildMinus = () => {
    if (childs > 0) {
      setChilds(childs - 1);
    }
  };

  const handleChildPlus = () => {
    if (getTotalPassengers() < 10) {
      setChilds(childs + 1);
    }
  };



  const handlePressDestination = (item) => {
    setDestinationValue(`${item.city} (${item.shortName})`);
    setDestinationModalVisible(false);
  };


  const handleSerach = () => {
    if (!destinationValue || !selectedCheckInDate || !selectedCheckOutDate || (adults + childs ) === 0 || rooms === 0) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }

    const searchFlight = {
      destination: destinationValue,
      depDate: selectedCheckInDate,
      retDate: selectedCheckOutDate,
      guest: adults + childs,
      rooms: rooms,
    };

    const searchMessage = `
      Destination: ${searchFlight.destination}
      Check-in Date: ${searchFlight.depDate}
      Check-out Date: ${searchFlight.retDate}
      Quest: ${searchFlight.guest}
      Rooms: ${searchFlight.rooms}
    `;

    Alert.alert("Flight Search Details", searchMessage);
  };


  const renderItemFrom = ({ item }) => (
    <TouchableOpacity key={item.shortName} onPress={() => handlePressDestination(item)} activeOpacity={0.8} style={styles.PopularCitiesBtn}>
      <View style={styles.PopularCitiesInfo}>
        <MaterialCommunityIcons style={styles.PopularCitiesIcon} name={item.icon} size={30} />
        <View>
          <Text style={styles.PopularCitiesCity}>{item.city}</Text>
          <Text style={styles.PopularCitiesCountry}>{item.country}</Text>
        </View>
      </View>
      <View style={styles.PopularCitiesShortName}>
        <Text>{item.shortName}</Text>
      </View>
    </TouchableOpacity>
  );
  const countStyle = {
    borderWidth: 2,
    borderRadius: 20,
    color: getTotalPassengers() < 10 ? 'red' : 'gray',
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
          <Text style={styles.DashboardTitle}>Book Your Hotel</Text>
        </View>
        <View style={styles.flightSearch}>
          <TouchableOpacity
            style={styles.departurebtn}
            activeOpacity={0.8}
            onPress={() => setDestinationModalVisible(true)}
          >
             <Icon name="search" size={22} color="#000" />
            <Text ellipsizeMode="tail" style={styles.flightTitle}>
              {destinationValue === null ? 'Destination' : destinationValue}
            </Text>
          </TouchableOpacity>
          <View style={styles.dateContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.departuredate}
              onPress={() => setCheckInDateModalVisible(true)}
            >
              <MaterialCommunityIcons name="calendar-month-outline" size={28} />
              <Text style={styles.deteTitle}>
                {selectedCheckInDate === null
                  ? "Check-in"
                  : selectedCheckInDate}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.arivaldate}
              onPress={() => setCheckOutDateModalVisible(true)}
            >
              <MaterialCommunityIcons name="calendar-month-outline" size={28} />
              <Text style={styles.deteTitle}>
                {selectedCheckOutDate === null
                  ? "Check-out"
                  : selectedCheckOutDate}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.Travelers}
            onPress={() => setTravelerModalVisible(true)}
          >
            <MaterialCommunityIcons
              name="door"
              size={30}
              style={styles.adultIcon}
            />
            <Text style={styles.CabinClassTitle}>{getTotalPassengers()} Guest in {rooms} Room</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.searchbtn} onPress={handleSerach}>
            <Text style={styles.searchtext}>Search Hotels</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.PopularFlightContainer}>
          <Text style={styles.popularHeaderText}>Upcoming Flight</Text>
        </View>
        {morePopularCities.map((item) => (
          <TouchableOpacity key={item.shortName} activeOpacity={0.2} style={styles.PopularCitiesBtn}>
            <View style={styles.PopularCitiesInfo}>
              <MaterialCommunityIcons style={styles.PopularCitiesIcon} name={item.icon} size={30} />
              <View>
                <Text style={styles.PopularCitiesCity}>{item.city}</Text>
                <Text style={styles.PopularCitiesCountry}>{item.country}</Text>
              </View>
            </View>
            <View style={styles.PopularCitiesShortName}>
              <Text>{item.shortName}</Text>
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={destinationModalVisible}
        onRequestClose={() => {
          setDestinationModalVisible(false);
        }}
      >
        <View style={styles.fromModalContainer}>
          <View style={styles.FromSearchView}>
            <TouchableOpacity style={styles.fromClosebtn} onPress={() => setDestinationModalVisible(false)}>
              <MaterialCommunityIcons name="close" size={34} color={'red'} />
            </TouchableOpacity>
            <View style={styles.FromSearch}>
              <TextInput style={styles.FromSearchInput} placeholder="Select Departure"></TextInput>
            </View>
          </View>
          <View>
            <View style={styles.PopularCitiesTitle}>
              <Text style={styles.PopularCitiesText}>Popular Cities</Text>
            </View>
            <FlatList
              data={popularCities}
              renderItem={renderItemFrom}
              keyExtractor={(item) => item.shortName}
            />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={checkInDateModalVisible}
        onRequestClose={() => {
          setCheckInDateModalVisible(false);
        }}
      >
        <View style={styles.modalDepartureDateContainer}>
          <TouchableOpacity onPress={() => setCheckInDateModalVisible(false)}>
            <Text style={styles.closeButtonDate}>Close</Text>
          </TouchableOpacity>
          <Text style={styles.DateModalTitle}>Check-in Date</Text>
          <Calendar
            current={new Date()}
            minDate={new Date()}
            onDayPress={handleDepartureDateSelect}
            markedDates={{ [selectedCheckInDate]: { selected: true } }}
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
        visible={checkOutDateModalVisible}
        onRequestClose={() => {
          setCheckOutDateModalVisible(false);
        }}
      >
        <View style={styles.modalDepartureDateContainer}>
          <TouchableOpacity onPress={() => setCheckOutDateModalVisible(false)}>
            <Text style={styles.closeButtonDate}>Close</Text>
          </TouchableOpacity>
          <Text style={styles.DateModalTitle}>Check-out Date</Text>
          <Calendar
            current={new Date()}
            minDate={new Date()}
            onDayPress={handleCheckOutDateSelect}
            markedDates={{ [selectedCheckOutDate]: { selected: true } }}
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
            <TouchableOpacity onPress={handleTravelerCount}>
              <MaterialCommunityIcons name="check" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.InfoModelPassengers}>
            <View style={styles.AgeModelPassenger}>
              <MaterialCommunityIcons name="bed" size={30} color="black" />
              <View style={styles.agesPassengers}>
                <Text style={styles.passsengerType}>Room</Text>
              </View>
            </View>
            <View style={styles.InfoModelBtn}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ borderWidth: 2, borderRadius: 20 }}
                onPress={handleRoomMinus}
              >
                <MaterialCommunityIcons name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.passengerCunt}>{rooms}</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleRoomPlus}
                style={countStyle}
              >
                <MaterialCommunityIcons name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.InfoModelPassengers}>
            <View style={styles.AgeModelPassenger}>
              <FontAwesome5 name="user" size={28} color="black" />
              <View style={styles.agesPassengers}>
                <Text style={styles.passsengerType}>Adult</Text>
                <Text style={styles.passengerAges}>{`(> 17 years)`}</Text>
              </View>
            </View>
            <View style={styles.InfoModelBtn}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ borderWidth: 2, borderRadius: 20 }}
                onPress={handleAdultMinus}
              >
                <MaterialCommunityIcons name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.passengerCunt}>{adults}</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleAdultPlus}
                style={countStyle}
              >
                <MaterialCommunityIcons name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.InfoModelPassengers}>
            <View style={styles.AgeModelPassenger}>
              <FontAwesome5 name="child" size={30} color="black" />
              <View style={styles.agesPassengers}>
                <Text style={styles.passsengerType}>Child</Text>
                <Text style={styles.passengerAges}>{`(≤ 17 years)`}</Text>
              </View>
            </View>
            <View style={styles.InfoModelBtn}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ borderWidth: 2, borderRadius: 20 }}
                onPress={handleChildMinus}
              >
                <MaterialCommunityIcons name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.passengerCunt}>{childs}</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ borderWidth: 2, borderRadius: 20 }}
                onPress={handleChildPlus}
              >
                <MaterialCommunityIcons name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
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
    color: "rgba(0,0,0,0.9)",
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  arivaldate: {
    width: "46%",
    height: 60,
    backgroundColor: "#B5C5D2",
    borderRadius: 6,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  deteTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,0.8)",
    paddingHorizontal: 10,
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
  adultIcon: {
    marginHorizontal: 5,
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
  fromModalContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255,255,255,1)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop:Platform.OS==='ios'? 50:10,
  },
  FromSearchView: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  fromClosebtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  FromSearch: {
    marginHorizontal: 10,
    height: 60,
    width: '90%',
  },
  FromSearchInput: {
    height: 60,
    fontSize: 18,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  PopularCitiesTitle: {
    width: '100%',
    paddingTop: 10,
    marginHorizontal: 20,
  },
  PopularCitiesText: {
    fontWeight: '600',
    paddingBottom: 10,
  },
  PopularCitiesBtn: {
    width: '100%',
    height: 65,
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center',
  },
  PopularCitiesInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  PopularCitiesIcon: {
    color: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 12,
  },
  PopularCitiesCity: {
    fontSize: 16,
    fontWeight: '500',
  },
  PopularCitiesCountry: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.6)',
    paddingTop: 1,

  },
  PopularCitiesShortName: {
    marginHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 6,
    paddingVertical: 2,
    alignItems: 'center',
    width: 50,
  },
  modalDepartureDateContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS==='ios'? 80:50,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: Platform.OS==='ios'? "92%":"100%",
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

  modalTravelerContainer: {
    backgroundColor: "white",
    paddingTop: 20,
    paddingHorizontal: 20,
    width: "100%",
    bottom: 0,
    position: "absolute",
    height: Platform.OS==='ios'? "93%":"100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom:20,
  },
  modalTravelerBtn: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom:20,
  },
  TitleModelPassengers: {
    fontSize: 18,
    paddingVertical: 20,
    fontWeight: "500",
  },
  InfoModelPassengers: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  AgeModelPassenger: {
    flexDirection: "row",
    alignItems: "center",
  },
  agesPassengers: {
    paddingHorizontal: 10,
  },
  passsengerType: {
    fontSize: 16,
    fontWeight: "400",
  },
  passengerAges: {
    fontSize: 12,
    fontWeight: "300",
    color: "gray",
  },
  InfoModelBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  passengerCunt: {
    fontSize: 16,
    paddingHorizontal: 25,
  },
});

export default Hotel;


const popularCities = [
  { city: "Abha", country: "Saudi Arabia", shortName: "AHB", icon: "map-marker-outline" },
  { city: "Tokyo", country: "Japan", shortName: "TYO", icon: "map-marker-outline" },
  { city: "Paris", country: "France", shortName: "PAR", icon: "map-marker-outline" },
  { city: "New York", country: "USA", shortName: "NYC", icon: "map-marker-outline" },
  { city: "London", country: "UK", shortName: "LON", icon: "map-marker-outline" },
  { city: "Sydney", country: "Australia", shortName: "SYD", icon: "map-marker-outline" },
  { city: "Berlin", country: "Germany", shortName: "BER", icon: "map-marker-outline" },
  { city: "Dubai", country: "UAE", shortName: "DXB", icon: "map-marker-outline" },
  { city: "Toronto", country: "Canada", shortName: "TOR", icon: "map-marker-outline" },
  { city: "Moscow", country: "Russia", shortName: "MOW", icon: "map-marker-outline" },
  { city: "Rome", country: "Italy", shortName: "ROM", icon: "map-marker-outline" },
  { city: "Beijing", country: "China", shortName: "BJS", icon: "map-marker-outline" },
  { city: "Mumbai", country: "India", shortName: "BOM", icon: "map-marker-outline" },
  { city: "Cape Town", country: "South Africa", shortName: "CPT", icon: "map-marker-outline" },
  { city: "Rio de Janeiro", country: "Brazil", shortName: "RIO", icon: "map-marker-outline" },
];


const morePopularCities = [
  { city: "Buenos Aire", country: "Argentina", shortName: "BUE", icon: "map-marker-outline" },
  { city: "Cairo", country: "Egypt", shortName: "CAI", icon: "map-marker-outline" },
  { city: "Bangkok", country: "Thailand", shortName: "BKK", icon: "map-marker-outline" },
  { city: "Istanbul", country: "Turkey", shortName: "IST", icon: "map-marker-outline" },
  { city: "Seoul", country: "South Korea", shortName: "SEL", icon: "map-marker-outline" },
  { city: "Nairobi", country: "Kenya", shortName: "NBO", icon: "map-marker-outline" },
  { city: "Athens", country: "Greece", shortName: "ATH", icon: "map-marker-outline" },
  { city: "Madrid", country: "Spain", shortName: "MAD", icon: "map-marker-outline" },
  { city: "Mexico City", country: "Mexico", shortName: "MEX", icon: "map-marker-outline" },
  { city: "Lisbon", country: "Portugal", shortName: "LIS", icon: "map-marker-outline" },
  { city: "Jakarta", country: "Indonesia", shortName: "JKT", icon: "map-marker-outline" },
  { city: "Vienna", country: "Austria", shortName: "VIE", icon: "map-marker-outline" },
  { city: "Lima", country: "Peru", shortName: "LIM", icon: "map-marker-outline" },
  { city: "Helsinki", country: "Finland", shortName: "HEL", icon: "map-marker-outline" },
  { city: "Stockholm", country: "Sweden", shortName: "STO", icon: "map-marker-outline" },
];

