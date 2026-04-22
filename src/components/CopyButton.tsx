import { Meal } from "@/storage/meals";
import { colors } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from 'expo-clipboard';
import * as HapticS from 'expo-haptics';
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

type CopyButtonProps = {
  meals: Meal[];
};

export default function CopyButton({ meals }: CopyButtonProps) {
    const handleCopy = async () => {
        const totals = meals.reduce(
            (acc, meal) => ({
                calories: acc.calories + meal.calories,
                protein: acc.protein + meal.protein,
                carbs: acc.carbs + meal.carbs,
                fat: acc.fat + meal.fat

            }), 
            {calories: 0, protein: 0, carbs: 0, fat: 0}
        );

    const summary = `Nutriledger Daily Summary\n\nCalories: ${totals.calories}\nProtein: ${totals.protein}g\nCarbs: ${totals.carbs}g\nFat: ${totals.fat}g\n\nMeals: ${meals.length} logged today`;
    await Clipboard.setStringAsync(summary);
    HapticS.notificationAsync(HapticS.NotificationFeedbackType.Success);
    Alert.alert('Copied to Clipboard', 'Your daily summary has been copied!');
    };

  return (
    <TouchableOpacity style={styles.button} onPress={handleCopy}>
        <Ionicons name="copy-outline" size={18} color={colors.primary} />
        <Text style={styles.text}>Copy Summary</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 16,
    },
    text: {
        color: colors.primary,
        fontSize: 14
    },
});
