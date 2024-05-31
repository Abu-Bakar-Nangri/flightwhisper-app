import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';

const data = [
    { id: '1', airline: 'Airblue', price: '$200', depCity: 'New York', depCityShort: 'NYC', depDate: '09 June 2024', depTime: '08:00 AM', arrCity: 'Los Angeles', arrCityShort: 'LAX', arrDate: '10 June 2024', arrTime: '10:10 AM', time: '2hrs 10mins' },
    { id: '2', airline: 'Delta Airlines', price: '$250', depCity: 'Los Angeles', depCityShort: 'LAX', depDate: '15 June 2024', depTime: '12:30 PM', arrCity: 'Chicago', arrCityShort: 'ORD', arrDate: '15 June 2024', arrTime: '04:00 PM', time: '3hrs 30mins' },
    { id: '3', airline: 'United Airlines', price: '$180', depCity: 'Chicago', depCityShort: 'ORD', depDate: '22 June 2024', depTime: '09:15 AM', arrCity: 'Dallas', arrCityShort: 'DFW', arrDate: '22 June 2024', arrTime: '12:00 PM', time: '2hrs 45mins' },
    { id: '4', airline: 'Southwest Airlines', price: '$150', depCity: 'Dallas', depCityShort: 'DFW', depDate: '30 June 2024', depTime: '11:30 AM', arrCity: 'Miami', arrCityShort: 'MIA', arrDate: '30 June 2024', arrTime: '01:30 PM', time: '2hrs' },
    { id: '5', airline: 'American Airlines', price: '$220', depCity: 'Miami', depCityShort: 'MIA', depDate: '05 July 2024', depTime: '03:45 PM', arrCity: 'San Francisco', arrCityShort: 'SFO', arrDate: '05 July 2024', arrTime: '07:00 PM', time: '3hrs 15mins' },
    { id: '6', airline: 'JetBlue Airways', price: '$190', depCity: 'San Francisco', depCityShort: 'SFO', depDate: '12 July 2024', depTime: '10:00 AM', arrCity: 'Seattle', arrCityShort: 'SEA', arrDate: '12 July 2024', arrTime: '02:00 PM', time: '4hrs' },
    { id: '7', airline: 'Alaska Airlines', price: '$210', depCity: 'Seattle', depCityShort: 'SEA', depDate: '18 July 2024', depTime: '08:20 AM', arrCity: 'Denver', arrCityShort: 'DEN', arrDate: '18 July 2024', arrTime: '11:40 AM', time: '3hrs 20mins' },
    { id: '8', airline: 'Frontier Airlines', price: '$170', depCity: 'Denver', depCityShort: 'DEN', depDate: '25 July 2024', depTime: '02:10 PM', arrCity: 'Orlando', arrCityShort: 'MCO', arrDate: '25 July 2024', arrTime: '04:40 PM', time: '2hrs 30mins' },
    { id: '9', airline: 'Spirit Airlines', price: '$160', depCity: 'Orlando', depCityShort: 'MCO', depDate: '01 August 2024', depTime: '06:30 AM', arrCity: 'Las Vegas', arrCityShort: 'LAS', arrDate: '01 August 2024', arrTime: '08:40 AM', time: '3hrs 10mins' },
    { id: '10', airline: 'Allegiant Air', price: '$140', depCity: 'Las Vegas', depCityShort: 'LAS', depDate: '08 August 2024', depTime: '12:15 PM', arrCity: 'Honolulu', arrCityShort: 'HNL', arrDate: '08 August 2024', arrTime: '03:00 PM', time: '3hrs 45mins' },
    { id: '11', airline: 'Hawaiian Airlines', price: '$300', depCity: 'Honolulu', depCityShort: 'HNL', depDate: '15 August 2024', depTime: '08:45 AM', arrCity: 'Boston', arrCityShort: 'BOS', arrDate: '15 August 2024', arrTime: '02:45 PM', time: '5hrs' },
    { id: '12', airline: 'Virgin America', price: '$270', depCity: 'Boston', depCityShort: 'BOS', depDate: '22 August 2024', depTime: '10:20 AM', arrCity: 'Phoenix', arrCityShort: 'PHX', arrDate: '22 August 2024', arrTime: '01:50 PM', time: '3hrs 30mins' },
    { id: '13', airline: 'Frontier Airlines', price: '$180', depCity: 'Phoenix', depCityShort: 'PHX', depDate: '29 August 2024', depTime: '01:00 PM', arrCity: 'Portland', arrCityShort: 'PDX', arrDate: '29 August 2024', arrTime: '03:45 PM', time: '2hrs 45mins' },
    { id: '14', airline: 'Alaska Airlines', price: '$200', depCity: 'Portland', depCityShort: 'PDX', depDate: '06 June 2024', depTime: '09:30 AM', arrCity: 'San Diego', arrCityShort: 'SAN', arrDate: '06 June 2024', arrTime: '11:40 AM', time: '2hrs 10mins' },
    { id: '15', airline: 'JetBlue Airways', price: '$210', depCity: 'San Diego', depCityShort: 'SAN', depDate: '13 June 2024', depTime: '02:20 PM', arrCity: 'Atlanta', arrCityShort: 'ATL', arrDate: '13 June 2024', arrTime: '05:20 PM', time: '3hrs' },
    { id: '16', airline: 'Southwest Airlines', price: '$180', depCity: 'Atlanta', depCityShort: 'ATL', depDate: '20 June 2024', depTime: '08:00 AM', arrCity: 'Washington', arrCityShort: 'DCA', arrDate: '20 June 2024', arrTime: '10:20 AM', time: '2hrs 20mins' },
]
const FlightSearchResult = () => {
    const [activeButton, setActiveButton] = useState(null);

    // Function to handle button press
    const handlePress = (buttonName) => {
        setActiveButton(buttonName);
    };
    const handleItem = (item) => {
        Alert.alert(item.airline);
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal>
                <View style={styles.Filters}>
                   
                <TouchableOpacity activeOpacity={0.9} style={[
                        styles.filerFlight,
                        activeButton === 'Best' && styles.activeButton
                    ]}
                        onPress={() => handlePress('Best')}>
                        <Text style={styles.filterText}>Best</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={[
                        styles.filerFlight,
                        activeButton === 'Cheapest' && styles.activeButton
                    ]}
                        onPress={() => handlePress('Cheapest')}>
                        <Text style={styles.filterText}>Cheapest</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={[
                        styles.filerFlight,
                        activeButton === 'Fastest' && styles.activeButton
                    ]}
                        onPress={() => handlePress('Fastest')}>
                        <Text style={styles.filterText}>Fastest</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={[
                        styles.filerFlight,
                        activeButton === 'Direct' && styles.activeButton
                    ]}
                        onPress={() => handlePress('Direct')}>
                        <Text style={styles.filterText}>Direct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={[
                        styles.filerFlight,
                        activeButton === 'Shortest' && styles.activeButton
                    ]}
                        onPress={() => handlePress('Shortest')}>
                        <Text style={styles.filterText}>Shortest</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((item) => {
                    return (
                        <TouchableOpacity onPress={() => handleItem(item)} activeOpacity={0.8} key={item.id} style={styles.FlightContainer}>
                            <View style={styles.airlineContainer}>
                                <Text style={styles.airlineName}>{item.airline}</Text>
                                <Text style={styles.airlinePrice}>{item.price}</Text>
                            </View>
                            <View style={styles.dashedLine} />
                            <View style={styles.flightinfo}>
                                <View style={styles.depArivInfo}>
                                    <Text style={styles.depCity}>{item.depCity}</Text>
                                    <Text style={styles.depCityShort}>{item.depCityShort}</Text>
                                    <Text style={styles.depDate}>{item.depTime}</Text>
                                    <Text style={styles.depDate}>{item.depDate}</Text>
                                </View>
                                <View style={styles.depArivInfo} >
                                    <MaterialCommunityIcons name='airplane-takeoff' size={24} color={'rgba(0,0,0,0.8)'} />
                                    <Text style={styles.flightTime}>{item.time}</Text>
                                </View>
                                <View style={styles.depArivInfo}>
                                    <Text style={styles.depCity}>{item.arrCity}</Text>
                                    <Text style={styles.depCityShort}>{item.arrCityShort}</Text>
                                    <Text style={styles.depDate}>{item.arrTime}</Text>
                                    <Text style={styles.depDate}>{item.arrDate}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
    },
    Filters: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 6,
        alignItems: 'center'
    },
    filerFlight: {
        height: 35,
        marginHorizontal: 8,
        backgroundColor: '#EEF1F4',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 6,
    },
    activeButton: {
        backgroundColor: '#4F718A',
    },
    filterText: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
    },
    FlightContainer: {
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#EEF1F4',
        borderRadius: 6,
    },

    airlineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    airlineName: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600',
        paddingVertical: 5,
    },
    airlinePrice: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600',
        paddingVertical: 5,
    },
    dashedLine: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        borderStyle: 'dashed',
        marginHorizontal: 30,
        marginVertical: 10,
    },
    flightinfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    depArivInfo: {
        alignItems: 'center'
    },
    depCity: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
    },
    depCityShort: {
        fontSize: 16,
        color: '#000',
        fontWeight: '700',
    },
    depDate: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)'
    },
    flightTime: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        fontWeight: '400'
    },
});

export default FlightSearchResult;


