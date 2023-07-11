import React from "react";
import { useFonts } from "expo-font";
import DrawerStack from "./routes/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <DrawerStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
