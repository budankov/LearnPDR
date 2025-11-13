import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TheoryScreen from "../screens/main/TheoryScreen";
import MarkupScreen from "../screens/theory/MarkupScreen";
import RulesScreen from "../screens/theory/RulesScreen";
import SignsScreen from "../screens/theory/SignsScreen";
import TrafficControllerScreen from "../screens/theory/TrafficControllerScreen";
import TrafficLightsScreen from "../screens/theory/TrafficLightsScreen";
import { colors } from "../styles/colors";

const Stack = createNativeStackNavigator();

export default function TheoryStack() {
  return (
    <Stack.Navigator
      initialRouteName="TheoryScreen"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.blue,
        },
        headerTitleStyle: {
          color: "#fff",
          fontSize: 25,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="TheoryScreen"
        component={TheoryScreen}
        options={{ title: "Теорія" }}
      />
      <Stack.Screen
        name="RulesScreen"
        component={RulesScreen}
        options={{ title: "Правила" }}
      />
      <Stack.Screen
        name="SignsScreen"
        component={SignsScreen}
        options={{ title: "Знаки" }}
      />
      <Stack.Screen
        name="MarkupScreen"
        component={MarkupScreen}
        options={{ title: "Розмітка" }}
      />
      <Stack.Screen
        name="TrafficControllerScreen"
        component={TrafficControllerScreen}
        options={{ title: "Регулювальник" }}
      />
      <Stack.Screen
        name="TrafficLightsScreen"
        component={TrafficLightsScreen}
        options={{ title: "Світлофор" }}
      />
    </Stack.Navigator>
  );
}
