import React from "react";
import { StyleSheet, View } from "react-native";

function Card({ children }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 5,
  },
  cardContent: {
    padding: 10,
  },
});

export default Card;
