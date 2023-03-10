import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Todo({item}) {
  return (
    // Template for each todo item added to the list
    // Makes views respond to touches
    <TouchableOpacity>
      {/* Outputs and item */}
      <Text style={styles.item}>{item.text}</Text>
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
