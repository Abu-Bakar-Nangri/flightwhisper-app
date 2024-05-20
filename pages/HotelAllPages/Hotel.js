import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Hotel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hotel Screen</Text>
      <Text style={styles.content}>This is a simple React Native screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f5f5f5",
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

export default Hotel;
