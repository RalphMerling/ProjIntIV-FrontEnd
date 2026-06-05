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

export default function RegiaoNordesteScreen() {
  const destinations = [
    {
      id: 1,
      city: "Salvador",
      state: "Bahia",
      rating: "4.9",
      guides: "2 guias",
      description:
        "Pelourinho histórico, culinária afro-brasileira, capoeira e carnaval mais animado do Brasil.",
      image: require("../assets/images/Salvador.png"),
    },
    {
      id: 2,
      city: "Fortaleza",
      state: "Ceará",
      rating: "4.8",
      guides: "2 guias",
      description:
        "Praias de águas mornas, dunas douradas, lagoas de tirolesa e a animada vida noturna cearense.",
      image: require("../assets/images/Fortaleza.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>LT</Text>
        </View>

        <Text style={styles.slogan}>Muito Além do Turismo</Text>

        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Título */}
        <View style={styles.titleContainer}>
          <View style={styles.greenDot} />
          <Text style={styles.title}>Região Nordeste</Text>
        </View>

        {/* Cards */}
        {destinations.map((item) => (
          <View key={item.id} style={styles.card}>
            <View>
              <Image
                source={ item.image }
                style={styles.cardImage}
              />

              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={12} color="#F5B400" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>

              <View style={styles.stateTag}>
                <Text style={styles.stateTagText}>{item.state}</Text>
              </View>
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.city}>{item.city}</Text>

              <Text style={styles.description}>
                {item.description}
              </Text>
            </View>

            <View style={styles.cardFooter}>
              <View style={styles.guideInfo}>
                <Ionicons
                  name="person-outline"
                  size={16}
                  color="#7B8794"
                />
                <Text style={styles.guideText}>{item.guides}</Text>
              </View>

              <TouchableOpacity>
                <Text style={styles.viewGuides}>
                  Ver guias {"  >"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLogoContainer}>
          <Text style={styles.footerLogo}>LT</Text>
        </View>

        <Text style={styles.footerText}>
          Muito Além do Turismo
        </Text>

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
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    height: 60,
    backgroundColor: "#041C32",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },

  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#D4AF37",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    color: "#D4AF37",
    fontWeight: "bold",
    fontSize: 16,
  },

  slogan: {
    color: "#D4AF37",
    fontSize: 13,
    fontStyle: "italic",
  },

  backButton: {
    backgroundColor: "#0A7EA4",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },

  backText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    marginHorizontal: 14,
    marginBottom: 12,
  },

  greenDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#FE9A00",
    marginRight: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111827",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    marginHorizontal: 12,
    marginBottom: 22,
    overflow: "hidden",
    elevation: 3,
  },

  cardImage: {
    width: "100%",
    height: 190,
  },

  ratingBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    marginLeft: 3,
    fontSize: 12,
    fontWeight: "600",
  },

  stateTag: {
    position: "absolute",
    bottom: 10,
    left: 12,
    backgroundColor: "#FEF3C6",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
  },

  stateTagText: {
    color: "#DD5522",
    fontSize: 12,
    fontWeight: "600",
  },

  cardContent: {
    padding: 14,
  },

  city: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },

  description: {
    fontSize: 13,
    lineHeight: 18,
    color: "#6B7280",
  },

  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: "#ECECEC",
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  guideInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  guideText: {
    marginLeft: 5,
    color: "#6B7280",
  },

  viewGuides: {
    color: "#17A34A",
    fontWeight: "600",
  },

  footer: {
    height: 55,
    backgroundColor: "#041C32",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },

  footerLogoContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#D4AF37",
    justifyContent: "center",
    alignItems: "center",
  },

  footerLogo: {
    color: "#D4AF37",
    fontSize: 11,
    fontWeight: "bold",
  },

  footerText: {
    color: "#D4AF37",
    fontSize: 12,
    fontStyle: "italic",
  },

  footerIcons: {
    flexDirection: "row",
    gap: 10,
  },
});