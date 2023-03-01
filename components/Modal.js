import { StyleSheet, Text, View, Modal as RNmodal } from "react-native";
import React from "react";
import Button from "./Button";

const Modal = ({
  modalVisible,
  selectedItem,
  onCancelModal,
  onDeleteModal,
}) => {
  return (
    <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}> Delete item </Text>
          <Text style={styles.modalText}>
            Are you sure to delete{" "}
            <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
          </Text>
          <View style={styles.modalActions}>
            <Button
              styleButtonType={styles.buttonCancel}
              title="Cancel"
              onPress={onCancelModal}
            />
            <Button
              styleButtonType={styles.buttonDelete}
              title="Delete"
              onPress={() => {
                onDeleteModal(selectedItem.id);
              }}
            />
          </View>
        </View>
      </View>
    </RNmodal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#272932"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#272932"
  },
  modalBoldText: {
    fontWeight: "bold",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonCancel: {
    backgroundColor: "#5DABF0",
  },
  buttonDelete: {
    backgroundColor: "#f05d5e",
  },
});