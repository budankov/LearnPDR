import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    // paddingTop: IS_ANDROID ? StatusBar.currentHeight || 0 : 0,
  },
});

export default SettingsScreen;
