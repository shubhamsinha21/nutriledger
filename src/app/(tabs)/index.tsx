import CopyButton from "@/components/CopyButton";
import HomeHeader from "@/components/HomeHeader";
import NutritionGrid from "@/components/NutritionGrid";
import RecentMeals from "@/components/RecentMeals";
import ReminderToggler from "@/components/ReminderToggler";
import ShareButton from "@/components/ShareButton";
import { getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Platform, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>NutriLedger</Text>
        <ShareButton meals={meals} />
      </View>
      <HomeHeader />
      <NutritionGrid meals={meals} />
      <CopyButton meals={meals} />
      {Platform.OS !== 'android' && <ReminderToggler />}
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView>
  );
}

