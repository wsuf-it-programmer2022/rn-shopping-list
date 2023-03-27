import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default ListCounter = ({ count }) => {
  return (
    <View>
      <Text>
        You have {count}
        {count <= 1 ? " item" : "items"} left to buy
      </Text>
    </View>
  );
};
