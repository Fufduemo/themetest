import React, { useContext, useState } from "react";
import { View, Text, Switch } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../themes/theme";
import themeContext from "../themes/themeContext";

const SwitchWithLabel = ({ label, value, onValueChange }) => {
  const theme = useContext(themeContext);
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={[styles.text, { color: theme.color }]}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

export default SwitchWithLabel;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
