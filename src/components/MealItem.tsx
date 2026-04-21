import { StyleSheet, Text, View } from "react-native";

type MealItemProps = {
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}

export default function MealItem({
    name, calories, protein, carbs, fat
}: MealItemProps){

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            {/* <Text style={styles.nutritient}>Calories: {calories}</Text>
            <Text style={styles.nutritient}>Protein: {protein}g</Text>
            <Text style={styles.nutritient}>Carbs: {carbs}g</Text>
            <Text style={styles.nutritient}>Fat: {fat}g</Text> */}
            <Text style={styles.nutritient}>
                {calories} cal | {protein}g | {carbs}g | {fat}g
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16213e',
        borderRadius: 10,
        padding: 16,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
    },
    nutritient: {
        fontSize: 13,
        color: '#a0a0b0',
        marginTop: 4
    }
})