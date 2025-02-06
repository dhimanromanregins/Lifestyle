import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Animated, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);

  // Create animated values for fade and scale
  const fadeAnim = new Animated.Value(0); 
  const scaleAnim = new Animated.Value(0.5); // Initial scale

  useEffect(() => {
    // Fade and scale animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,  // Full scale
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      navigation.replace('AuthDashboardScreen'); 
    }, 3000); 
  }, [fadeAnim, scaleAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.logoContainer, 
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
        ]}
      >
        <Image
          source={require('../../../assets/logo/logo.png')}  
          style={styles.logo}
        />
        </Animated.View>
        <ActivityIndicator size="large" color="#00B0B9" animating={isLoading} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 155,
    marginBottom: "40%",
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;
