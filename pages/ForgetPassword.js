import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My App!</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // To make it a circle
  },
});

export default ForgetPassword;
