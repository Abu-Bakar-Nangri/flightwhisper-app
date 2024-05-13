import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ResetPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [showNewPassword, setNewShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);

    const toggleShowNewPassword = () => {
        setNewShowPassword(!showNewPassword);
    };
    const toggleShowConfirmPassword = () => {
        setConfirmShowPassword(!showConfirmPassword);
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
            <Text style={styles.resetTitle}>Reset password</Text>
            <Text style={styles.resetSubTitle}>Please type something you'll remember</Text>
            <View style={styles.passwordview}>
                <Text style={styles.password}>New password</Text>
                <View style={styles.passwordInputview}>
                    <TextInput
                        secureTextEntry={!showNewPassword}
                        style={styles.enterpassword}
                        placeholder="must be 8 characters"
                    />
                    <MaterialCommunityIcons
                        name={showNewPassword ? "eye-off" : "eye"}
                        size={24}
                        color="#aaa"
                        style={styles.icon}
                        onPress={toggleShowNewPassword}
                    />
                </View>
            </View>
            <View style={styles.passwordview}>
                <Text style={styles.password}>Confirm new password</Text>
                <View style={styles.passwordInputview}>
                    <TextInput
                        secureTextEntry={!showConfirmPassword}
                        style={styles.enterpassword}
                        placeholder="repeat password"
                    />
                    <MaterialCommunityIcons
                        name={showConfirmPassword ? "eye-off" : "eye"}
                        size={24}
                        color="#aaa"
                        style={styles.icon}
                        onPress={toggleShowConfirmPassword}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.resetbtn} >
                <Text style={styles.resettext}>Reset password</Text>
            </TouchableOpacity>
            <View style={styles.rememberBtnContainer}>
                <Text style={styles.rememberText}>Already have an account?</Text>
                <TouchableOpacity>
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
        backgroundColor: '#fff',
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
    resetTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingTop: 12,
        paddingBottom: 6,
        paddingHorizontal: 20,
    },
    resetSubTitle: {
        fontSize: 16,
        textAlign: 'left',
        paddingBottom: 12,
        paddingHorizontal: 20,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    passwordview: {
        paddingHorizontal: 20,
        paddingVertical: 3,
    },
    password: {
        fontSize: 14,
        paddingVertical: 6,
        fontFamily: "Inter",
        color: "#000000",
    },
    passwordInputview: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    icon: {
        marginRight: 20, // Adjust margin to create space between text and icon
        marginLeft: -40
    },
    enterpassword: {
        flex: 1, // Allow the TextInput to grow to take available space
        borderColor: "#D8DADC",
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        height: 55,
        paddingHorizontal: 16,
        fontSize: 16,
    },

    resetbtn: {
        height: 55,
        backgroundColor: "#4F718A",
        borderRadius: 6,
        marginHorizontal: 20,
        marginVertical: 32,
    },
    resettext: {
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

export default ResetPassword;
