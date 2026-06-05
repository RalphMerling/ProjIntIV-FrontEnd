import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function RegioesScreen({ navigation }) {
  const regioes = [
    {
      id: 1,
      nome: "Região Norte",
      descricao: "Floresta Amazônica, rios majestosos e biodiversidade única.",
      image: require("../assets/images/Norte.png"),
      screen: "/screens/RegiaoNorte",
    },
    {
      id: 2,
      nome: "Região Nordeste",
      descricao: "Praias paradisíacas, cultura rica e culinária incrível.",
      image: require("../assets/images/Nordeste.png"),
      screen: "/screens/RegiaoNordeste",
    },
    {
      id: 3,
      nome: "Região Centro-Oeste",
      descricao: "Pantanal, Chapada dos Veadeiros e natureza exuberante.",
      image: require("../assets/images/Centro oeste.png"),
      screen: "/screens/RegiaoCentroOeste",
    },
    {
      id: 4,
      nome: "Região Sudeste",
      descricao: "Praias, montanhas, cidades históricas e metrópoles vibrantes.",
      image: require("../assets/images/Sudeste.png"),
      screen: "/screens/RegiaoSudeste",
    },
    {
      id: 5,
      nome: "Região Sul",
      descricao: "Cataratas, Serra Gaúcha, vinícolas e cultura europeia.",
      image: require("../assets/images/Sul.png"),
      screen: "/screens/RegiaoSul",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Luxury Tour</Text>
        <Text style={styles.slogan}>Muito Além do Turismo</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {regioes.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />

            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.nome}</Text>
              <Text style={styles.description}>{item.descricao}</Text>
            </View>

            <TouchableOpacity
              style={styles.exploreButton}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.exploreText}>Explorar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerLogo}>Luxury Tour</Text>
        <Text style={styles.footerText}>Muito Além do Turismo</Text>
        <View style={styles.footerIcons}>
          <Ionicons name="logo-whatsapp" size={18} color="#D4AF37" />
          <Ionicons name="logo-instagram" size={18} color="#D4AF37" />
          <Ionicons name="mail-outline" size={18} color="#D4AF37" />
          <Ionicons name="compass-outline" size={18} color="#D4AF37" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  header: {
    height: 60,
    backgroundColor: "#041C32",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  logo: { color: "#D4AF37", fontWeight: "bold", fontSize: 16 },
  slogan: { color: "#D4AF37", fontSize: 13, fontStyle: "italic" },
  backButton: {
    backgroundColor: "#0A7EA4",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  backText: { color: "#FFF", fontSize: 12, fontWeight: "600" },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    marginHorizontal: 12,
    marginVertical: 14,
    overflow: "hidden",
    elevation: 3,
  },
  cardImage: { width: "100%", height: 180 },
  cardContent: { padding: 14 },
  title: { fontSize: 22, fontWeight: "700", color: "#111827", marginBottom: 6 },
  description: { fontSize: 14, lineHeight: 18, color: "#6B7280" },
  exploreButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    margin: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  exploreText: { color: "#FFF", fontWeight: "600" },
  footer: {
    height: 55,
    backgroundColor: "#041C32",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },
  footerLogo: { color: "#D4AF37", fontSize: 13, fontWeight: "bold" },
  footerText: { color: "#D4AF37", fontSize: 12, fontStyle: "italic" },
  footerIcons: { flexDirection: "row", gap: 10 },
});
