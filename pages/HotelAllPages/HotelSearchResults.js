import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import img from "../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg";
import StarRating from "./StarRating";

const HotelSearchResults = () => {
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button press
  const handlePress = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.Filters}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.filterHotel,
              activeButton === "Best" && styles.activeButton,
            ]}
            onPress={() => handlePress("Best")}
          >
            <Text style={styles.filterText}>Best</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.filterHotel,
              activeButton === "Cheapest" && styles.activeButton,
            ]}
            onPress={() => handlePress("Cheapest")}
          >
            <Text style={styles.filterText}>Cheapest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.filterHotel,
              activeButton === "Fastest" && styles.activeButton,
            ]}
            onPress={() => handlePress("Fastest")}
          >
            <Text style={styles.filterText}>Fastest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.filterHotel,
              activeButton === "Direct" && styles.activeButton,
            ]}
            onPress={() => handlePress("Direct")}
          >
            <Text style={styles.filterText}>Direct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.filterHotel,
              activeButton === "Shortest" && styles.activeButton,
            ]}
            onPress={() => handlePress("Shortest")}
          >
            <Text style={styles.filterText}>Shortest</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView
        style={styles.ScrollHotel}
        showsVerticalScrollIndicator={false}
      >
        {hotelData.map((hotel) => {
          return (
            <TouchableOpacity
              key={hotel.id}
              activeOpacity={0.8}
              style={styles.HotelContainer}
            >
              <View style={styles.imageContainer}>
                <Image source={img} style={styles.image} />
              </View>
              <View style={styles.HotelInfo}>
                <Text
                  style={styles.hotelTitle}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {hotel.title}
                </Text>
                <StarRating rating={hotel.rating} size={18} color="#4F718A" />
                <View style={styles.ratingview}>
                  <Text style={styles.ratingPoints}>{hotel.rating}</Text>
                  <Text style={styles.ratingcommunt}>
                    {hotel.ratingDescription}
                  </Text>
                </View>
                <View style={styles.PriceContainer}>
                  <Text style={styles.nightPrice}>{hotel.nightPrice}</Text>
                  <Text style={styles.price}>{hotel.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  Filters: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 6,
    alignItems: "center",
  },
  filterHotel: {
    height: 35,
    marginHorizontal: 8,
    backgroundColor: "#EEF1F4",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  activeButton: {
    backgroundColor: "#4F718A",
  },
  filterText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  HotelContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#EEF1F4",
    borderRadius: 6,
    overflow: "hidden",
    height:145,
  },
  ScrollHotel: {
    height: "100%",
  },
  imageContainer: {
    width: "35%", // 30% of the parent container width
    justifyContent: "center",
    alignItems: "flex-start",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    overflow: "hidden", // Ensures rounded corners
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    // aspectRatio: 1, // Not needed if height is full and resizeMode is set to cover
  },
  HotelInfo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "65%",
  },
  hotelTitle: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 3,
  },
  ratingview: {
    flexDirection: "row",
    paddingVertical: 8,
    alignItems: "center",
  },
  ratingPoints: {
    backgroundColor: "#4F718A",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    color: "#fff",
    fontWeight: "400",
  },
  ratingcommunt: {
    paddingHorizontal: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(0,0,0,0.7)",
  },
  PriceContainer: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  nightPrice: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(0,0,0,0.8)",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4F718A",
  },
});

export default HotelSearchResults;

const hotelData = [
  {
    id: 1,
    title: "Luxury Suite in Downtown",
    rating: 4.8,
    ratingDescription: "Superb",
    nightPrice: "per night",
    price: "$450",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 2,
    title: "Cozy Cottage by the Lake",
    rating: 4.6,
    ratingDescription: "Excellent",
    nightPrice: "per night",
    price: "$320",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 3,
    title: "Modern Apartment in City Center",
    rating: 4.7,
    ratingDescription: "Wonderful",
    nightPrice: "per night",
    price: "$500",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 4,
    title: "Beachside Bungalow",
    rating: 4.9,
    ratingDescription: "Exceptional",
    nightPrice: "per night",
    price: "$600",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 5,
    title: "Rustic Cabin in the Woods",
    rating: 4.4,
    ratingDescription: "Very Good",
    nightPrice: "per night",
    price: "$250",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 6,
    title: "Charming Villa with Pool",
    rating: 4.5,
    ratingDescription: "Excellent",
    nightPrice: "per night",
    price: "$550",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 7,
    title: "Elegant Suite Overlooking the Park",
    rating: 4.3,
    ratingDescription: "Very Good",
    nightPrice: "per night",
    price: "$470",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 8,
    title: "Historic Inn with Modern Amenities",
    rating: 4.2,
    ratingDescription: "Good",
    nightPrice: "per night",
    price: "$390",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 9,
    title: "Boutique Hotel in the Heart of the City",
    rating: 4.7,
    ratingDescription: "Wonderful",
    nightPrice: "per night",
    price: "$420",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 10,
    title: "Secluded Mountain Retreat",
    rating: 4.6,
    ratingDescription: "Excellent",
    nightPrice: "per night",
    price: "$360",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 11,
    title: "Luxurious Penthouse Suite",
    rating: 4.8,
    ratingDescription: "Superb",
    nightPrice: "per night",
    price: "$700",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 12,
    title: "Chic Loft with City Views",
    rating: 4.5,
    ratingDescription: "Excellent",
    nightPrice: "per night",
    price: "$490",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 13,
    title: "Quaint Bed and Breakfast",
    rating: 4.3,
    ratingDescription: "Very Good",
    nightPrice: "per night",
    price: "$280",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 14,
    title: "Art Deco Hotel by the Beach",
    rating: 4.6,
    ratingDescription: "Excellent",
    nightPrice: "per night",
    price: "$610",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 15,
    title: "Urban Studio Apartment",
    rating: 4.4,
    ratingDescription: "Very Good",
    nightPrice: "per night",
    price: "$310",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 16,
    title: "Charming Country House",
    rating: 4.5,
    ratingDescription: "Excellent",
    nightPrice: "per night",
    price: "$330",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 17,
    title: "Modern Hotel with Rooftop Bar",
    rating: 4.7,
    ratingDescription: "Wonderful",
    nightPrice: "per night",
    price: "$520",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 18,
    title: "Cozy Apartment Near the Beach",
    rating: 4.2,
    ratingDescription: "Good",
    nightPrice: "per night",
    price: "$280",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 19,
    title: "Luxury Resort with Ocean Views",
    rating: 4.9,
    ratingDescription: "Exceptional",
    nightPrice: "per night",
    price: "$750",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
  {
    id: 20,
    title: "Spacious Condo in Downtown",
    rating: 4.3,
    ratingDescription: "Very Good",
    nightPrice: "per night",
    price: "$430",
    imageUrl: require("../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg"),
  },
];
