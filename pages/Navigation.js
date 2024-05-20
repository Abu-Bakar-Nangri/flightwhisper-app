
import * as React from "react";
import { StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchBar } from 'react-native-elements';

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
import HelpCenter from "./HelpCenter";
import Security from "./Security";
import RegisterwithEmail from "./CredentailsAllPages/RegisterwithEmail";

import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');

      if (storedEmail && storedPassword) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error checking authentication status:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "Dashboard" : "Login"}>
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
          options={{ headerShown: false }}
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ticket"
          component={Ticket}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyOTP"
          component={VerifyOTP}
          options={{ headerShown: false }}
        />
       

        <Stack.Screen
          name="PopularDestination"
          component={PopularDestination}
          options={({ navigation }) => ({
            header: () => (
              <SearchBar
                placeholder="Search..."

                lightTheme
                round
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInputContainer}
              />
            ),
          })}
        />
        <Stack.Screen
          name="DestinationDetails"
          component={DestinationDetails}
          options={{ title: "Popular Destinations Details" }}
        />
         <Stack.Screen
          name="HelpCenter"
          component={HelpCenter}
          options={{ title: "Help Center" }}
        />
        <Stack.Screen
          name="Security"
          component={Security}
          options={{ title: "Security Info" }}
        />
         <Stack.Screen
          name="RegisterwithEmail"
          component={RegisterwithEmail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  // Existing styles...

  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingVertical: 20,
    marginTop: 15,
    paddingHorizontal: 20, // Adjust as needed
  },
  searchBarInputContainer: {
    backgroundColor: '#fff',
  },
});

export default Navigation;
