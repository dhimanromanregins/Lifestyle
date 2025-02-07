import React, { useState, useRef } from 'react';
import { 
    View, Text, StyleSheet, Image, TextInput, TouchableOpacity, 
    ImageBackground, Modal, Animated, Easing 
} from 'react-native';

const AuthDashboard = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(300)).current; // Initial position (off-screen)

    const openModal = () => {
        setModalVisible(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    };

    const closeModal = () => {
        Animated.timing(slideAnim, {
            toValue: 300,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => setModalVisible(false));
    };

    return (
        <ImageBackground
            source={require('../../../assets/images/background.png')}
            style={styles.container}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/logo/logo.png')} style={styles.logo} />
            </View>

            <TouchableOpacity style={styles.SubmitButton} onPress={openModal}>
                <Text style={styles.submitText}>Login Options</Text>
            </TouchableOpacity>

            <View style={styles.logoContainer2}>
                <Image source={require('../../../assets/images/parent1.png')} style={styles.image2} />
            </View>

            {/* Modal for Login Options */}
            <Modal
                transparent
                visible={modalVisible}
                animationType="none"
                onRequestClose={closeModal}
            >
                <View style={styles.modalOverlay} onTouchEnd={closeModal} />
                <Animated.View style={[styles.modalContainer, { transform: [{ translateY: slideAnim }] }]}>
                    <Text style={styles.modalTitle}>Select Login Method</Text>
                    <TouchableOpacity style={styles.modalButton}>
                        <Text style={styles.modalButtonText} onPress={() => {navigation.navigate('LoginScreen'); closeModal()}}>Login with Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton}>
                        <Text style={styles.modalButtonText}>Login with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={closeModal}>
                        <Text style={styles.closeText}>Cancel</Text>
                    </TouchableOpacity>
                </Animated.View>
            </Modal>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: "25%",
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logoContainer2: {
        alignItems: 'center',
    },
    logo: {
        width: 180,
        height: 224,
    },
    image2: {
        marginTop: 50,
        width: 250,
        height: "80%",
    },
    SubmitButton: {
        position: 'absolute',
        bottom: 30,
        width: "80%",
        backgroundColor: "#00B0B9",
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 10,
        elevation: 6,
        zIndex:1,
    },
    submitText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        elevation: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalButton: {
        width: '90%',
        backgroundColor: "#00B0B9",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 5,
    },
    modalButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    closeText: {
        marginTop: 10,
        fontSize: 14,
        color: "#333",
    },
});

export default AuthDashboard;
