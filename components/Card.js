import React from "react";
import { View, StyleSheet } from "react-native";

const StartGameScreen = (props) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
  },
});

export default StartGameScreen;
