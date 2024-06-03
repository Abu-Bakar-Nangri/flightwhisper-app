import React, { useContext, useEffect, useState } from "react";
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
import img from "../assets/person.png";
import Toast from "react-native-toast-message";
import { UserContext } from "./Context/UserContext";

const Dashboard = ({ navigation }) => {
  const {user} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);

  }, []);

  const handleTicket = () => {
    navigation.navigate("Flight");
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

  const handlePopularDestination = (Destinations) => {
    navigation.navigate("PopularDestination", { Destinations });
  };
  const handleDestinationDetails = (destinationData) => {
    navigation.navigate("DestinationDetails", { destinationData });
  };

  const sortedDestinations = Destinations.sort(
    (a, b) => b.rating - a.rating
  ).slice(0, 6);
  const sortedTrendingCountries = TrendingCountries.sort(
    (a, b) => b.rating - a.rating
  ).slice(0, 6);

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
      <Toast />
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
          <Text style={styles.DashboardTitle}>Welcome to FlightWhisper</Text>
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
            <MaterialCommunityIcons name={"bed-king-outline"} size={50} color="#4F718A" />
            <Text style={styles.flightTitle}>Hotel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.popularDestinationContainer}>
          <View style={styles.popularHeaderContainer}>
            <Text style={styles.popularHeaderText}>Popular Destinations</Text>
            <TouchableOpacity
              onPress={() => handlePopularDestination(Destinations)}
            >
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {sortedDestinations.map((destination, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={1}
                style={styles.popularCard}
                onPress={() => handleDestinationDetails(destination)}
              >
                <Image style={styles.popularImage} source={destination.img} />
                <Text style={styles.destinationRating}>
                  {destination.rating}
                </Text>
                <Text
                  style={styles.destinationName}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {destination.title}
                </Text>
                <Text style={styles.destinationPrice}>{destination.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.trendingCountriesContainer}>
          <View style={styles.popularHeaderContainer}>
            <Text style={styles.popularHeaderText}>Trending Countries</Text>
            <TouchableOpacity
              onPress={() => handlePopularDestination(Destinations)}
            >
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {sortedTrendingCountries.map((trendingCountries, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={1}
                style={styles.popularCard}
                onPress={() => handleDestinationDetails(trendingCountries)}
              >
                <Image
                  style={styles.popularImage}
                  source={trendingCountries.img}
                />
                <Text style={styles.destinationRating}>
                  {trendingCountries.rating}
                </Text>
                <Text
                  style={styles.destinationName}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {trendingCountries.title}
                </Text>
                <Text style={styles.destinationPrice}>
                  {trendingCountries.price}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View>
          <Text>Flight Booking video guide</Text>
          {/* <Video
        source={{ uri: 'https://www.youtube.com/watch?v=MvKUwIt60ag&ab_channel=Itsdeadhell' }} // Replace with your video URL
        style={styles.video}
        controls={true}
        resizeMode="contain"
      /> */}
        </View>
        <View>
          <Text>Hotel Booking video guide</Text>
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
          <MaterialCommunityIcons name={"airplane"} size={26} color="gray" />
          <Text style={styles.otherIconText}>Ticket</Text>
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f2f2f2",
  },
  profiledata: {
    backgroundColor: "#4F718A",
    height: 225,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Platform.OS === "ios" ? 25 : 40,
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
    paddingVertical: 8,
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
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Dashboard;

const Destinations = [
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Khao Sok National Park",
    price: "$3300",
    rating: 4.5,
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Grand Canyon",
    price: "$2500",
    rating: 4.8,
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Santorini, Greece",
    price: "$4500",
    rating: 4.7,
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Machu Picchu, Peru",
    price: "$4000",
    rating: 4.6,
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Great Barrier Reef, Australia",
    price: "$5000",
    rating: 4.9,
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Bora Bora, French Polynesia",
    price: "$6000",
    rating: 4.7,
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Banff National Park, Canada",
    price: "$3500",
    rating: 4.6,
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Dubai, United Arab Emirates",
    price: "$5500",
    rating: 4.5,
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Kyoto, Japan",
    price: "$3800",
    rating: 4.7,
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Niagara Falls, USA/Canada",
    price: "$3200",
    rating: 4.6,
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Victoria Falls, Zambia/Zimbabwe",
    price: "$4200",
    rating: 4.8,
  },
  // Add more destinations as needed
];

const TrendingCountries = [
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Italy",
    description:
      "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins.",
    rating: 4.7,
    price: "$1500",
    currency: "USD",
    language: "Italian",
    population: "60 million",
    capital: "Rome",
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Japan",
    description:
      "Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.",
    rating: 4.8,
    price: "$2000",
    currency: "USD",
    language: "Japanese",
    population: "126 million",
    capital: "Tokyo",
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Australia",
    description:
      "Australia is a country and continent surrounded by the Indian and Pacific oceans. Its major cities – Sydney, Brisbane, Melbourne, Perth, Adelaide – are coastal.",
    rating: 4.6,
    price: "$1800",
    currency: "USD",
    language: "English",
    population: "25 million",
    capital: "Canberra",
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "France",
    description:
      "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.",
    rating: 4.5,
    price: "$1700",
    currency: "USD",
    language: "French",
    population: "67 million",
    capital: "Paris",
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "Brazil",
    description:
      "Brazil is the largest country in both South America and Latin America. It covers an area of 8,515,767 square kilometers (3,287,956 sq mi) with a population of over 211 million.",
    rating: 4.7,
    price: "$1600",
    currency: "USD",
    language: "Portuguese",
    population: "211 million",
    capital: "Brasília",
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "China",
    description:
      "China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion.",
    rating: 4.6,
    price: "$1900",
    currency: "USD",
    language: "Chinese",
    population: "1.4 billion",
    capital: "Beijing",
  },
  {
    img: require("../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
    title: "South Africa",
    description:
      "South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. ",
    rating: 4.5,
    price: "$2200",
    currency: "USD",
    language: "South African English",
    population: "60 million",
    capital: "Pretoria",
  },
];
