import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const DestinationDetails = ({route}) => {
    const {destinationData} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{destinationData.title}</Text>
      <Text style={styles.text}>{destinationData.price}</Text>
      <Text style={styles.text}>{destinationData.rating}</Text>
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
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DestinationDetails;
