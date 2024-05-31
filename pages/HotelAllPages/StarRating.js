import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo, otherwise adjust the import

const StarRating = ({ rating, size = 20, color = 'gold' }) => {
  const filledStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - filledStars);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={size} color={color} />);
    }

    if (halfStars === 1) {
      stars.push(<Ionicons key="half" name="star-half" size={size} color={color} />);
    }

    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default StarRating;
