import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";

import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="drawerHome"
        component={HomeStack}
        options={{
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="drawerAbout"
        component={AboutStack}
        options={{
          title: "About",
        }}
      />
    </Drawer.Navigator>
  );
};

export default RootDrawerNavigator;
