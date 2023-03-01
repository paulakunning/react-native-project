import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Button from "./Button";

const NewItemHeader = ({
  onChangeText,
  itemText,
  addItemToState,
}) => {
  return (
    <View style={styles.addItemInputContainer}>
      <TextInput
        placeholder="Add a task"
        style={styles.input}
        onChangeText={onChangeText}
        value={itemText}
      />
      <Button
        styleButtonType={styles.addBtn}
        title=" + "
        onPress={addItemToState}
      />
    </View>
  );
};

export default NewItemHeader;

const styles = StyleSheet.create({
  addItemInputContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    width: 200,
    color:"#463f3a",
    textDecorationStyle:"none",
    borderBottomColor: "#EFC7C2",
    borderBottomWidth: 1,
  },
  addBtn: {
    borderRadius: 50,
    backgroundColor: "#EFC7C2",
    color:"#463f3a",
    fontSize: 25,
    padding: 10, 
    textAlign: "center"
  }
});