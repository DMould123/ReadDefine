import { StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1e90ff', 
        },
        headerTintColor: '#ffffff', 
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
  )
}

export default RootLayout

const styles = StyleSheet.create({})