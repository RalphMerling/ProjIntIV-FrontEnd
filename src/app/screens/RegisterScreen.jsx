import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonForm from "../components/ButtonForm";
import LabeledInput from "../components/LabeledInput";

export default function RegisterScreen(){
    return (
        <SafeAreaView style={styles.SafeArea}>
            <ScrollView>
                <Text style= {styles.title}>Insira alguns dados básicos:</Text>
                <View style={styles.form}>
                    <LabeledInput
                    label="Nome"
                    placeholder="Digite seu nome completo"
                    />

                    <LabeledInput
                    label="Email"
                    placeholder="Insira seu endereço de email"
                    keyboardType= "email-adress"
                    />

                    <LabeledInput
                    label="Crie uma senha"
                    placeholder="Insira sua senha"
                    secureTextEntry={true}
                    />

                    <LabeledInput
                    label="Repita a senha"
                    placeholder="Insira sua senha"
                    secureTextEntry={true}
                    />

                    <ButtonForm
                    textButton="Avançar"/>
                
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
        color: "#6B6E71",
        marginBottom: 26,
    },

    form: {
        width: "100%",
        marginTop: 16,
        paddingHorizontal: 20,
    },
})