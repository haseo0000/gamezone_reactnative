import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";

function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  // const handlePress = () => {
  //   navigation.navigate("ReviewDetails");
  // };

  const handleAddReview = (review) => {
    setReviews((prev) => [...prev, { ...review, key: prev.length + 1 }]);
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <SafeAreaView style={{ flex: 1 }}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm handleAddReview={handleAddReview} />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default Home;
