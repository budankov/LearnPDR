import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/main/SettingsScreen";
import TestsScreen from "../screens/main/TestsScreen";
import { colors } from "../styles/colors";
import TheoryStack from "./TheoryStack";

const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#01fe7f",
        tabBarInactiveTintColor: "#fff",
        // headerRight: () => <HomeIcon />,
        // headerLeft: () => <BackButton />,
        // headerTitle: () => <CustomTitle />,

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        tabBarStyle: {
          height: 70,
          backgroundColor: colors.blue,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tab.Screen
        name="theory"
        component={TheoryStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" size={size} color={color} />
          ),
          title: "Теорія",
        }}
      />
      <Tab.Screen
        name="tests"
        component={TestsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="check-square" size={size} color={color} />
          ),
          title: "Тести",
        }}
      />
      <Tab.Screen
        name="setting"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
          title: "Налаштування",
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;
