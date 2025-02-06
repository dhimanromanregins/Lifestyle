// navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/splash/splashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import AuthDashboardScreen from '../screens/auth/AuthDashboardScreen';
import ForgetOtpScreen from '../screens/auth/ForgetOtpScreen';
import ChangePassword from '../screens/auth/ChangePassword';
import ResetSuccessScreen from '../screens/auth/ResetSuccessScreen';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="AuthDashboardScreen" component={AuthDashboardScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="ForgetOtpScreen" component={ForgetOtpScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }}  />
        <Stack.Screen name="ResetSuccessScreen" component={ResetSuccessScreen} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
