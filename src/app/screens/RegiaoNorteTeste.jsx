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
import { router } from "expo-router";

export default function RegiaoNorteScreen({ navigation }) {
  const destinations = [
    {
      id: 1,
      city: "Manaus",
      state: "Amazonas",
      rating: "4.8",
      guides: "2 guias",
      description:
        "Portal da Amazônia, com o famoso Encontro das Águas, Teatro Amazonas e acesso a reservas florestais imensas.",
      image: require("../assets/images/Manaus.png"),
    },
    {
      id: 2,
      city: "Belém",
      state: "Pará",
      rating: "4.6",
      guides: "2 guias",
      description:
        "Cidade das mangueiras e do açaí, ponto de partida para explorar o delta do Rio Amazonas.",
      image: require("../assets/images/Belém.png"),
    },
  ];

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
        <Text style={styles.slogan}>Região Norte TESTE</Text>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Título */}
        <View style={styles.titleContainer}>
          <View style={styles.greenDot} />
          <Text style={styles.title}>Região Norte</Text>
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


              <TouchableOpacity
                onPress={() => {
                  if (item.city === "Manaus") {
                    navigation.navigate("/screens/GuiasManaus");
                  } else if (item.city === "Belém") {
                    navigation.navigate("/screens/GuiasBelem");
                  }
                }}
              >
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
    backgroundColor: "#00BC7D",
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
    backgroundColor: "#DDF4D8",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
  },

  stateTagText: {
    color: "#3E7D33",
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