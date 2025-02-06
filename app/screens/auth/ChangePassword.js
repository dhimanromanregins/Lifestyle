import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';  // Import eye icons

const ChangePassword = ({ navigation }) => {
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
            navigation.navigate('ResetSuccessScreen');
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
                <Text style={styles.Forgetpasswordtext}>Change Password</Text>

                {/* New Password Field */}
                <Text style={styles.label}>New Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity
                        onPress={() => setPasswordVisible(!passwordVisible)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={passwordVisible ? 'eye-off' : 'eye'}
                            size={24}
                            color="#0781A7"
                        />
                    </TouchableOpacity>
                </View>

                {/* Confirm Password Field */}
                <Text style={styles.label}>Confirm New Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!confirmPasswordVisible}
                    />
                    <TouchableOpacity
                        onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={confirmPasswordVisible ? 'eye' : 'eye-off'}
                            size={24}
                            color="#0781A7"
                        />
                    </TouchableOpacity>
                </View>

                {/* Error Message */}
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

                <TouchableOpacity style={styles.SubmitButton} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Submit</Text>
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
    formContainer: {
        position: 'absolute',
        marginTop: "20%",
        width: "90%",
        height: 300,
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
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
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: "100%",
        height: 45,
        backgroundColor: "#F5F5F5",
        borderRadius: 20,
        paddingHorizontal: 15,
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
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
    errorMessage: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default ChangePassword;
