import MealItem from "@/components/MealItem";
import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";

export default function RecentMeals() {
    return (
        <View style={{marginTop: 30}}>
            <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
            <MealItem
                name='Chicken Salad'
                calories={540}
                protein={45}
                carbs={50}
                fat={12}
            />
            <MealItem
                name='Protein Shake'
                calories={280}
                protein={30}
                carbs={20}
                fat={8}
            />
        </View>
    )
}
