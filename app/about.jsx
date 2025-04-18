import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About ReadDefine</Text>
      <Text style={styles.description}>
        ReadDefine is your personal reading log journal. Keep track of your reading habits, 
        log your favorite books, and reflect on your reading journey. Designed to be simple 
        and intuitive, ReadDefine helps you stay organized and motivated.
      </Text>
      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
    color: '#333',
  },
  link: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
})