import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import themeContext from "../themes/themeContext";

export default function AppNav() {
  const Stack = createStackNavigator();
  const theme = useContext(themeContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTintColor: theme.color,
          tintColor: theme.color,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTintColor: theme.color,
          tintColor: theme.color,
        }}
      />
    </Stack.Navigator>
  );
}
