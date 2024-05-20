import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Security = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Travel Security Tips</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>1. Secure Your Belongings:</Text>
        <Text>- Keep your passport, tickets, and other important documents in a secure, zippered pocket or a hidden pouch.</Text>
        <Text>- Use luggage locks to secure your bags and prevent unauthorized access.</Text>
        <Text>- Avoid carrying large sums of cash and valuables. Use credit cards or traveler's checks instead.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>2. Stay Aware of Your Surroundings:</Text>
        <Text>- Be vigilant and aware of your surroundings, especially in crowded areas such as airports and train stations.</Text>
        <Text>- Avoid displaying expensive jewelry or electronics that may attract unwanted attention.</Text>
        <Text>- Trust your instincts and avoid situations or people that make you feel uncomfortable.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>3. Secure Your Accommodations:</Text>
        <Text>- Choose reputable accommodations with secure locks and safety features.</Text>
        <Text>- Lock your room or rental property when you're not inside, and use hotel safes for storing valuables.</Text>
        <Text>- Be cautious when sharing personal information with strangers or on public Wi-Fi networks.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>4. Plan Your Transportation:</Text>
        <Text>- Use licensed taxis or reputable transportation services for getting around.</Text>
        <Text>- Avoid traveling alone late at night, and always let someone know your itinerary and expected arrival times.</Text>
        <Text>- Research safe routes and transportation options before traveling to unfamiliar destinations.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>5. Stay Informed:</Text>
        <Text>- Stay updated on travel advisories, security alerts, and local laws and customs for your destination.</Text>
        <Text>- Register with your embassy or consulate before traveling to receive important updates and assistance in case of emergencies.</Text>
        <Text>- Carry emergency contact information and important documents with you at all times.</Text>
      </View>

      <Text style={styles.footer}>Your safety is our priority. Follow these security tips to ensure a safe and enjoyable travel experience.</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#f5f5f5'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footer: {
    marginTop: 20,
    fontStyle: 'italic',
  },
});

export default Security;
