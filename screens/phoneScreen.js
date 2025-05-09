import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import call from 'react-native-phone-call';

export default function PhoneScreen() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const makePhoneCall = () => {
        if (!phoneNumber) {
            Alert.alert("Erro", "Por favor, insira um número de telefone.");
            return;
        }

        const args = {
            number: phoneNumber,
            prompt: false // Set to false to make the call without prompt
        };

        call(args).catch(console.error);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fazer uma ligação</Text>
            <TextInput
                style={styles.input}
                keyboardType='phone-pad'
                placeholder='Digite o número'
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <Button title='Ligar' onPress={makePhoneCall} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2', 
    },
    title: {
        fontSize: 26,
        marginBottom: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginBottom: 18,
        borderRadius: 8,
        fontSize: 16,
        color: '#333',
    },
});
