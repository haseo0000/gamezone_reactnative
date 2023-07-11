import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import About from "../screens/about";
import Header from "../shared/header";
import BackgroundHeader from "../shared/backgroundHeader";

const Stack = createStackNavigator();

const AboutStack = ({ navigation }) => {
  const handleOpenMenu = () => {
    navigation.openDrawer();
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerBackground: () => <BackgroundHeader />,
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerTitleContainerStyle: {
            paddingRight: 10,
          },
          headerTitleAlign: "center",
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={28}
              onPress={() => handleOpenMenu()}
            />
          ),
          headerTitle: () => <Header title={"About GameZone"} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
