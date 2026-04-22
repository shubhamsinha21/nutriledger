import { colors } from "@/styles/global";
import { cancelMealReminders, requestPermissions, scheduleMealReminders } from "@/utils/notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const REMINDER_KEY = "reminderEnabled";

export default function ReminderToggler() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const load = async () => {
      const val = await AsyncStorage.getItem(REMINDER_KEY);
      setEnabled(val === 'true');
    };
    load();
  }, []);

  const toggle = async (value: boolean) => {
    if (value) {
        const granted = await requestPermissions();
        if (!granted) return;
        await scheduleMealReminders();
    } else {
        await cancelMealReminders();
    }
    setEnabled(value);
    await AsyncStorage.setItem(REMINDER_KEY, value.toString());
    }

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Meal Reminders</Text>
            <Switch
                value={enabled}
                onValueChange={toggle}
                trackColor={{ false: colors.surface, true: colors.primary }}
            />
    </View>
  );

}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    label: {
        color: colors.text,
        fontSize: 16
    },
})
