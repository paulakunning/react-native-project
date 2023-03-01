import { StyleSheet, Text, Pressable  } from "react-native";
import React from "react";

const Button = ({
    styleButtonType,
    onPress,
    title
}) => {
  return (
    <Pressable
      style={[styles.button, styleButtonType]}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        padding: 12,
        marginHorizontal: 10,
        color: "#463f3a"
      },
});