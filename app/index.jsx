import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/book-logo.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>ReadDefine</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}> #1 Independent Reading Log Journal</Text>
      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Us</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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