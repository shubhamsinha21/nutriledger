import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      // headerTitle: 'Nutriledger',
      headerShown: false,
      // headerStyle: {backgroundColor: colors.header},
      // headerTintColor: '#fff',

    }}
  >
    <Stack.Screen name='{tabs}' />
  </Stack>;
}
