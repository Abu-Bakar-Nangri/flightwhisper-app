import * as React from "react";
import { StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchBar } from 'react-native-elements';

import Dashboard from "./Dashboard";
import ForgetPassword from "./ForgetPassword";
import History from "./History";
import Login from "./Login";
import PasswordChanged from "./PasswordChanged";
import Profile from "./Profile";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import Ticket from "./Ticket";
import VerifyOTP from "./VerifyOTP";
import Flight from "./Flight";
import Hotel from "./Hotel";
import PopularDestination from "./PopularDestination";
import DestinationDetails from "./DestinationDetails";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
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
          name="Login"
          component={Login}
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
