import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Animated, Vibration } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterPhase3 = ({ navigation }) => {
    const [ChildName, setChildName] = useState('');
    const [errors, setErrors] = useState({});
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const shakeAnimation = useRef(new Animated.Value(0)).current;

    const triggerShake = () => {
        Animated.sequence([
            Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
        ]).start();
        Vibration.vibrate(500);
    };

    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
    };

    const handleSubmit = () => {
        let newErrors = {};
    
        if (!ChildName.trim()) newErrors.fullName = true;
        if (!selectedAvatar) newErrors.avatar = true;
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length > 0) {
            triggerShake();
            return;
        }
    
        console.log('Registering:', { ChildName, selectedAvatar });
    
        
        navigation.navigate('RegisterPhase4');
    };
    const avatars = [
        { id: 'girl1', src: require('../../../../assets/images/girl1.png') },
        { id: 'girl2', src: require('../../../../assets/images/girl2.png') },
        { id: 'girl3', src: require('../../../../assets/images/girl3.png') },
        { id: 'boy1', src: require('../../../../assets/images/boy1.png') },
        { id: 'boy2', src: require('../../../../assets/images/boy2.png') },
        { id: 'boy3', src: require('../../../../assets/images/boy3.png') }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/logo/logo.png')} style={styles.logo} />
            </View>
            <Text style={styles.label}>My child’s name is</Text>
            <TextInput
                style={[styles.input]}
                placeholder="Enter your Child Name"
                value={ChildName}
                onChangeText={setChildName}
            />

            <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>Select Avatar</Text>
                <View style={styles.avatar}>
                    {avatars.map((avatar) => (
                        <TouchableOpacity key={avatar.id} onPress={() => handleAvatarSelect(avatar.id)} style={styles.avatarWrapper}>
                            <Image source={avatar.src} style={styles.avatarimg} />
                            {selectedAvatar === avatar.id && (
                                <View style={styles.tickIcon}>
                                    <Icon name="check-circle" size={18} color="green" />
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
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
    },
    logoContainer: {
        marginTop: "25%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    label: {
        textAlign: 'left',
        marginLeft: 10,
        width: "80%",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        width: "80%",
        height: 45,
        backgroundColor: "#F5F5F5",
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    avatarContainer: {
        alignItems: 'center',
        width: "80%",
    },
    avatarText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    avatar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 15,
        marginTop: 10,
    },
    avatarWrapper: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarimg: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    tickIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    loginButton: {
        marginTop:"40%",
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

export default RegisterPhase3;
