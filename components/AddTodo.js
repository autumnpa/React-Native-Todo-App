import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const AddTodo = ({onPress}) => {
  return (
    <Button
      title="+"
      onPress={onPress}
      color="#f1c40f"
      accessibilityLabel="Add a new todo"
      style={styles.button}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
  },
});

export default AddTodo;
