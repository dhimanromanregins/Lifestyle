import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Progress from "react-native-progress";
import { Picker } from '@react-native-picker/picker';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const RegisterPhase5 = ({ navigation }) => {
    const [selectedAge, setSelectedAge] = useState('');
    const [progress, setProgress] = useState(0);
    const labels = {
        speech: "Speech and communication",
        attention: "Attention span",
        understanding: "Understanding and following of instructions.",
        literacy: "Early concepts, literacy and numeracy",
        social: "Social skills.",
    };
    const handleNextPress = () => {
        console.log("Next button clicked!"); 
        navigation.navigate('RegisterPhase6')
      };

    const [checkedItems, setCheckedItems] = useState({
        speech: true,
        attention: false,
        understanding: true,
        literacy: false,
        social: false,
    });

    const toggleCheckbox = (key) => {
        setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    useEffect(() => {
        if (progress < 0.2) {  // Stop at 10%
            const interval = setInterval(() => {
                setProgress((prev) => (prev + 0.1 > 0.2 ? 0.2 : prev + 0.2));
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
            <View style={styles.progressbarcontainer}>
            <Progress.Bar progress={progress} height={13} width={200} color="#E3BD41" />
            </View>

            <Text style={styles.stepText}>STEP 1</Text>
            <Image source={require('../../../../assets/images/boy1.png')} style={styles.avatar} />
            <Text style={styles.title}>My child’s main needs are:</Text>

            <View style={styles.container1}>
                {Object.entries(checkedItems).map(([key, value], index) => (
                    <TouchableOpacity key={index} style={styles.checkboxContainer} onPress={() => toggleCheckbox(key)}>
                        <Text style={styles.label}>{labels[key]}</Text>
                        <Icon name={value ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color={value ? "#00B6C0" : "gray"} />
                    </TouchableOpacity>
                ))}
            </View>

            {/* Continue Button */}
            <TouchableOpacity onPress={HandleNext} style={styles.loginButton}>
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
    progressbarcontainer:{
        marginTop:"10%"
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
        marginBottom:30
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    label: {
        fontSize: 16,
        color: "#000",
    },
    loginButton: {
        marginTop: "40%",
        width: "80%",
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

export default RegisterPhase5;
