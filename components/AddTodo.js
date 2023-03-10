import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const AddTodo = props => {
  return <Button title="+" onPress={props.onPress} style={styles.button} />;
};

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
  },
});

export default AddTodo;
