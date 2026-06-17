import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SenhaScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"          />
        </View>
        <Text style={styles.slogan}>Muito Além do Turismo</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.title}>Cadastre nova senha</Text>

        <Text style={styles.label}>Nova senha</Text>
        <TextInput
          placeholder="Insira sua senha"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <Text style={styles.label}>Confirme a nova Senha</Text>
        <TextInput
          placeholder="Insira sua senha"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />


        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("login")}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>

        </View> 
            
      

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerSection}>
          <Image
            source={require("../assets/images/Logo-footer.png")}
            style={styles.footerLogo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>Muito Além do Turismo</Text>
        </View>
        <View style={styles.footerIcons}>
          <Ionicons name="logo-whatsapp" size={14} color="#EDB63E" />
          <Ionicons name="mail-outline" size={14} color="#EDB63E" />
          <Ionicons name="logo-instagram" size={14} color="#EDB63E" />
          <Ionicons name="logo-facebook" size={14} color="#EDB63E" />
        </View>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  header: {
    height: 70,
    backgroundColor: "#041C32",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  logoContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
  },

  logo: {
    width: 55,
    height: 55,
  },

  slogan: {
    color: "#EDB63E",
    fontStyle: "italic",
    fontSize: 20,
    marginLeft: 50,
  },

  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 80,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#707070",
    marginBottom: 50,
  },

  label: {
    color: "#0A3A66",
    fontWeight: "600",
    marginBottom: 8,
    fontSize: 15,
  },

  input: {
    backgroundColor: "#FFF",
    height: 55,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  button: {
    backgroundColor: "#002B52",
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  link: {
    textAlign: "center",
    color: "#0A3A66",
    marginTop: 12,
    textDecorationLine: "underline",
  },

  registerContainer: {
    marginTop: 50,
    alignItems: "center",
    gap: 15,
  },

  text: {
    color: "#6E6E6E",
    fontSize: 16,
  },

  highlight: {
    color: "#1E88FF",
    fontWeight: "600",
  },

  footer: {
    height: 40,
    backgroundColor: "#041C32",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  footerSection: {
    justifyContent: "center",
    alignItems: "center",
  },

  footerLogo: {
    width: 150,
    height: 100,
    marginTop: 10,
  },

  footerText: {
    color: "#EDB63E",
    fontStyle: "italic",
    fontSize: 12,
  },

  footerIcons: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 40,
    marginRight: 20,
  },
});