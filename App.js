import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from './components/Header';
import Todo from './components/Todo';

export default function App() {
  // Array of tasks for testing purposes
  //   Reference React.js todo app code from other exercise/assignment
  const [todos, setTodos] = useState([
    {text: 'task 1', key: '1', completed: false},
    {text: 'task 2', key: '2', completed: false},
    {text: 'task 3', key: '3', completed: false},
  ]);

  //   Define a state called text and a function to set the state variable
  const [text, setText] = useState('');

  //   newTodo function creates a new todo item with unique key
  newTodo = () => {
    // Checking if user has entered some text
    // If its true the new todo item is added into the array using setTodos function
    if (text.length > 0) {
      // Use key/values from array of tasks in placeholder above
      setTodos([
        ...todos,
        {text: text, key: Date.now().toString(), completed: false},
      ]);
      // Text state variable is set to empty after the input field is cleared once a todo item is added
      setText('');
    }
  };

  return (
    // Views are like divs - they wrap elements in a container together
    <View style={styles.container}>
      {/* Add Header component I created here */}
      <Header />
      <View style={styles.content}>
        <View style={styles.addTodoContainer}>
          <TextInput
            style={styles.addTodoInput}
            onChangeText={text => setText(text)}
            value={text}
            placeholder="Add Todo"
          />
          <TouchableOpacity style={styles.addTodoButton} onPress={addTodo}>
            <Text style={styles.addTodoButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* Contains full list content */}
        <View style={styles.list}>
          {/* Contains the list items */}
          {/* FlatList needs specific props - check them in documentation Arlin linked */}
          {/* Needs data prop and renderItem function */}
          <FlatList
            data={todos}
            // renderItem function renders each item for the list
            renderItem={({item}) => (
              // Output the item with text component
              <Todo item={item} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 50,
  },
  list: {
    marginTop: 30,
  },
  addTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addTodoInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 18,
    borderRadius: 6,
    marginRight: 10,
  },
  addTodoButton: {
    backgroundColor: '#3498db',
    borderRadius: 6,
    padding: 10,
  },
  addTodoButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
