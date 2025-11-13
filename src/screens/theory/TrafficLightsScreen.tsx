import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";

const TrafficLightsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>TrafficLightsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default TrafficLightsScreen;
