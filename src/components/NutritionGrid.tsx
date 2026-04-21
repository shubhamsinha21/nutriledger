import { Meal } from "@/storage/meals";
import { StyleSheet, View } from "react-native";
import NutritionCard from "./NutritionCard";

type NutritionGridProps = {
    meals: Meal[]
}

export default function NutritionGrid({ meals} : NutritionGridProps) {
    const totals = meals.reduce(
        (acc, meal) => ({
            calories: acc.calories + meal.calories,
            protein: acc.protein + meal.protein,
            carbs: acc.carbs + meal.carbs,
            fat: acc.fat + meal.fat,
        }),
        { calories: 0, protein: 0, carbs: 0, fat: 0 }

    )
    return (
        <View style={styles.grid}>
            <NutritionCard label='calories' value={`${totals.calories}`} goal='/ 2,000' color='#ff6b6b'/>
            <NutritionCard label='Protein' value={`${totals.protein}g`} goal='/ 150g' color='#4ecdc4'/>
            <NutritionCard label='Carbs' value={`${totals.carbs}g`} goal='/ 250g' color='#ffd93d'/>
            <NutritionCard label='Fat' value={`${totals.fat}g`} goal='/ 65g' color='#6bcb77'/>
        </View>
    )

}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    }
})