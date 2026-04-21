import { StyleSheet, View } from "react-native";
import NutritionCard from "./NutritionCard";

export default function NutritionGrid() {
    return (
        <View style={styles.grid}>
            <NutritionCard label='calories' value='0' goal='2,000' color='#ff6b6b'/>
            <NutritionCard label='Protein' value='0g' goal='150g' color='#4ecdc4'/>
            <NutritionCard label='Carbs' value='0g' goal='250g' color='#ffd93d'/>
            <NutritionCard label='Fat' value='0' goal='65g' color='#6bcb77'/>
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