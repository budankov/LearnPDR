import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppBottomTabs from "./AppTabs";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppTabs" component={AppBottomTabs} />
    </Stack.Navigator>
  );
};

export default RootStack;
