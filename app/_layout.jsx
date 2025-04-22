import { useColorScheme, StyleSheet, View } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import Footer from '../components/Footer'
import { Ionicons } from '@expo/vector-icons' 
import { StatusBar } from 'react-native'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTintColor: theme.title,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerBackTitleVisible: false,
        }}
      >
         <Stack.Screen name="(auth)" options={{ headerShown: false }} />
<<<<<<< HEAD
=======
         <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
>>>>>>> new-feature-branch
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerBackVisible: false,
            headerRight: () => (
              <Ionicons
                name="home-outline"
                size={24}
                color={theme.title}
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: "About",
            headerRight: () => (
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={theme.title}
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="contact"
          options={{
            title: "Contact",
            headerRight: () => (
              <Ionicons
                name="mail-outline"
                size={24}
                color={theme.title}
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
      </Stack>
      <Footer />
    </View>
    </>

  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})