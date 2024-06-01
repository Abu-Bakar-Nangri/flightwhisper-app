import React, { useContext, useState } from "react";
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
  TextInput,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import img from "../../assets/person.png";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { FontAwesome5 } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { Checkbox, RadioButton } from "react-native-paper";
import { UserContext } from "../Context/UserContext";

const Flight = ({ navigation }) => {
  const {user} = useContext(UserContext);
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
  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [infants, setInfants] = useState(0);
  const [fromValue, setFromValue] = useState(null);
  const [toValue, setToValue] = useState(null);
  const [selectedOption, setSelectedOption] = useState('oneWay');

  const getTotalPassengers = () => adults + childs + infants;

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
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Departure date cannot be after return date.',
      });
    }
  };

  const handleReturnDateSelect = (day) => {
    if (!selectedDepartureDate || day.dateString >= selectedDepartureDate) {
      setSelectedReturnDate(day.dateString);
      setReturnDateModalVisible(false);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Return date cannot be before departure date.',
      });
    }
  };

  const handleClassSelect = (seat) => {
    setSeatType(seat);
    setClassTypeModalVisible(false);
  };

  const handleTravelerCount = () => {
    setTravelerModalVisible(false);
  };

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

  const handleInfantMinus = () => {
    if (infants > 0) {
      setInfants(infants - 1);
    }
  };

  const handleInfantsPlus = () => {
    if (getTotalPassengers() < 10 && infants < adults) {
      setInfants(infants + 1);
    }
  };

  const handlePressFrom = (item) => {
    setFromValue(`${item.city} (${item.shortName})`);
    setFromModalVisible(false);
  };

  const handlePressTo = (item) => {
    setToValue(`${item.city} (${item.shortName})`);
    setToModalVisible(false);
  };

  const handleSerach = () => {
    if(selectedOption==='oneWay'){
      if (!fromValue || !toValue || !selectedDepartureDate || (adults + childs + infants) === 0 || !seatType) {
        Toast.show({
          type: 'error',
          text1: 'Empty fields',
          text2: 'Please fill in all the fields.',
        });
        return;
      }
    }
    else {
      if (!fromValue || !toValue || !selectedDepartureDate || !selectedReturnDate || (adults + childs + infants) === 0 || !seatType) {
        Toast.show({
          type: 'error',
          text1: 'Empty fields',
          text2: 'Please fill in all the fields.',
        });
        return;
      }
    }
    

    // const searchFlight = {
    //   from: fromValue,
    //   to: toValue,
    //   depDate: selectedDepartureDate,
    //   retDate: selectedReturnDate,
    //   passengers: adults + childs + infants,
    //   seatType: seatType,
    // };

    // const searchMessage = `
    //   From: ${searchFlight.from}
    //   To: ${searchFlight.to}
    //   Departure Date: ${searchFlight.depDate}
    //   Return Date: ${searchFlight.retDate}
    //   Passengers: ${searchFlight.passengers}
    //   Seat Type: ${searchFlight.seatType}
    // `;

    // Toast.show ({
    //   type:'success',
    //   text1:'Flight Search Details',
    //   text2:searchMessage,
    // });
    navigation.navigate("FlightResult");
  };


  const renderItemFrom = ({ item }) => (
    <TouchableOpacity key={item.shortName} onPress={() => handlePressFrom(item)} activeOpacity={0.8} style={styles.PopularCitiesBtn}>
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

  const renderItemTo = ({ item }) => (
    <TouchableOpacity key={item.shortName} onPress={() => handlePressTo(item)} activeOpacity={0.8} style={styles.PopularCitiesBtn}>
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

  const RadioButton = ({ selected, onPress, children }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.radioButtonContainer}>
      <View style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonSelected} /> : null}
      </View>
      <Text style={styles.radioButtonText}>{children}</Text>
    </TouchableOpacity>
  );

  const dynamicWidth = {
    width: selectedOption === 'oneWay' ? '95%' : '46%',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >

        <View style={styles.profiledata}>
          <Toast />
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
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
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
          <View style={styles.radioButtonGroup}>
            <RadioButton
              selected={selectedOption === 'oneWay'}
              onPress={() => setSelectedOption('oneWay')}
            >
              One way
            </RadioButton>
            <RadioButton
              selected={selectedOption === 'roundTrip'}
              onPress={() => setSelectedOption('roundTrip')}
            >
              Round trip
            </RadioButton>
          </View>
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
              {fromValue === null ? 'From' : fromValue}
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
              {toValue === null ? 'To' : toValue}
            </Text>
          </TouchableOpacity>
          <View style={styles.dateContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.departuredate, dynamicWidth]}
              onPress={() => setDepartureDateModalVisible(true)}
            >
              <MaterialCommunityIcons name="calendar-month-outline" size={28} />
              <Text style={styles.deteTitle}>
                {selectedDepartureDate === null
                  ? "Departure Date"
                  : selectedDepartureDate}
              </Text>
            </TouchableOpacity>
            {selectedOption === 'roundTrip' ? (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.arivaldate}
                onPress={() => setReturnDateModalVisible(true)}
              >
                <MaterialCommunityIcons name="calendar-month-outline" size={28} />
                <Text style={styles.deteTitle}>
                  {selectedReturnDate === null
                    ? "Retrun date"
                    : selectedReturnDate}
                </Text>
              </TouchableOpacity>
            ) : ''}

          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.Travelers}
            onPress={() => setTravelerModalVisible(true)}
          >
            <MaterialCommunityIcons
              name="account-group"
              size={30}
              style={styles.adultIcon}
            />
            <Text style={styles.CabinClassTitle}>{adults} Adult {childs > 0 ? `${childs} Childs` : ''} {infants > 0 ? `${infants} Infants` : ''}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.cabinClass}
            onPress={() => setClassTypeModalVisible(true)}
          >
            <MaterialCommunityIcons name="home" size={28} />
            <Text style={styles.CabinClassTitle}>{seatType}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.searchbtn} onPress={handleSerach}>
            <Text style={styles.searchtext}>Search Flights</Text>
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
        <View style={styles.fromModalContainer}>
          <View style={styles.FromSearchView}>
            <TouchableOpacity style={styles.fromClosebtn} onPress={() => setFromModalVisible(false)}>
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
        animationType="slide"
        transparent={true}
        visible={toModalVisible}
        onRequestClose={() => {
          setToModalVisible(false);
        }}
      >
        <View style={styles.fromModalContainer}>
          <View style={styles.FromSearchView}>
            <TouchableOpacity style={styles.fromClosebtn} onPress={() => setToModalVisible(false)}>
              <MaterialCommunityIcons name="close" size={34} color={'red'} />
            </TouchableOpacity>
            <View style={styles.FromSearch}>
              <TextInput style={styles.FromSearchInput} placeholder="Where to?"></TextInput>
            </View>
          </View>
          <View>
            <View style={styles.PopularCitiesTitle}>
              <Text style={styles.PopularCitiesText}>Popular Cities</Text>
            </View>
            <FlatList
              data={morePopularCities}
              renderItem={renderItemTo}
              keyExtractor={(item) => item.shortName}
            />
          </View>
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
            <TouchableOpacity onPress={handleTravelerCount}>
              <MaterialCommunityIcons name="check" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.TitleModelPassengers}>Passengers</Text>
          <View style={styles.InfoModelPassengers}>
            <View style={styles.AgeModelPassenger}>
              <FontAwesome5 name="user" size={30} color="black" />
              <View style={styles.agesPassengers}>
                <Text style={styles.passsengerType}>Adult</Text>
                <Text style={styles.passengerAges}>{`(>12 years)`}</Text>
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
                style={{ borderWidth: 2, borderRadius: 20 }}
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
                <Text style={styles.passengerAges}>{`(2 -12 years)`}</Text>
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
          <View style={styles.InfoModelPassengers}>
            <View style={styles.AgeModelPassenger}>
              <FontAwesome5 name="baby" size={30} color="black" />
              <View style={styles.agesPassengers}>
                <Text style={styles.passsengerType}>Infant</Text>
                <Text style={styles.passengerAges}>{`(<2 years)`}</Text>
              </View>
            </View>
            <View style={styles.InfoModelBtn}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ borderWidth: 2, borderRadius: 20 }}
                onPress={handleInfantMinus}
              >
                <MaterialCommunityIcons name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.passengerCunt}>{infants}</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ borderWidth: 2, borderRadius: 20 }}
                onPress={handleInfantsPlus}
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
    marginTop: Platform.OS === "ios" ? 25 : 40,
    marginHorizontal: 20,
    zIndex: -100,
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
    paddingVertical: 10,
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
    height: 60,
    backgroundColor: "#B5C5D2",
    borderRadius: 6,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 8,
    flexDirection: "row",
  },
  arivaldate: {
    width: "46%",
    height: 60,
    backgroundColor: "#B5C5D2",
    borderRadius: 6,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 8,
    flexDirection: "row",
  },
  deteTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,0.8)",
    paddingHorizontal: 5,
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
  fromModalContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255,255,255,1)',
    height: Platform.OS === 'ios' ? '93%' : '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
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
    paddingTop: Platform.OS === 'ios' ? 80 : 50,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalTravelerBtn: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
  line: {
    width: "100%",
    borderBottomWidth: 2,
    borderColor: 'red',
  },
  radioButtonGroup: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4F718A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#4F718A',
  },
  radioButtonText: {
    fontSize: 16,
    paddingRight: 25,
  },
});

export default Flight;



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