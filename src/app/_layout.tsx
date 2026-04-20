import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      // headerTitle: 'Nutriledger',
      headerShown: false,
    }}
  >
    <Stack.Screen name='index' />
    <Stack.Screen name='meals' />
  </Stack>;
}
