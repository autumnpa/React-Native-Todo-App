import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Todo({item, toggleTodo, deleteTodo}) {
  return (
    // Template for each todo item added to the list
    // Makes views respond to touches
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => toggleTodo(item.key)}
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
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
