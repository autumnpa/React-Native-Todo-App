import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import AddTodo from './AddTodo';

// const AddTodo = props => {
//   return <Button title="+" onPress={props.onPress} styles={styles.button} />;
// };
const Header = props => {
  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        style={styles.addTodoInput}
        onChangeText={input => (text = input)}
        placeholder="Add Todo"
      />
      <AddTodo onPress={props.onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles the header area
  header: {
    height: 100,
    paddingTop: 42,
    backgroundColor: '#007AFF',
  },
  // Styles the text/title inside the header area
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
  addTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addTodoInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 18,
    borderRadius: 6,
    marginRight: 10,
  },
});

export default Header;
