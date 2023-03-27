import { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, Button } from "react-native";
import ListCounter from "./components/ListCounter";

export default function App() {
  const [shoppintListItems, setShoppingListItems] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Create Shopping list!</Text>
      <ListCounter count={shoppintListItems.length} />
      <Button
        title={"Add new item"}
        onPress={() => {
          setPopupVisible(true);
        }}
      />
    </View>
  );
}

const heightY = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    textAlign: "center",
    fontSize: heightY * 0.03,
    marginVertical: 30,
  },
});
