import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

const TheoryScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("RulesScreen")}
        >
          <View style={styles.btnTitle}>
            <View style={styles.btnTitleIcon}>
              <Feather name="book" size={28} color="white" />
            </View>
            <Text style={styles.title}>Правила</Text>
          </View>
          <Feather name="chevron-right" size={28} color="black" />
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("SignsScreen")}
        >
          <View style={styles.btnTitle}>
            <View style={[styles.btnTitleIcon, { backgroundColor: "#FDCD55" }]}>
              <Ionicons name="trail-sign-outline" size={28} color="white" />
            </View>
            <Text style={[styles.title, { color: "#FDCD55" }]}>Знаки</Text>
          </View>
          <Feather name="chevron-right" size={28} color="black" />
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("MarkupScreen")}
        >
          <View style={styles.btnTitle}>
            <View style={[styles.btnTitleIcon, { backgroundColor: "#28A164" }]}>
              <FontAwesome5 name="road" size={28} color="white" />
            </View>
            <Text style={[styles.title, { color: "#28A164" }]}>Розмітка</Text>
          </View>
          <Feather name="chevron-right" size={28} color="black" />
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("TrafficControllerScreen")}
        >
          <View style={styles.btnTitle}>
            <View style={[styles.btnTitleIcon, { backgroundColor: "#F35555" }]}>
              <MaterialCommunityIcons
                name="human-greeting"
                size={28}
                color="white"
              />
            </View>
            <Text style={[styles.title, { color: "#F35555" }]}>
              Регулювальник
            </Text>
          </View>
          <Feather name="chevron-right" size={28} color="black" />
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("TrafficLightsScreen")}
        >
          <View style={styles.btnTitle}>
            <View style={[styles.btnTitleIcon, { backgroundColor: "#F38E55" }]}>
              <FontAwesome5 name="traffic-light" size={28} color="white" />
            </View>
            <Text style={[styles.title, { color: "#F38E55" }]}>Світлофор</Text>
          </View>
          <Feather name="chevron-right" size={28} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    paddingHorizontal: s(14),
    paddingVertical: vs(20),
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: vs(60),
    backgroundColor: "#fff",
    borderRadius: s(8),
    padding: s(10),
    marginVertical: vs(5),
  },
  btnTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnTitleIcon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
    borderRadius: s(10),
    width: s(40),
    height: vs(40),
    marginRight: s(20),
  },
  title: {
    fontSize: s(22),
    fontFamily: fonts.Medium,
    color: colors.blue,
  },
});

export default TheoryScreen;
