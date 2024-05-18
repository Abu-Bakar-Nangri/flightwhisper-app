import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;

const PopularDestination = ({ navigation, route }) => {
    const { Destinations } = route.params;
    const [search, setSearch] = useState('');

    const handleDestinationDetails = (destinationData) => {
        navigation.navigate('DestinationDetails', { destinationData });
    };

    const renderDestinationItem = ({ item }) => (
        <TouchableOpacity style={styles.popularCard} onPress={() => handleDestinationDetails(item)}>
            <Image style={styles.popularImage} source={item.img} />
            <View style={styles.destinationInfo}>
                <Text style={styles.destinationRating}>{item.rating}</Text>
                <Text style={styles.destinationName} numberOfLines={1} ellipsizeMode="tail">
                    {item.title}
                </Text>
                <Text style={styles.destinationPrice}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    const filteredDestinations = Destinations.filter(destination =>
        destination.title.toLowerCase().includes(search.toLowerCase())
    );

    const renderTwoItemsInRow = ({ item }) => (
        <View style={styles.rowContainer}>
            <View style={{ flex: 1 }}>
                {renderDestinationItem({ item })}
            </View>
            <View style={{ flex: 1 }}>
                {filteredDestinations.length > 1 && renderDestinationItem({ item: filteredDestinations[1] })}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            
            <FlatList
                data={filteredDestinations}
                renderItem={renderTwoItemsInRow}
                keyExtractor={(item, index) => index.toString()}
                numColumns={1}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    popularCard: {
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: "white",
        borderRadius: 10,
        overflow: "hidden",
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
    popularImage: {
        width: "100%",
        height: 150,
        resizeMode: "cover",
    },
    destinationInfo: {
        padding: 10,
    },
    destinationRating: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 4,
    },
    destinationName: {
        fontSize: 18,
        fontWeight: "500",
    },
    destinationPrice: {
        fontSize: 18,
        color: "#000",
        fontWeight: "600",
    },
    rowContainer: {
        flexDirection: 'row',
        width: windowWidth - 20,
    },
    searchBarContainer: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginBottom: 10,
    },
    searchBarInputContainer: {
        backgroundColor: '#fff',
    },
});

export default PopularDestination;
