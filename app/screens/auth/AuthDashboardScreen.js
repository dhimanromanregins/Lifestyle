import React, { useState , useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground,KeyboardAvoidingView, Keyboard } from 'react-native';

const AuthDashboardScreen = ({ navigation }) => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
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
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter your email" />
                <TouchableOpacity style={styles.SubmitButton} onPress={() => navigation.navigate('ForgetOtpScreen')}>
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
        position:'absolute',
        marginTop: "30%",
        width: "90%",
        height:200,
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
        color:"#0781A7",
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

export default AuthDashboardScreen;
