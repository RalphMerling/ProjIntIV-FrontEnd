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
import { Ionicons } from "@expo/vector-icons";

const guides = [
  {
    id: 1,
    name: "Eduardo Rezende",
    price: "R$ 430/dia",
    rating: "4.7",
    reviews: "96 avaliações",
    experience: "8 anos de experiência",
    description:
      "Arquiteto formado pela UnB, guio você pela maior obra do urbanismo moderno com olhos de especialista..",
    image: require("../assets/images/Eduardo.png"),
    languages: ["Português", "Inglês", "Italiano"],
    specialties: ["Arquitetura Modernista", "Poderes da República", "Museus Nacionais"],
  },
  {
    id: 2,
    name: "Fernanda Lopes",
    price: "R$ 370/dia",
    rating: "4.6",
    reviews: "71 avaliações",
    experience: "5 anos de experiência",
    description:
      "Cientista política e guia, contextualizo a capital federal com histórias dos bastidores do poder.",
    image: require("../assets/images/Fernanda.png"),
    languages: ["Português", "Inglês"],
    specialties: ["Política e Democracia", "Cultura do DF", "Gastronomia"],
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

export default function GuiasBrasiliaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"          />
          </View>
          <Text style={styles.slogan}>Muito Além do Turismo</Text>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>
        </View>

        

        {/* TÍTULO */}
        <View style={styles.content}>
          <Text style={styles.title}>Guias em Brasilia</Text>

          <Text style={styles.subtitle}>
            Guias locais experientes prontos para tornar sua viagem inesquecível
          </Text>

          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </View>
      </ScrollView>


       {/* FOOTER */}
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
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    height: 70,
    backgroundColor: "#041C32",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  }, 

  logoContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
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


  backButton: {
    backgroundColor: "#14C2E5",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 10,
    marginLeft: 30,
  },

  backText: {
    color: "#FFF",
    fontWeight: "400",
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
    fontSize: 21,
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
