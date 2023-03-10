import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Todo({item, toggleTodo, deleteTodo}) {
  return (
    // Template for each todo item added to the list
    // Makes views respond to touches
    <TouchableOpacity
      style={styles.itemContainer}
      //   Renders a component that changes the text and styling based on if its completed or not
      // When pressed it calls toggle todo function passing in the items key value and changing the completed state
      onPress={() => toggleTodo(item.key)}
      //   Renders to delete
      // When pressed it calls the delete todo function passing in the items key value removing it from the list
      onLongPress={() => deleteTodo(item.key)}>
      {/* Outputs and item */}
      <Text
        style={[
          styles.item,
          item.completed ? styles.completedItem : styles.incompleteItem,
        ]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginTop: 20,
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  completedItem: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  incompleteItem: {
    color: '#333',
  },
});
