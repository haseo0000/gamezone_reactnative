import React from "react";
import { View, Image, StyleSheet } from "react-native";

function BackgroundHeader() {
  return (
    <View style={styles.headerBackground}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
        source={require("../assets/game_bg.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    borderBottomWidth: 0,
    elevation: 5,
  },
});

export default BackgroundHeader;
