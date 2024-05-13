import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Flight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flight Screen</Text>
      <Text style={styles.content}>This is a simple React Native screen.</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Flight;
