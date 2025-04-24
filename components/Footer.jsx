import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "react-native";

const Footer = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[styles.footer, { backgroundColor: theme.navBackground }]}>
      <Link href="/" style={styles.link}>
        <Ionicons name="home-outline" size={24} color={theme.title} />
      </Link>
      <Link href="/about" style={styles.link}>
        <Ionicons
          name="information-circle-outline"
          size={24}
          color={theme.title}
        />
      </Link>
      <Link href="/contact" style={styles.link}>
        <Ionicons name="mail-outline" size={24} color={theme.title} />
      </Link>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  link: {
    padding: 10,
  },
});
