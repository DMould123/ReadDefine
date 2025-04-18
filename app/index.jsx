import { StyleSheet, Text, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/book-logo.png'

// Themed Component
import ThemedView from '../components/ThemedView'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>ReadDefine</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>#1 Independent Reading Log Journal</Text>
      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Us</Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {
    marginVertical: 20,
  },
  link: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
})