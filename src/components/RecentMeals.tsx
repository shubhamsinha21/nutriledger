import MealItem from "@/components/MealItem";
import { Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { StyleSheet, Text, View } from "react-native";

type RecentMealsProps = {
  meals: Meal[];
  onDelete: () => void;
};

export default function RecentMeals({ meals, onDelete }: RecentMealsProps) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
      {meals.length === 0 ? (
        <Text style={globalStyles.empty}>No meals logged yet.</Text>
      ) : (
        meals
          .slice(0, 5)
          .map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={onDelete}
            />
          ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    SectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
        color: '#ffffff',
    },
    empty: {
        color: '#a0a0b0',
        fontSize: 14
    }
})
