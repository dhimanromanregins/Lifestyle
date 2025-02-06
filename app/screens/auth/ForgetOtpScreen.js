import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Keyboard, Vibration, Animated } from 'react-native';

const ForgetOtpScreen = ({ navigation }) => {
    const inputs = new Array(6).fill(null);
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [otp, setOtp] = useState(Array(6).fill('')); // Track OTP values
    const [isValid, setIsValid] = useState(true); // To check if all fields are filled
    const inputRefs = useRef([]);
    const shakeAnim = useRef(new Animated.Value(0)).current; // Animation reference

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

    const handleTextChange = (text, index) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = text;
        setOtp(updatedOtp);

        // Handle the digit input and move focus to the next field
        if (text.length === 1 && index < inputs.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        // If backspace is pressed and the current input is empty, move focus to the previous input
        if (e.nativeEvent.key === 'Backspace' && index > 0 && !inputRefs.current[index].value) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        const isAllFieldsFilled = otp.every((digit) => digit !== '');
        setIsValid(isAllFieldsFilled);
        if (!isAllFieldsFilled) {
            Vibration.vibrate(500); 
            shakeAnimation(); 
        } else {
            console.log('OTP Submitted:', otp.join(''));
            navigation.navigate('ChangePassword')
        }
    };

    const shakeAnimation = () => {
        // Trigger shake effect
        Animated.sequence([
            Animated.timing(shakeAnim, {
                toValue: 15, // Move the input fields to the right
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
                toValue: -15, // Move the input fields to the left
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
                toValue: 15, // Move the input fields to the right again
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
                toValue: 0, // Reset to original position
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <ImageBackground
            source={require('../../../assets/images/background.png')}
            style={styles.container}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/logo/logo.png')} style={styles.logo} />
            </View>

            <KeyboardAvoidingView style={[styles.formContainer, {bottom: !keyboardVisible ? 20 : 0, top: keyboardVisible && 10}]}>
                <Text style={styles.Forgetpasswordtext}>Forgot Password</Text>

                {/* Email Field */}
                <Text style={styles.label}>We have sent an OTP to your registered email address.</Text>
                <View style={styles.container1}>
                    {inputs.map((_, index) => (
                        <Animated.View
                            key={index}
                            style={[
                                styles.inputContainer,
                                !isValid && otp[index] === '' ?
                                {
                                    transform: [{ translateX: shakeAnim }],
                                }: null
                            ]}
                        >
                            <TextInput
                                style={[
                                    styles.input,
                                    !isValid && otp[index] === '' ? { borderColor: 'red', borderWidth: 2 } : null // Red border if field is empty and form is not valid
                                ]}
                                maxLength={1}
                                keyboardType="numeric"
                                ref={(el) => (inputRefs.current[index] = el)}
                                onChangeText={(text) => handleTextChange(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)} // Detect Backspace
                                value={otp[index]}
                            />
                        </Animated.View>
                    ))}
                </View>

                <TouchableOpacity style={styles.SubmitButton} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Verify</Text>
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
        position: 'relative',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 180,
        height: 220,
    },
    formContainer: {
        position: 'absolute',
        marginTop: "30%",
        width: "90%",
        height: 220,
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
    Forgetpasswordtext: {
        textAlign: 'center',
        fontSize: 18,
        color: "#0781A7",
        fontWeight: '700',
        paddingBottom: "5%",
    },
    label: {
        fontSize: 16,
        textAlign: 'center',
        color: "#000",
        marginBottom: 5,
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: 3,
        // width: 45,
        height: 45,
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        // paddingHorizontal: 15,
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        paddingHorizontal: 15,
        textAlign: 'center',
        fontSize:18,
    },
    SubmitButton: {
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

export default ForgetOtpScreen;
