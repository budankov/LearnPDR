import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppBottomTabs from "./AppTabs";
import TheoryStack from "./TheoryStack";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppTabs" component={AppBottomTabs} />
      <Stack.Screen name="TheoryStack" component={TheoryStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
