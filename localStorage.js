import AsyncStorage from "@react-native-async-storage/async-storage/lib/commonjs/AsyncStorage";

/**
 *  Store Shopping List Items in Async Storage
 *
 * @param {array} shoppingList
 */
export const storeShoppingList = async (shoppingList) => {
  try {
    // Convert shoppingList to JSON string
    const jsonValue = JSON.stringify(shoppingList);
    await AsyncStorage.setItem("@MyStorage:ShoppingList", jsonValue);
    console.log("Shopping List stored");
  } catch (e) {
    window.alert("Failed to store shopping list: " + JSON.stringify(e));
  }
};

/**
 * Get Shopping List Items from Async Storage
 *
 * @returns {array} shoppingList
 */
export const getShoppingList = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@MyStorage:ShoppingList");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    window.alert("Failed to get shopping list: " + JSON.stringify(e));
  }
};

/**
 * Remove Shopping List Items from Async Storage
 *
 */
export const removeShoppingList = async () => {
  try {
    await AsyncStorage.removeItem("@MyStorage:ShoppingList");
  } catch (e) {
    window.alert("Failed to remove shopping list: " + JSON.stringify(e));
  }
};
