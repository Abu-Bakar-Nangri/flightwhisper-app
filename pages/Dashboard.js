import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Dimensions, Modal, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';
import img from '../assets/person.png'

const Dashboard = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.profiledata}>
                    <View style={styles.headerContainer}>
                        <View style={styles.headerData}>
                            <TouchableOpacity style={styles.imgContainer} onPress={() => setModalVisible(true)}>
                                <Image source={img} style={styles.image} resizeMode='cover' />
                            </TouchableOpacity>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    setModalVisible(false);
                                }}>
                                <View style={styles.modalContainer}>
                                    <Image source={img} style={styles.fullScreenImage} resizeMode='contain' />
                                    <TouchableOpacity
                                        style={styles.closeButton}
                                        onPress={() => setModalVisible(false)}
                                    >
                                        <MaterialCommunityIcons name="close" size={30} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                            <View>
                                <Text style={styles.userName}>Abu Bakar Siddique</Text>
                                <Text style={styles.userEmail}>abububakarnangri@gmail.com</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.bellContainer}>
                            <MaterialCommunityIcons
                                name={"bell"}
                                size={23}
                                color="#f5f5f5"
                                style={styles.bellicon}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.DashboardTitle}> Book Your Flight Ticket</Text>
                </View>
                <View style={styles.flightSerach}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
                <View style={styles.H}>
                    <TextInput
                        style={styles.enteremail}
                        placeholder="Enter email or number" />
                </View>
            </ScrollView>
            <View style={styles.registerBtnContainer}>
            <TouchableOpacity style={styles.hfhg}>
                            <MaterialCommunityIcons
                                name={"bell"}
                                size={23}
                                color="#000"
                                style={styles.gf}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hfhg}>
                            <MaterialCommunityIcons
                                name={"bell"}
                                size={23}
                                color="#000"
                                style={styles.gf}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hfhg}>
                            <MaterialCommunityIcons
                                name={"bell"}
                                size={23}
                                color="#000"
                                style={styles.gf}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hfhg}>
                            <MaterialCommunityIcons
                                name={"bell"}
                                size={23}
                                color="#000"
                                style={styles.gf}
                            />
                        </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'left',
        backgroundColor: '#fff'
    },
    profiledata: {
        backgroundColor: '#4F718A',
        marginVertical: 25,
        height: 250,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 20
    },
    headerData: {
        flexDirection: 'row',
    },
    imgContainer: {
        width: 60,
        height: 60,
        borderColor: '#f9f9f9',
        borderWidth: 2,
        borderRadius: 60,
        marginVertical: 6,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullScreenImage: {
        width: width,
        height: height,
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        borderRadius: 30,
        borderWidth: 2,
    },
    userName: {
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 15,
        paddingTop: 10,
        color: 'rgba(255,255,255,0.9)'
    },
    userEmail: {
        fontSize: 11,
        fontWeight: '400',
        paddingHorizontal: 15,
        color: 'rgba(255,255,255,0.5)'
    },
    bellContainer: {
        width: 35,
        height: 35,
        borderWidth: 1,
        borderRadius: 30,
        marginVertical: 18,
        backgroundColor: '#728DA1',
        borderColor: '#f9f9f9'
    },
    bellicon: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        color: '#f9f9f9'
    },
    DashboardTitle: {
        paddingHorizontal: 20,
        fontSize: 26,
        fontWeight: '400',
        fontFamily: 'Poppins',
        color: '#fff'
    },
    flightSerach: {
        backgroundColor: '#000',
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 6,
        position: 'absolute',
        top: 170,
        width: '90%'
    },
    enteremail: {
        borderColor: "#D8DADC",
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        height: 55,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 4,
    },
    registerBtnContainer: {
        justifyContent:'space-around',
        flexDirection: "row",
        borderWidth:2,
        height:60,
      },
      hfhg:{
        backgroundColor:'blue',
        width:100,
        justifyContent:'center',
        alignItems:'center'
      },
    registerText: {
        fontFamily: "Inter",
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    signUpText: {
        fontFamily: "Inter",
        fontSize: 14,
        color: "#000000",
        marginLeft: 5,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
});

export default Dashboard;
