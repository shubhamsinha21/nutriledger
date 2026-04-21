import HomeHeader from "@/components/HomeHeader";
import NutritionGrid from "@/components/NutritionGrid";
import RecentMeals from "@/components/RecentMeals";
import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Nutriledger</Text>
      <HomeHeader />
      <NutritionGrid/>
      <RecentMeals/>
    </ScrollView>
  )
}
