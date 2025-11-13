import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";

const SignsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>SignsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default SignsScreen;
