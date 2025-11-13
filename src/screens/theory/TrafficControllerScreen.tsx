import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";

const TrafficControllerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>TrafficControllerScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default TrafficControllerScreen;
