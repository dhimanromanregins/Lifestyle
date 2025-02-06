import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';  // Import eye icons

const ResetSuccessScreen = ({ navigation }) => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);  // State for password visibility
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password visibility

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            },
        );

        // Cleanup listeners on unmount
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
        } else {
            setErrorMessage('');
            navigation.navigate('LoginScreen');
        }
    };

    return (
        <ImageBackground
            source={require('../../../assets/images/background.png')}
            style={styles.container}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/logo/logo.png')} style={styles.logo} />
            </View>
            <KeyboardAvoidingView style={[styles.formContainer, { bottom: !keyboardVisible ? 20 : 0, top: keyboardVisible && 10 }]}>
                <Text style={styles.Forgetpasswordtext}>Forgot Password</Text>

                {/* New Password Field */}
                <View style={styles.successview}>
                <Image source={require('../../../assets/images/success.png')} style={styles.logo2} />
                
            </View>
            
           
               

                {/* Error Message */}
            

                <TouchableOpacity style={styles.SubmitButton} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Login Screen</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: "50%",
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 180,
        height: 220,
    },
    Forgetpasswordtext: {
        textAlign: 'center',
        fontSize: 18,
        color: "#0781A7",
        fontWeight: '700',
        paddingBottom: "5%",
    },
    logo2:{
        height:100,
        width:200,
        marginLeft:"100%"
    },



    successview:{
        textAlign:'center',
        // alignItems:'center',
        height:35,
        width:35
    },
    formContainer: {
        position: 'absolute',
        marginTop: "20%",
        width: "90%",
        height: 280,
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    
    SubmitButton: {
        marginTop:"40%",
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
    submitText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    
});

export default ResetSuccessScreen;
