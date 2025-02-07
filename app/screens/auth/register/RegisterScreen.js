import React, { useState, useEffect, useRef } from 'react';
import { 
  View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, 
  Keyboard, ScrollView, Platform, Animated ,Vibration
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const RegisterScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [childName, setChildName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const shakeAnimation = useRef(new Animated.Value(0)).current;

  // Shake animation function
  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
    Vibration.vibrate(500);
  };

  const handleRegister = () => {
    let newErrors = {};

    if (!fullName.trim()) newErrors.fullName = true;
    // if (!childName.trim()) newErrors.childName = true;
    if (!email.trim()) newErrors.email = true;
    if (!password.trim()) newErrors.password = true;
    if (!confirmPassword.trim() || confirmPassword !== password) newErrors.confirmPassword = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      triggerShake(); // Trigger shake animation
      return;
    }

    // Proceed with registration logic
    console.log('Registering:', { fullName, childName, email, password });
    navigation.navigate('RegisterPhase1')
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoContainer}>
          <Image source={require('../../../../assets/logo/logo.png')} style={styles.logo} />
        </View>

        <Animated.View style={[styles.formContainer, { transform: [{ translateX: shakeAnimation }] }]}>
          <Text style={styles.Logintext}>Register</Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={[styles.input, errors.fullName && styles.errorInput]}
            placeholder="Enter your Full Name"
            value={fullName}
            onChangeText={setFullName}
          />

          {/* <Text style={styles.label}>Child Name</Text>
          <TextInput
            style={[styles.input, errors.childName && styles.errorInput]}
            placeholder="Enter your Child Name"
            value={childName}
            onChangeText={setChildName}
          /> */}

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, errors.email && styles.errorInput]}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password</Text>
          <View style={[styles.passwordContainer, errors.password && styles.errorInput]}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon name={passwordVisible ? 'eye' : 'eye-off'} size={20} color="#888" style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Confirm Password</Text>
          <View style={[styles.passwordContainer, errors.confirmPassword && styles.errorInput]}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm your password"
              secureTextEntry={!passwordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon name={passwordVisible ? 'eye' : 'eye-off'} size={20} color="#888" style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.signupLink}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  logoContainer: {
    marginTop:"20%",
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 120,
  },
  formContainer: {
    marginTop:"5%",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  Logintext: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    paddingBottom: "5%"
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 45,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    padding: 10,
    color: '#EE7168'
  },
  loginButton: {
    backgroundColor: "#00B0B9",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
    elevation: 6,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  signupText: {
    fontSize: 14,
    color: "#555",
  },
  signupLink: {
    fontSize: 14,
    color: "#009688",
    fontWeight: "bold",
  },
  errorInput: {
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default RegisterScreen;
