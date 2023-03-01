import { FlatList } from "react-native";
import React from "react";
import Item from "./Item";

const List = ({ items, openModal, length }) => {
  return (
    <FlatList
      data={items}
      renderItem={(itemData) => {
        return <Item itemData={itemData} openModal={openModal} />;
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default List;