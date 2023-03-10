import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  CheckBox,
} from 'react-native';

function App() {
  // State variable for todos list
  const [todos, setTodos] = useState([]);
  // State variable for new todos
  const [newTodo, setNewTodo] = useState('');

  // Stops the default form submission to reload the page
  // Update both state variables accordingly
  const handleSubmit = () => {
    setTodos([...todos, {id: Date.now(), text: newTodo, completed: false}]);
    setNewTodo('');
  };

  // Add functionality to mark todo items as completed
  // Add a checkbox to each list item - updating the completed property in the object once the checkbox is checked
  const handleToggleCompleted = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      }),
    );
  };

  // Add functionality to delete list items
  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Refactor your code to use useEffect to log all the current To Dos whenever they are updated.
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  // Render the todo list items using FlatList - items stored in todos state variable
  // Add functionality to mark todo items as completed
  // Add a checkbox to each list item - updating the completed property in the object once the checkbox is checked
  const renderTodo = ({item}) => {
    return (
      <View style={styles.todo}>
        <CheckBox
          value={item.completed}
          onValueChange={() => handleToggleCompleted(item.id)}
        />
        <Text style={[styles.todoText, item.completed && styles.completed]}>
          {item.text}
        </Text>
        <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Add onSubmit to form to make sure handleSubmit is called /}
<View style={styles.form}>
{/ Updates the state variable newTodo each time the user types and a new task /}
<TextInput
       style={styles.todoInput}
       value={newTodo}
       onChangeText={setNewTodo}
     />
<TouchableOpacity onPress={handleSubmit}>
<Text style={styles.addButton}>Add Todo</Text>
</TouchableOpacity>
</View>
{/ Render the todo list items using FlatList - items stored in todos state variable /}
{/ Add functionality to mark todo items as completed /}
{/ Add a checkbox to each list item - updating the completed property in the object once the checkbox is checked */}
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  todoInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    color: 'white',
  },
});
