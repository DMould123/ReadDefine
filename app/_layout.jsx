import { StyleSheet, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'react-native'

const RootLayout = () => {
  const colorScheme = useColorScheme() 
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
    <StatusBar value="auto" />
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
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="contact" options={{ title: "Contact" }} />
    </Stack>
    </>

  )
}

export default RootLayout