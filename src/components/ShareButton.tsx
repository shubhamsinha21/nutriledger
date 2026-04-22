import { Meal } from '@/storage/meals';
import { colors } from '@/styles/global';
import { Ionicons } from '@expo/vector-icons';
import { Share, TouchableOpacity } from 'react-native';

type Sharebutton = {
    meals: Meal[];
}

export default function ShareButton({meals}: Sharebutton){
    const handleShare = async () => {
        const totals = meals.reduce(
            (acc, meal) => ({
                calories: acc.calories + meal.calories,
                protein: acc.protein + meal.protein,
                carbs: acc.carbs + meal.carbs,
                fat: acc.fat + meal.fat
            }), 
            {calories: 0, protein: 0, carbs: 0, fat: 0}
        );

        await Share.share({
            message: `NutriLedger Daily Summary\n\nCalories: ${totals.calories}\nProteins: ${totals.protein}g\nCarbs: ${totals.carbs}g\nFat: ${totals.fat}g\n\nMeals: ${meals.length} logged today`,
        });
    };

    return (
        <TouchableOpacity onPress={handleShare}>
            <Ionicons name='share-outline' size={24} color={colors.primary} />
        </TouchableOpacity>
    )
}
