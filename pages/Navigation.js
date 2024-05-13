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

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
      <Stack.Screen name="History" component={History}/>
      <Stack.Screen name="PasswordChanged" component={PasswordChanged}/>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="ResetPassword" component={ResetPassword}/>
      <Stack.Screen name="Ticket" component={Ticket}/>
      <Stack.Screen name="VerifyOTP" component={VerifyOTP}/>
      <Stack.Screen name="Login" component={Login} options={{ title:'Login' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;