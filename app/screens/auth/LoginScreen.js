import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Import icons

const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo/logo.png')} style={styles.logo} />
      </View>

      {/* Login Form Container */}
      <View style={styles.formContainer}>
        <Text style={styles.Logintext}>Login</Text>

        {/* Email Field */}
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />

        {/* Password Field */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={20}
              color="#888"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Google Sign-In Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Already Have an Account? */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: "30%",
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 130,
    height: 158,
  },
  formContainer: {
    marginTop: "20%",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    // Android Shadow
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
    color:'#EE7168'
  },
  forgotPassword: {
    textAlign: "right",
    color: "#0097A7",
    fontSize: 14,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#00B0B9",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",  
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0, 
    shadowRadius: 10,  
    elevation: 6,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    backgroundColor: "#fff",
    borderColor: "#DD4B39",
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  googleText: {
    color: "#DD4B39",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
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
});

export default LoginScreen;
