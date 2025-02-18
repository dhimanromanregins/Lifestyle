// navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/splash/splashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ForgetOtpScreen from '../screens/auth/ForgetOtpScreen';
import ChangePassword from '../screens/auth/ChangePassword';
import ResetSuccessScreen from '../screens/auth/ResetSuccessScreen';
import ForgetPassword from '../screens/auth/ForgetPassword';
import AuthDashboard from '../screens/auth/AuthDashboard';
import RegisterScreen from '../screens/auth/register/RegisterScreen';
import RegisterPhase1 from '../screens/auth/register/RegisterPhase1';
import RegisterPhase2 from '../screens/auth/register/RegisterPhase2';
import RegisterPhase3 from '../screens/auth/register/RegisterPhase3';
import RegisterPhase4 from '../screens/auth/register/RegisterPhase4';
import RegisterPhase5 from '../screens/auth/register/RegisterPhase5';
import RegisterPhase6 from '../screens/auth/register/RegisterPhase6';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }}  />
        <Stack.Screen name="ForgetOtpScreen" component={ForgetOtpScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }}  />
        <Stack.Screen name="ResetSuccessScreen" component={ResetSuccessScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="AuthDashboard" component={AuthDashboard} options={{ headerShown: false }}  />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="RegisterPhase1" component={RegisterPhase1} options={{ headerShown: false }}  />
        <Stack.Screen name="RegisterPhase2" component={RegisterPhase2} options={{ headerShown: false }}  />
        <Stack.Screen name="RegisterPhase3" component={RegisterPhase3} options={{ headerShown: false }}  />
        <Stack.Screen name="RegisterPhase4" component={RegisterPhase4} options={{ headerShown: false }}  />
        <Stack.Screen name="RegisterPhase5" component={RegisterPhase5} options={{ headerShown: false }}  />
        <Stack.Screen name="RegisterPhase6" component={RegisterPhase6} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
