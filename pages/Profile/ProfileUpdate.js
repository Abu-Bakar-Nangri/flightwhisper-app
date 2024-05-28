import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <Text >Profile Edit</Text>
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
