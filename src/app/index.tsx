import * as Device from 'expo-device';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to NutriLedger!</Text>
      <Text style={styles.date}>Running on {Platform.OS}</Text>
      <Text> Device Model: {Device.modelName}</Text>
      <Text> Device Brand: {Device.brand}</Text>
      <Text> Device OS Version: {Device.osVersion}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  date: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 4,
    marginBottom: 30,
  },
})