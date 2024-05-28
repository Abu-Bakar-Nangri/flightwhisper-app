import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons

const ContactUs = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        <FontAwesome name="envelope" size={24} /> Contact Us
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          <FontAwesome name="map-marker" size={18} /> Address
        </Text>
        <Text>FlightWhisper Inc.</Text>
        <Text>456 Skyline Avenue</Text>
        <Text>New York City, USA</Text>
        <Text>Postal Code: 10001</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          <FontAwesome name="phone" size={18} /> Phone
        </Text>
        <Text>Customer Support: +1 800 123 4567</Text>
        <Text>Booking Assistance: +1 800 987 6543</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          <FontAwesome name="envelope" size={18} /> Email
        </Text>
        <Text>Customer Support: support@flightwhisper.com</Text>
        <Text>Booking Assistance: bookings@flightwhisper.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          <FontAwesome name="clock-o" size={18} /> Operating Hours
        </Text>
        <Text>Customer Support: Monday - Friday: 9:00 AM - 6:00 PM (EST)</Text>
        <Text>Booking Assistance: Monday - Sunday: 24/7</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          <FontAwesome name="twitter" size={18} /> Social Media
        </Text>
        <Text>Follow us on:</Text>
        <Text>Facebook: @flightwhisper</Text>
        <Text>Twitter: @flightwhisper</Text>
        <Text>Instagram: @flightwhisper</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          <FontAwesome name="comments" size={18} /> Feedback
        </Text>
        <Text>
          We value your feedback! If you have any suggestions or concerns,
          please feel free to contact us through any of the above channels.
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
    flexDirection: "row", // Align icon and text horizontally
    alignItems: "center", // Center vertically
  },
  ffooter: {
    paddingBottom: 20,
  },
});

export default ContactUs;
