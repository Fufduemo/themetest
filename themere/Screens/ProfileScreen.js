import React, { useContext } from "react";
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import HS from "../styles/HS";
import theme from "../themes/theme";
import themeContext from "../themes/themeContext";

export default function ProfileScreen({ navigation }) {
  const theme = useContext(themeContext);
  return (
    <SafeAreaView
      style={[hs.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[hs.text, { color: theme.color }]}>
        Welcome to Profile Screen
      </Text>
      <Button
        style={[hs.button]}
        onPress={() => navigation.navigate("Home")}
        title="View Profile"
      />
    </SafeAreaView>
  );
}
