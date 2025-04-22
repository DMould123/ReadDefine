import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>About ReadDefine</ThemedText>
      <ThemedText style={styles.description}>
        ReadDefine is your personal reading log journal. Keep track of your reading habits, 
        log your favorite books, and reflect on your reading journey. Designed to be simple 
        and intuitive, ReadDefine helps you stay organized and motivated.
      </ThemedText>
      <Link href="/" style={styles.link}><ThemedText>Back Home</ThemedText></Link>
    </ThemedView>
  )
}

export default About

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
  link: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
})