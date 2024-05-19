import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ForgetPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");

const handleForgetPassword = ()=>{
    navigation.navigate('VerifyOTP')
}

const handleLogin = () => {
    // Reset navigation stack to Login screen
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name="arrow-left"
                    size={24}
                    color="#000000"
                    style={styles.backIcon}
                />
            </TouchableOpacity>
            <Text style={styles.forgetTitle}>Forgot password?</Text>
            <Text style={styles.forgetSubTitle}>Don't worry! it happens. Please enter the email or phone number associated with your account.</Text>
            <View style={styles.emailview}>
                <Text style={styles.email}>Email address or number</Text>
                <TextInput
                    style={styles.enteremail}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email your email address or number"
                />
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.sendCodebtn} onPress={handleForgetPassword}>
                <Text style={styles.sendCodetext}>Send code</Text>
            </TouchableOpacity>
            <View style={styles.rememberBtnContainer}>
                <Text style={styles.rememberText}>Remember password?</Text>
                <TouchableOpacity onPress={handleLogin} activeOpacity={1}>
                    <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'left',
        backgroundColor: "#f5f5f5",
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 20,
        marginVertical: 40,
    },
    backIcon: {
        padding: 2
    },
    forgetTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingTop: 12,
        paddingBottom: 6,
        paddingHorizontal: 20,
    },
    forgetSubTitle: {
        fontSize: 16,
        textAlign: 'left',
        paddingBottom: 20,
        paddingHorizontal: 20,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    emailview: {
        paddingHorizontal: 20,
        paddingVertical: 3,
    },
    email: {
        fontSize: 14,
        paddingVertical: 6,
        fontFamily: "Inter",
        color: "#000000",
    },
    icon: {
        marginHorizontal: 170,
        marginTop: -40,
    },
    enteremail: {
        borderColor: "#D8DADC",
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        height: 55,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    sendCodebtn: {
        height: 55,
        backgroundColor: "#4F718A",
        borderRadius: 6,
        marginHorizontal: 20,
        marginVertical: 32,
    },
    sendCodetext: {
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 14,
        color: "#ffffff",
    },
    rememberBtnContainer: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 20,
    },
    rememberText: {
        fontFamily: "Inter",
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    loginText: {
        fontFamily: "Inter",
        fontSize: 14,
        color: "#000000",
        marginLeft: 5,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
});

export default ForgetPassword;
