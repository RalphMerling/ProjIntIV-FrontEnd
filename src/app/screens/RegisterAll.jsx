import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonForm from "../components/ButtonForm";
import LabeledInput from "../components/LabeledInput";

export default function RegisterAll(){
    return (
        <SafeAreaView style={styles.SafeArea}>
            <ScrollView>
                <Text style= {styles.title}>Agora, mais alguns dados</Text>
                <Text style= {styles.title}>sobre você:</Text>
                <View style={styles.form}>
                    <LabeledInput
                    label="CEP"
                    placeholder="Insira seu CEP"
                    />

                    <LabeledInput
                    label="Endereço"
                    placeholder="Insira seu endereço"
                    />

                    <LabeledInput
                    label="Número"
                    placeholder="Insira seu número"
                    />

                    <LabeledInput
                    label="Complemento"
                    placeholder="Insira sseu complemento"
                    />

                    <LabeledInput
                    label="Telefone"
                    placeholder="(00) 00000-0000"
                    />

                    <ButtonForm
                    textButton="Voltar"/>

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
        marginBottom: 10,
    },

    form: {
        width: "100%",
        marginTop: 16,
        paddingHorizontal: 20,
    },
})