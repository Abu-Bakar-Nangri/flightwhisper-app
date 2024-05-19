import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import img from '../assets/airplane.png'

const Register = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={img} style={styles.image} />
            </View>
            <Text style={styles.registerTitle}>Explore the app</Text>
            <Text style={styles.registerSubTitle}>Now your finances are in one place and always under control</Text>
            <TouchableOpacity style={styles.registerbtn}>
                <MaterialCommunityIcons
                    style={styles.googleIcon}
                    name={"google"}
                    size={28}
                    color="#fff"
                />
                <Text style={styles.btnTxt}> Continue with google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerbtn}>
                <MaterialCommunityIcons
                    style={styles.appleIcon}
                    name={"apple"}
                    size={32}
                    color="#fff"
                />
                <Text style={styles.btnTxt}> Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerbtn}>
                <MaterialCommunityIcons
                    style={styles.emailIcon}
                    name={"email"}
                    size={28}
                    color="#fff"
                />
                <Text style={styles.btnTxt}> Continue with Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerbtn}>
                <MaterialCommunityIcons
                    style={styles.emailIcon}
                    name={"email"}
                    size={28}
                    color="#fff"
                />
                <Text style={styles.btnTxt}> Continue with Number</Text>
            </TouchableOpacity>
            <View style={styles.registerBtnContainer}>
                <Text style={styles.registerText}>Already have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.signUpText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "top",
        justifyContent: "left",
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 60,
    },
    image: {
        width: 300,
        height: 380,
    },
    registerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 22,
        paddingBottom: 4,
        paddingHorizontal: 20,
    },
    registerSubTitle: {
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 25,
        paddingHorizontal: 30,
        fontWeight:'400',
        color:'rgba(0, 0, 0, 0.7)',
    },
    registerbtn: {
        height: 55,
        backgroundColor: "#4F718A",
        marginHorizontal: 20,
        borderRadius: 30,
        marginVertical: 6,
        flexDirection: 'row'
    },
    googleIcon:{
        paddingHorizontal:18,
        paddingVertical:12,
    },
    appleIcon: {
        paddingHorizontal:18,
        paddingVertical:10,
    },
    emailIcon:{
        paddingHorizontal:18,
        paddingVertical:12,
    },
    btnTxt: {
        fontSize: 20,
        fontWeight:'4s00',
        paddingVertical: 12,
        color: '#ffffff'
    },
    registerBtnContainer: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 20,
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
        textDecorationLine:'underline'
    },
});

export default Register;
