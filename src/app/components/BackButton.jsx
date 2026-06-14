import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function BackButton({ navigation, onPress, label = "Voltar" }) {
    const handlePress = () => {
        if (onPress) {
            onPress();
            return;
        }

        if (navigation?.goBack) {
            navigation.goBack();
            return;
        }

        router.back();
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#14C2E5",
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 10,
        marginLeft: 30,
    },
    text: {
        color: "#FFF",
        fontWeight: "400",
    },
});