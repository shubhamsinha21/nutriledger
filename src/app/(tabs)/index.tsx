import HomeHeader from "@/components/HomeHeader";
import NutritionGrid from "@/components/NutritionGrid";
import RecentMeals from "@/components/RecentMeals";
import ShareButton from "@/components/ShareButton";
import { getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";

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

      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>Nutriledger</Text>
        <ShareButton meals={meals}/>
      </View>
      <HomeHeader />
      <NutritionGrid meals={meals}/>
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView>
  )
}
