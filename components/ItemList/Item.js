import { StyleSheet, View} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Button from "../Button";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/AntDesign';

const Item = ({ itemData, openModal }) => {
    const [checkboxState, setCheckboxState] = useState(false);
    const deleteIcon =   <Icon name="delete" size={20} color="#463f3a" />

  return (
    <View style={styles.itemContainer}>
      <BouncyCheckbox
        style={styles.item}
        text={itemData.item.value}
        size={25}
        textStyle={{ color: "#463f3a", fontSize: 20 }}
        fillColor="#68a691"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#68a691" }}
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={checkboxState}
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <Button
        styleButtonType={styles.deleteBtn}
        title={deleteIcon}
        onPress={() => {
          openModal(itemData.item);
        }}
      >
        {" "}
      </Button>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
    itemContainer: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      item: {
        padding: 10,
        textAlign: "center",
      },
      deleteBtn: {
        backgroundColor: "pink"
      }
});
