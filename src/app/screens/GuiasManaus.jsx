import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const guides = [
  {
    id: 1,
    name: "Gabriel Fonseca",
    price: "R$ 420/dia",
    rating: "4.9",
    reviews: "143 avaliações",
    experience: "10 anos de experiência",
    description:
      "Biólogo e guia nativo de Manaus, leva você aos segredos mais profundos da Floresta Amazônica.",
    image: require("../assets/images/Gabriel.png"),
    languages: ["Português", "Inglês", "Espanhol"],
    specialties: ["Floresta Amazônica", "Encontro das Águas", "Fauna e Flora"],
  },
  {
    id: 2,
    name: "Marina Silva",
    price: "R$ 360/dia",
    rating: "4.8",
    reviews: "98 avaliações",
    experience: "7 anos de experiência",
    description:
      "Historiadora apaixonada por Manaus, especialista no período áureo da borracha e na arquitetura belle époque.",
    image: require("../assets/images/Marina.png"),
    languages: ["Português", "Inglês"],
    specialties: ["Teatro Amazonas", "Cultura Local", "Gastronomia"],
  },
];

function GuideCard({ guide }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={guide.image} style={styles.avatar} />

        <View style={styles.info}>
          <Text style={styles.name}>{guide.name}</Text>

          <Text style={styles.rating}>
            ⭐ {guide.rating} ({guide.reviews})
          </Text>

          <Text style={styles.experience}>📍 {guide.experience}</Text>
        </View>

        <Text style={styles.price}>{guide.price}</Text>
      </View>

      <Text style={styles.description}>{guide.description}</Text>

      <Text style={styles.sectionTitle}>Idiomas</Text>

      <View style={styles.tagContainer}>
        {guide.languages.map((language, index) => (
          <View key={index} style={styles.languageTag}>
            <Text style={styles.languageText}>{language}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Especialidades</Text>

      <View style={styles.tagContainer}>
        {guide.specialties.map((item, index) => (
          <View key={index} style={styles.specialtyTag}>
            <Text style={styles.specialtyText}>{item}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Selecionar guia</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function GuidesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>LT</Text>
          </View>

          <Text style={styles.slogan}>Muito Além do Turismo</Text>

          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>
        </View>

        {/* TÍTULO */}
        <View style={styles.content}>
          <Text style={styles.title}>Guias em Manaus</Text>

          <Text style={styles.subtitle}>
            Guias locais experientes prontos para tornar sua viagem inesquecível
          </Text>

          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>completar depois</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    backgroundColor: "#031A35",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },

  logoContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D4AF37",
  },

  logoText: {
    color: "#D4AF37",
    fontWeight: "bold",
  },

  slogan: {
    color: "#D4AF37",
    fontStyle: "italic",
    fontSize: 22,
  },

  backButton: {
    backgroundColor: "#14C2E5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  backText: {
    color: "#FFF",
    fontWeight: "600",
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1E1E1E",
  },

  subtitle: {
    fontSize: 15,
    color: "#666",
    marginTop: 6,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 14,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 15,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#232323",
  },

  rating: {
    marginTop: 6,
    color: "#777",
    fontSize: 13,
  },

  experience: {
    marginTop: 4,
    color: "#777",
    fontSize: 13,
  },

  price: {
    color: "#8A2BE2",
    fontWeight: "700",
    fontSize: 18,
  },

  description: {
    marginTop: 14,
    color: "#666",
    lineHeight: 20,
    fontSize: 13,
  },

  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: "700",
    color: "#333",
  },

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  languageTag: {
    backgroundColor: "#E8E6FF",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
  },

  languageText: {
    color: "#6A5ACD",
    fontSize: 12,
    fontWeight: "600",
  },

  specialtyTag: {
    backgroundColor: "#E6FFF4",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
  },

  specialtyText: {
    color: "#00A36C",
    fontSize: 12,
    fontWeight: "600",
  },

  button: {
    alignSelf: "flex-start",
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 12,
  },

  buttonText: {
    color: "#333",
    fontWeight: "600",
  },

  footer: {
    height: 50,
    backgroundColor: "#031A35",
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
