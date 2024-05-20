import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchBar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Dashboard from "./Dashboard";
import ForgetPassword from "./CredentailsAllPages/ForgetPassword";
import History from "./History";
import Login from "./CredentailsAllPages/Login";
import PasswordChanged from "./CredentailsAllPages/PasswordChanged";
import Profile from "./Profile";
import Register from "./CredentailsAllPages/Register";
import ResetPassword from "./CredentailsAllPages/ResetPassword";
import Ticket from "./FlightAllPages/Ticket";
import VerifyOTP from "./CredentailsAllPages/VerifyOTP";
import Flight from "./FlightAllPages/Flight";
import Hotel from "./HotelAllPages/Hotel";
import PopularDestination from "./HotelAllPages/PopularDestination";
import DestinationDetails from "./HotelAllPages/DestinationDetails";
import HelpCenter from "./HelpandInfoApp/HelpCenter";
import Security from "./HelpandInfoApp/Security";
import RegisterwithEmail from "./CredentailsAllPages/RegisterwithEmail";
import PaymentMethods from "./HelpandInfoApp/PaymentMethod";
import AboutUs from "./HelpandInfoApp/AboutUs";
import ContactUs from "./HelpandInfoApp/ContactUs";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("email");
      const storedPassword = await AsyncStorage.getItem("password");

      if (storedEmail && storedPassword) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error checking authentication status:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "Dashboard" : "Login"}
      >
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Flight"
          component={Flight}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            headerTitle: "Forget Password",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F718A",
            },
          }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hotel"
          component={Hotel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordChanged"
          component={PasswordChanged}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            headerTitle: "Reset Password",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F718A",
            },
          }}
        />
        <Stack.Screen
          name="Ticket"
          component={Ticket}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyOTP"
          component={VerifyOTP}
          options={{
            headerTitle: "Verify OTP",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F718A",
            },
          }}
        />

        <Stack.Screen
          name="PopularDestination"
          component={PopularDestination}
          options={{
            headerTitle: "Popular Destination",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F718A",
            },
          }}
        />
        <Stack.Screen
          name="DestinationDetails"
          component={DestinationDetails}
          options={{
            headerTitle: "Popular Destination Details",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F718A",
            },
          }}
        />
        <Stack.Screen
          name="HelpCenter"
          component={HelpCenter}
          options={{
            headerTitle: "Help Center",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F718A",
            },
          }}
        />
        <Stack.Screen
          name="Security"
          component={Security}
          options={{
            headerTitle: "Security",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F718A",
            },
          }}
        />
        <Stack.Screen
          name="RegisterwithEmail"
          component={RegisterwithEmail}
          options={{
            headerTitle: "Register with Email",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F718A",
            },
          }}
        />
        <Stack.Screen
          name="PaymentMethods"
          component={PaymentMethods}
          options={{
            headerTitle: "Payment Methods",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F718A",
            },
          }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            headerTitle: "About Us",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F718A",
            },
          }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            headerTitle: "Contact Us",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F718A",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
