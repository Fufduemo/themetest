import React, { useState, useEffect } from "react";
import HomeScreen from "./Screens/HomeScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import AppNav from "./navigation/appNav.js";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "./themes/themeContext.js";
import theme from "./themes/theme.js";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setIsEnabled(data);
        // console.log(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  return (
    <themeContext.Provider
      value={isEnabled === true ? theme.dark : theme.light}
    >
      <NavigationContainer>
        <AppNav />
      </NavigationContainer>
    </themeContext.Provider>
  );
}
