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
const imgUrl = "https://images.unsplash.com/photo-1565120130276-9bced9d8c1c8";

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
        <TouchableOpacity activeOpacity={0.8} style={styles.HotelContainer}>
          <View style={styles.imageContainer}>
            <Image source={img} style={styles.image} />
          </View>
          <View style={styles.HotelInfo}>
            <Text>Title</Text>
            <Text>rating</Text>
            <View>
              <Text>9.7</Text>
              <Text>Excellent</Text>
            </View>
            <View style={styles.PriceContainer}>
              <Text>Discount</Text>
              <Text>Price</Text>
            </View>
          </View>
        </TouchableOpacity>
        
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
  },
  ScrollHotel: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "30%", // 30% of the parent container width
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
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  PriceContainer: {
    right: 0,
  },
});

export default HotelSearchResults;
