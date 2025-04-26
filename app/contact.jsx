import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Contact = () => {
  return (
    <ThemedView style={styles.container} showLogo={true}>
      <ThemedText style={styles.title}>Contact Us</ThemedText>
      <ThemedText style={styles.description}>
        Have questions or feedback? We'd love to hear from you! Reach out to us
        at:
      </ThemedText>
      <ThemedText style={styles.email}>support@readdefine.com</ThemedText>
      <ThemedText style={styles.description}>
        Follow us on social media to stay updated with the latest features and
        news.
      </ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e90ff",
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 20,
  },
});
