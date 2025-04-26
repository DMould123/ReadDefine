import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container} showLogo={true}>
      <Spacer />
      <ThemedText style={styles.title} title={true}>
        ReadDefine
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>#1 Independent Reading Log Journal</ThemedText>
      <Spacer />
      <Link href="/login" style={styles.link}>
        <ThemedText>Login to Your Account</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register an Account</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  link: {
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 10,
  },
});
