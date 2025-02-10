import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Progress from "react-native-progress";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';

const RegisterPhase4 = ({ navigation }) => {
    const [selectedAge, setSelectedAge] = useState('');
    const [progress, setProgress] = useState(0);

    const handleNextPress = () => {
        console.log("Next button clicked!"); 
        navigation.navigate('RegisterPhase5')
      };

    useEffect(() => {
        if (progress < 0.1) {  // Stop at 10%
          const interval = setInterval(() => {
            setProgress((prev) => (prev + 0.1 > 0.1 ? 0.1 : prev + 0.1));
          }, 500);
          return () => clearInterval(interval);
        }
      }, [progress]);
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={24} color="#008080" />
                </TouchableOpacity>
                
                <Image source={require('../../../../assets/logo/logo2.png')} style={styles.handIcon} />
            </View>
            <Progress.Bar progress={progress} height={13} width={200} color="#E3BD41" />

            <Text style={styles.stepText}>STEP 1</Text>
            <Image source={require('../../../../assets/images/boy1.png')} style={styles.avatar} />
            <Text style={styles.title}>Pick the age of your child</Text>
            <Text style={styles.subtitle}>
                This will help us personalize your child's experience
            </Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedAge}
                    onValueChange={(itemValue) => setSelectedAge(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Pick age range" value="" />
                    <Picker.Item label="1 - 3 years" value="1-3" />
                    <Picker.Item label="4 - 6 years" value="4-6" />
                    <Picker.Item label="7 - 10 years" value="7-10" />
                    <Picker.Item label="11+ years" value="11+" />
                </Picker>
            </View>

            {/* Continue Button */}
           <TouchableOpacity onPress={handleNextPress} style={styles.loginButton}>
                                  <Text style={styles.loginText}>
                          Next <Icon name="arrow-right" size={20} color="#fff" />
                        </Text>
                        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    progressBar: {
        width: '60%',
        height: 6,
        borderRadius: 3,
    },
    handIcon: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
    stepText: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 40,
        marginVertical: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    subtitle: {
        marginTop:10,
        width:'60%',
        fontSize: 14,
        textAlign: 'center',
        color: '#777',
        marginBottom: 20,
    },
    pickerContainer: {

        marginTop:"10%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        backgroundColor: '',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    picker: {
        flex: 1,
        height: 60,
    },
    dropdownIcon: {
        position: 'absolute',
        right: 15,
    },
    continueButton: {
        marginTop: '80%',
        width:"80%",
        backgroundColor: '#00B4D8',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        alignItems: 'center',
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginButton: {
        marginTop:"80%",
        width:"80%",
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
});

export default RegisterPhase4;
