import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

export default function CadastroGuia() {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Precisamos de permissão para acessar sua galeria.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Precisamos de permissão para acessar sua câmera.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.slogan}>Muito Além do Turismo</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.title}>Agora adicione uma foto</Text>
        <Text style={styles.subtitle}>
          Ela será exibida no seu perfil de guia para os turistas
        </Text>

        {/* Área de foto */}
        <View style={styles.photoArea}>
          {photo ? (
            <Image source={{ uri: photo }} style={styles.photoPreview} />
          ) : (
            <View style={styles.photoPlaceholder}>
              <Ionicons name="person-outline" size={60} color="#AAAAAA" />
            </View>
          )}
        </View>

        {/* Botões de escolha */}
        <View style={styles.optionsRow}>
          <TouchableOpacity style={styles.optionButton} onPress={handlePickImage}>
            <Ionicons name="images-outline" size={20} color="#0A3A66" />
            <Text style={styles.optionText}>Galeria</Text>
          </TouchableOpacity>

          <View style={styles.optionDivider} />

          <TouchableOpacity style={styles.optionButton} onPress={handleTakePhoto}>
            <Ionicons name="camera-outline" size={20} color="#0A3A66" />
            <Text style={styles.optionText}>Câmera</Text>
          </TouchableOpacity>
        </View>

        {photo && (
          <TouchableOpacity style={styles.removeButton} onPress={() => setPhoto(null)}>
            <Text style={styles.removeText}>Remover foto</Text>
          </TouchableOpacity>
        )}


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
    paddingTop: 30,
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#707070",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 20,
    color: "#999",
    textAlign: "center",
    marginBottom: 32,
    marginTop: 10,
  },

  photoArea: {
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: "hidden",
    backgroundColor: "#E8E8E8",
    borderWidth: 2,
    borderColor: "#CCCCCC",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20,
  },

  photoPreview: {
    width: "100%",
    height: "100%",
  },

  photoPlaceholder: {
    alignItems: "center",
    gap: 8,
  },



  optionsRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginBottom: 16,
    width: "100%",
  },

  optionButton: {
    flex: 1,
    alignItems: "center",
    gap: 6,
  },

  optionText: {
    color: "#0A3A66",
    fontWeight: "600",
    fontSize: 14,
  },

  optionDivider: {
    width: 1,
    height: 36,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 10,
  },

  removeButton: {
    marginBottom: 16,
  },

  removeText: {
    color: "#CC4444",
    fontSize: 13,
    textDecorationLine: "underline",
  },

  button: {
    backgroundColor: "#002B52",
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
  },

  buttonDisabled: {
    backgroundColor: "#AAAAAA",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
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
