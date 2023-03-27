import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default ShoppingListPopup = ({ visible, onCancel, onAdd }) => {
  const [enteredShoppingListItem, setEnteredShoppingListItem] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, [visible]);

  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"What do you need to buy?"}
          style={styles.textInput}
          ref={inputRef}
          onChangeText={(text) => {
            setEnteredShoppingListItem(text);
          }}
          value={enteredShoppingListItem}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {
              onCancel();
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {
              onAdd(enteredShoppingListItem);
              setEnteredShoppingListItem("");
              // will just close the modal
              onCancel();
            }}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "70%",
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 30,
    width: "100%",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonView: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
