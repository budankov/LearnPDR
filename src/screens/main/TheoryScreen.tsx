import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";

const TheoryScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Theory</Text>
      <Pressable
        style={{
          width: "90%",
          height: 50,
          backgroundColor: colors.blue,
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 10,
          padding: 10,
        }}
        onPress={() => navigation.navigate("RulesScreen")}
      >
        <Text>Правила</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // paddingTop: IS_ANDROID ? StatusBar.currentHeight || 0 : 0,
  },
});

export default TheoryScreen;
