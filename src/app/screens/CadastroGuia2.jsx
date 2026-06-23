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

export default function CadastroGuia() {
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
        <Text style={styles.title}>Insira mais alguns dados</Text>

        <Text style={styles.label}>Tempo de experiência</Text>
        <TextInput
          placeholder="Informe quanto tempo tem ede experiência"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <Text style={styles.label}>Uma frase sobre você</Text>
        <TextInput
          placeholder="Escreva uma frase que seus turistas irão ver"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />


        <Text style={styles.label}>Idiomas</Text>
                <View style={styles.languageContainer}>
       
          <TextInput
            placeholder="Idioma 1"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />
     
          <TextInput
            placeholder="Idioma 2"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />
        
          <TextInput
            placeholder="Idioma 3"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />
            {/* <View style={styles.line} /> */}
          </View>

        <Text style={styles.label}>Especialidades (indique 3)</Text>
        <View style={styles.languageContainer}>
       
          <TextInput
            placeholder="Especialidade 1"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />
     
          <TextInput
            placeholder="Especialidade 2"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />
        
          <TextInput
            placeholder="Especialidade 3"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />
            {/* <View style={styles.line} /> */}
          </View>


        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("cadastroguia3")}>
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
    paddingTop: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#707070",
    marginBottom: 30,
  },

  label: {
    color: "#0A3A66",
    fontWeight: "600",
    marginBottom: 8,
    fontSize: 15,
    marginTop: 16,
  },

  input: {
    backgroundColor: "#FFF",
    height: 30,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
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
    marginTop: 30
    ,
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

  languageContainer: {
  marginTop: 1,
},

languageRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 5
  ,
},

checkbox: {
  width: 15,
  height: 15,
  borderWidth: 2,
  borderColor: "#000",
  marginRight: 15,
},

languageText: {
  fontSize: 15,
  color: "#0A3A66",
},

line: {
  flex: 1,
  height: 1,
  backgroundColor: "#777",
  marginLeft: 10,
},
});