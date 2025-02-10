import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const RegisterPhase1 = ({ navigation }) => {
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



    const handleSubmit = () => {
        navigation.navigate('RegisterPhase2')
    };

    return (
        <ImageBackground
            source={require('../../../../assets/images/background.png')}
            style={styles.container}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/logo/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.textmain1}>
                <Text style={styles.text1}>What Are Enhanced Life Skills and Why Are They Important?</Text>
            </View>

            <View style={styles.textmain2}>
                <Text style={styles.text2}>Enhanced Life Skills are the life skills {'\n'} that are functional and instrumental to your {'\n'} child's life.</Text>
            </View>

            <View style={styles.textmain3}>
                <Text style={styles.text2}>It aims to nurture your child's strengths and vocational interests and build life skills that are relevant at home.</Text>
            </View>

            <View style={styles.textmain3}>
                <Text style={styles.text1}>Lifeskills for ME</Text>
                <Text style={styles.text2}>empowers you in building  Enhanced Life Skills for your child at home {'\n'}through curated games and contents, and {'\n'}hand's on activities.</Text>
            </View>

             <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                                    <Text style={styles.loginText}>
                            Next <Icon name="arrow-right" size={20} color="#fff" />
                          </Text>
                      
                      </TouchableOpacity>
        </ImageBackground>
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
        width: 100,
        height: 120,
    },
    textmain1:{
        width:"70%",
        justifyContent:'center',
        alignItems:'center'
    },
    text1:{
        color:"#EE7168",
        textAlign:'center',
        fontSize:22,
        fontWeight:700
    },
    textmain2:{
        marginTop:"5%",
        width:"80%",
        justifyContent:'center',
        alignItems:'center'
    },
    text2:{
        fontSize:18,
        textAlign:'center',
        fontWeight:400,

    },
    textmain3:{
        marginTop:"5%",
        width:"80%",
        justifyContent:'center',
        alignItems:'center'
    },
    text2:{
        fontSize:18,
        textAlign:'center',
        fontWeight:500,

    },
    loginButton: {
        backgroundColor: "#00B0B9",
        width:"80%",
        paddingVertical: 12,
        marginTop:"30%",
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
    
});

export default RegisterPhase1;
