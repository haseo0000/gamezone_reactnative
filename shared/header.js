import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function Header({ title }) {
  return (
    <View style={styles.headerTitle}>
      <Image
        source={require("../assets/heart_logo.png")}
        style={styles.headerImage}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  headerImage: {
    width: 25,
    height: 25,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default Header;
