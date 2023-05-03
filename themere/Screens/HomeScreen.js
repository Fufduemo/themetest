import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Switch,
  SafeAreaView,
} from "react-native";
import SwitchWithLabel from "../components/switchWLabel";
import { useState } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../themes/themeContext";
import hs from "../styles/HS";

export default function HomeScreen({ navigation }) {
  const theme = useContext(themeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (isEnabled) => {
    EventRegister.emit("changeTheme", isEnabled);
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <SafeAreaView
      style={[hs.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[hs.text, { color: theme.color }]}>
        Welcome to Homescreen
      </Text>

      <SwitchWithLabel
        label={"Switch Theme "}
        value={isEnabled}
        onValueChange={toggleSwitch}
      />

      <Button
        style={hs.button}
        onPress={() => navigation.navigate("Profile")}
        title="View Profile"
      />
    </SafeAreaView>
  );
}
