import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const RegisterPhase2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
           <View style={styles.logoContainer}>
                           <Image source={require('../../../../assets/logo/logo.png')} style={styles.logo} />
                       </View>
           

            <Text style={styles.title}>Set up profile for</Text>

            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ChildProfile')}>
                    <View style={styles.circle}>
                        <Image source={require('../../../../assets/images/imgchild.png')} style={styles.icon} />
                    </View>
                    <View style={styles.textStyle}>
                    <Text style={styles.optionText}>Child</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('FamilyProfile')}>
                    <View style={styles.circle}>
                        <Image source={require('../../../../assets/images/imgfamily.png')} style={styles.icon} />
                    </View>
                    <View style={styles.textStyle}>
                    <Text style={styles.optionText}>Family</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Image source={require('../../../../assets/images/buttom.png')} style={styles.cloud} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logoContainer:{
        marginTop:"25%",
        alignItems: 'center',
        justifyContent:'center',

    },
    logo: {
        
        width: 150,
        marginTop:0,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
    option: {
        alignItems: 'center',
    },
    textStyle: {
        position:'absolute',
        marginTop:"90%",
        backgroundColor: "#00B0B9",
        width: 60,
        borderRadius:10,
        height: 25,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', 
        alignContent: 'center',
        lineHeight: 25, 
        color: "#fff", 
        fontWeight: "bold"
    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: '#EE7168',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    icon: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    optionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        
    },
    cloud: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
});

export default RegisterPhase2;
