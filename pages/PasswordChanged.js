import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PasswordChanged = () => {
    const [email, setEmail] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <MaterialCommunityIcons
                name={"checkbox-marked-circle"}
                size={130}
                color="#4F718A"
            />
            <Text style={styles.passwordChangedTitle}>Password changed</Text>
            <Text style={styles.passwordChangedSubTitle}>Your password has been changed succesfully</Text>
            <TouchableOpacity style={styles.passwordChangedbtn} >
                <Text style={styles.passwordChangedtext}>Back to login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    passwordChangedTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop:15,
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    passwordChangedSubTitle: {
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 15,
        paddingHorizontal: 30,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    passwordChangedbtn: {
        width: '85%',
        height: 55,
        backgroundColor: "#4F718A",
        borderRadius: 6,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    passwordChangedtext: {
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 14,
        color: "#ffffff",
    },
});

export default PasswordChanged;
