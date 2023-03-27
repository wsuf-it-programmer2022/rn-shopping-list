import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default ShoppingListItem = ({ onDelete, title, id }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <Text style={styles.shoppingListItem}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shoppingListItem: {
    backgroundColor: "#b2ddf7",
    padding: 15,
    marginBottom: 10,
    borderRadius: 20,
    // because of borderRadius
    overflow: "hidden",
  },
});
