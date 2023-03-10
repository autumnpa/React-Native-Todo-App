import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const AddTodo = props => {
  return <Button title="+" onPress={props.onPress} styles={styles.button} />;
};

const styles = StyleSheet.create({
  button: {
    // Why does the styling not show up?
    backgroundColor: '#007AFF',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddTodo;
