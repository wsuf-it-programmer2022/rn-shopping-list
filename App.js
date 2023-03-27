import { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
} from "react-native";
import ListCounter from "./components/ListCounter";
import ShoppingListPopup from "./components/ShoppingListPopup";
import ShoppingListItem from "./components/ShoppingListItem";

export default function App() {
  const [shoppintListItems, setShoppingListItems] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const addToShoppingList = (item) => {
    const newItems = [
      ...shoppintListItems,
      { id: Math.random().toString(), value: item },
    ];
    console.log("new item to add: ", item);
    setShoppingListItems(newItems);
  };

  const deleteFromShoppingList = (itemId) => {
    const newItems = shoppintListItems.filter((item) => item.id !== itemId);
    setShoppingListItems(newItems);
  };

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
      <ShoppingListPopup
        visible={popupVisible}
        onCancel={() => {
          setPopupVisible(false);
        }}
        onAdd={addToShoppingList}
      />
      <View style={styles.shoppingList}>
        <FlatList
          data={shoppintListItems}
          renderItem={(itemData) => (
            <ShoppingListItem
              title={itemData.item.value}
              id={itemData.item.id}
              onDelete={deleteFromShoppingList}
            />
          )}
        />
      </View>
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
  },
  appTitle: {
    textAlign: "center",
    fontSize: heightY * 0.03,
    marginVertical: 30,
  },
  shoppingList: {
    width: "100%",
    marginTop: 30,
  },
});
