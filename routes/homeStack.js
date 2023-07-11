import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import BackgroundHeader from "../shared/backgroundHeader";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  const handleOpenMenu = () => {
    navigation.openDrawer();
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => <BackgroundHeader />,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeftContainerStyle: {
            paddingLeft: 12,
          },
          headerTitleContainerStyle: {
            paddingRight: 12,
          },
          headerTitleAlign: "center",
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={28}
              onPress={() => handleOpenMenu()}
            />
          ),
          headerTitle: () => <Header title={"GameZone"} />,
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details Game",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
