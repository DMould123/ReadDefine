import { useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons' // Import Ionicons

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
    </>
  )
}

export default RootLayout