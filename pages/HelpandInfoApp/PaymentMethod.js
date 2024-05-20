import React from "react";
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native";

const PaymentMethods = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Payment Methods</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>1. Credit Card</Text>
        <Text>
          - Pay securely using your credit card. Enter your card details during
          checkout to complete your purchase.
          Additional Info: Accepted cards include Visa, Mastercard, and American Express.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>2. PayPal</Text>
        <Text>
          - Use your PayPal account to make fast and secure payments. Simply log
          in to your PayPal account during checkout.
          Additional Info: Supports international transactions and buyer protection.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>3. Apple Pay</Text>
        <Text>
          - Pay with ease using Apple Pay on supported devices. Simply authorize
          the payment using Touch ID or Face ID.
          Additional Info: Only available on Apple devices with Touch ID or Face ID.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>4. Google Pay</Text>
        <Text>
          - Make quick and secure payments with Google Pay. Use your saved cards
          from your Google account for a seamless checkout.
          Additional Info: Available on Android devices and supports loyalty programs.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>5. EasyPaisa</Text>
        <Text>
          - Pay conveniently using EasyPaisa. Transfer funds from your EasyPaisa
          account during checkout.
          Additional Info: Popular payment method in Pakistan with widespread acceptance.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>6. JazzCash</Text>
        <Text>
          - Make payments with JazzCash. Use your JazzCash account to complete
          transactions securely.
          Additional Info: Leading mobile wallet in Pakistan.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>7. Stripe</Text>
        <Text>
          - Process payments securely with Stripe's powerful payment processing
          platform. Accept all major credit and debit cards.
          Additional Info: Offers customizable checkout experiences and fraud prevention tools.
        </Text>
      </View>

      <Text style={styles.footer}>
        We support multiple payment methods to provide you with a seamless
        checkout experience. Choose the payment method that suits you best!
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

export default PaymentMethods;
