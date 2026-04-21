import HomeHeader from "@/components/HomeHeader";
import NutritionGrid from "@/components/NutritionGrid";
import RecentMeals from "@/components/RecentMeals";
import { getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text } from "react-native";

export default function HomeScreen() {

const  [meals, setMeals] = useState<Meal[]>([]);

const loadMeals = async () => {
  const data = await getMeals();
  setMeals(data);
  console.log('Loaded meals:', data)
};

  useFocusEffect(
    useCallback(() => {
      loadMeals()
    }, [])
  )
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Nutriledger</Text>
      <HomeHeader />
      <NutritionGrid meals={meals}/>
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView>
  )
}
