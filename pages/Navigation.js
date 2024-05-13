import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './Dashboard';
import ForgetPassword from './ForgetPassword';
import History from './History';
import Login from './Login';
import PasswordChanged from './PasswordChanged';
import Profile from './Profile';
import Register from './Register';
import ResetPassword from './ResetPassword';
import Ticket from './Ticket';
import VerifyOTP from './VerifyOTP';
import Flight from './Flight';
import Hotel from './Hotel';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
      <Stack.Screen name="Flight" component={Flight} options={{ headerShown: false }}/>
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }}/>
      <Stack.Screen name="History" component={History}/>
      <Stack.Screen name="Hotel" component={Hotel} options={{ headerShown: false }}/>
      <Stack.Screen name="PasswordChanged" component={PasswordChanged} options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }}/>
      <Stack.Screen name="Ticket" component={Ticket} options={{ headerShown: false }}/>
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;