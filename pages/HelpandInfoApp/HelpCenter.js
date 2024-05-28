import React from "react";
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native";

const HelpCenter = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Flight Booking Help Center</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>1. Booking Process:</Text>
        <Text>- Visit our website or open our mobile app.</Text>
        <Text>
          - Enter your departure and arrival cities, along with your travel
          dates.
        </Text>
        <Text>- Select your preferred flight from the available options.</Text>
        <Text>
          - Enter passenger details, including names and contact information.
        </Text>
        <Text>
          - Choose any additional services or preferences, such as seat
          selection or meal options.
        </Text>
        <Text>- Review your booking details and proceed to payment.</Text>
        <Text>
          - Complete the payment process using your preferred payment method.
        </Text>
        <Text>
          - Receive a confirmation email or SMS with your booking details.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>2. Managing Your Booking:</Text>
        <Text>- Visit our website and log in to your account.</Text>
        <Text>
          - Navigate to the "My Bookings" or "Manage Booking" section.
        </Text>
        <Text>- Select the booking you wish to manage.</Text>
        <Text>
          - View booking details and options for modification or cancellation.
        </Text>
        <Text>
          - Follow the prompts to make changes or cancel your booking.
        </Text>
        <Text>
          - Review any change fees or cancellation penalties that may apply.
        </Text>
        <Text>- Confirm your changes or cancellation.</Text>
        <Text>
          - Receive a confirmation email or SMS for any modifications made.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>3. Baggage Allowance:</Text>
        <Text>
          - Check your ticket or booking confirmation for information on baggage
          allowance.
        </Text>
        <Text>
          - Review our website or app for specific baggage policies and
          restrictions.
        </Text>
        <Text>
          - Pack your luggage according to the allowed weight and size limits.
        </Text>
        <Text>
          - Consider purchasing additional baggage allowance if needed.
        </Text>
        <Text>- Arrive at the airport early to check-in your baggage.</Text>
        <Text>
          - Pay any excess baggage fees at the airport, if applicable.
        </Text>
        <Text>- Collect your baggage upon arrival at your destination.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>4. Flight Status and Schedule:</Text>
        <Text>- Check your flight status using our website or mobile app.</Text>
        <Text>
          - Receive real-time updates on any changes to your flight schedule.
        </Text>
        <Text>
          - View detailed information about your flight, including departure and
          arrival times.
        </Text>
        <Text>
          - Stay informed about any delays, cancellations, or diversions.
        </Text>
        <Text>
          - Contact our customer support team for assistance if needed.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>5. Travel Documents:</Text>
        <Text>
          - Ensure you have a valid passport and any required visas for your
          destination.
        </Text>
        <Text>
          - Check entry requirements for your destination country well in
          advance.
        </Text>
        <Text>
          - Verify any additional travel documents required, such as travel
          insurance or health certificates.
        </Text>
        <Text>- Complete online check-in procedures, if available.</Text>
        <Text>
          - Carry printed or electronic copies of your travel documents for easy
          access.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>6. Refunds and Compensation:</Text>
        <Text>
          - Review our refund policy for information on eligibility and refund
          processes.
        </Text>
        <Text>
          - Submit a refund request through our website or contact our customer
          support team.
        </Text>
        <Text>
          - Provide necessary documentation, such as booking details and proof
          of payment.
        </Text>
        <Text>
          - Wait for processing and confirmation of your refund request.
        </Text>
        <Text>
          - Contact us for compensation in case of flight delays, cancellations,
          or other disruptions.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          7. Frequently Asked Questions (FAQs):
        </Text>
        <Text>
          - Access our FAQs section on our website or mobile app for quick
          answers to common queries.
        </Text>
        <Text>
          - Find information on topics such as booking, baggage, travel
          documents, and more.
        </Text>
        <Text>
          - Browse through troubleshooting tips for resolving common issues
          during the booking process.
        </Text>
        <Text>
          - Contact our customer support team for further assistance if needed.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>8. Contact Us:</Text>
        <Text>
          - Reach out to our customer support team via phone, email, or live
          chat for immediate assistance.
        </Text>
        <Text>
          - Check our operating hours for the availability of customer support.
        </Text>
        <Text>
          - Submit a query or feedback online through our website or mobile app.
        </Text>
        <Text>
          - Receive timely responses and assistance from our dedicated team of
          support representatives.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>9. Travel Tips and Advisories:</Text>
        <Text>
          - Stay updated on travel advisories and health information for your
          destination.
        </Text>
        <Text>
          - Follow recommended travel guidelines and safety precautions.
        </Text>
        <Text>
          - Pack essential items such as hand sanitizers, face masks, and
          disinfectant wipes.
        </Text>
        <Text>
          - Purchase travel insurance to protect yourself against unforeseen
          circumstances.
        </Text>
        <Text>
          - Explore our travel guides and resources for helpful tips and
          recommendations.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>10. Terms and Conditions:</Text>
        <Text>
          - Read and understand our terms and conditions related to booking,
          cancellations, and refunds.
        </Text>
        <Text>
          - Review our privacy policy and data protection information.
        </Text>
        <Text>- Agree to our terms and conditions when making a booking.</Text>
        <Text>
          - Contact our customer support team for clarification or further
          information if needed.
        </Text>
      </View>

      <Text style={styles.footer}>
        We're Here to Help! Our dedicated customer support team is available
        around the clock to assist you with any questions or concerns you may
        have. Whether you're booking your next adventure or need assistance with
        an existing reservation, we're committed to providing you with the best
        possible service. Safe travels!
      </Text>
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
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  footer: {
    paddingTop: 20,
    paddingBottom: Platform.OS === "ios" ? 50 : 30,
    fontStyle: "italic",
  },
});

export default HelpCenter;
