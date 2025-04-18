import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.description}>
        Have questions or feedback? We'd love to hear from you! 
        Reach out to us at:
      </Text>
      <Text style={styles.email}>support@readdefine.com</Text>
      <Text style={styles.description}>
        Follow us on social media to stay updated with the latest features and news.
      </Text>
      <Link href="/" style={styles.link}>Back Home</Link>
    </ThemedView>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
})