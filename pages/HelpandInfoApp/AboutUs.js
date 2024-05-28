import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        <FontAwesome name="info-circle" size={24} /> About Us
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          <FontAwesome name="bullseye" size={18} /> Our Mission
        </Text>
        <Text>
          Our mission at FlightBook is to provide seamless and convenient flight
          booking experiences for travelers worldwide. We strive to offer a
          user-friendly platform that empowers travelers to explore
          destinations, compare flight options, and book their journeys with
          ease. Our aim is to make travel planning simpler, faster, and more
          accessible for everyone.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          <FontAwesome name="eye" size={18} /> Our Vision
        </Text>
        <Text>
          Our vision is to become the leading online platform for flight
          bookings, trusted by travelers for its reliability, efficiency, and
          exceptional service. We aspire to innovate continuously, leveraging
          technology to enhance the travel experience and connect people to
          their destinations seamlessly. We envision a world where travel is
          effortless and accessible to all, and we are committed to realizing
          this vision every day.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          <FontAwesome name="suitcase" size={18} /> Our Services
        </Text>
        <Text>
          - Flight Booking: Discover and book flights to destinations around the
          globe with our intuitive booking platform.
          {"\n\n"}- Hotel Reservations: Enhance your travel experience by
          reserving accommodations at your destination through FlightBook.
          {"\n\n"}- Travel Insurance: Ensure peace of mind during your travels
          with our comprehensive travel insurance options.
          {"\n\n"}- Destination Guides: Explore destinations and plan your
          itinerary with our informative destination guides.
          {"\n\n"}- Trip Ideas: Get inspired with our curated trip ideas,
          whether you're looking for a romantic getaway, family adventure, solo
          exploration, or group retreat.
          {"\n\n"}- Popular Destinations: Explore some of the world's most
          popular travel destinations, including Paris, London, New York City,
          Tokyo, and more!
          {"\n\n"}- Popular Countries: Plan your next adventure in popular
          countries like Italy, Spain, Thailand, Australia, and Brazil.
          {"\n\n"}- 24/7 Customer Support: Our dedicated support team is
          available round the clock to assist you with any queries or concerns.
        </Text>
      </View>
      <View style={styles.ffooter}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ffooter: {
    paddingBottom: 20,
  },
});

export default AboutUs;
