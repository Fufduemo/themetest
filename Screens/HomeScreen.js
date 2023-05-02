import React from "react";
import { Text, View, StyleSheet, Button, Switch } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to Homescreen</Text>
      <Switch />
      <Button title="View Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20,
  },
});
