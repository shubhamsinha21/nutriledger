import HomeHeader from "@/components/HomeHeader";
import NutritionGrid from "@/components/NutritionGrid";
import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Nutriledger</Text>
      <HomeHeader />
      <NutritionGrid/>
    </View>
  )
}
