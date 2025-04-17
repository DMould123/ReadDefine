import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/book-logo.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>Your Very Own</Text>
      <Text style={{marginTop: 10, marginBottom: 30}}>Reading Log Journal</Text>
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
    fontWeight: 'bold'
  },
  img: {
    marginVertical: 20,
  },
})