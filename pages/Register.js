import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView ,TouchableOpacity} from 'react-native';
import img from '../assets/airplane.png'

const Register = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={img} style={styles.image} />
            </View>
            <Text>Explore the app</Text>
            <Text>NoW your finances are in one place and always under control</Text>
            <TouchableOpacity style={styles.registerbtn}>
                <Text>fg</Text>
                <Text>Contine with google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerbtn}>
                <Text>fg</Text>
                <Text>Contine with google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerbtn}>
                <Text>fg</Text>
                <Text>Contine with google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerbtn}>
                <Text>fg</Text>
                <Text>Contine with google</Text>
            </TouchableOpacity>
            <View style={styles.registerBtnContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "top",
        justifyContent: "left",
      },
      imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom:60,
      },
      image: {
        width: 300,
        height: 380,
      },
      registerbtn:{
        height:50,
        backgroundColor:"red",
        marginHorizontal:20,
        borderRadius:30,
        marginVertical:6,
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
        color: "#333",
      },
      signUpText: {
        fontFamily: "Inter",
        fontSize: 14,
        color: "#007BFF",
        marginLeft: 5,
      },
});

export default Register;
