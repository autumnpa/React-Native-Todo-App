import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import Header from './components/Header';
import Todo from './components/Todo';

let text = ' ';

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
  const newTodo = () => {
    // console.log('helllllooooo');
    // Checking if user has entered some text
    // If its true the new todo item is added into the array using setTodos function
    if (text.length > 0) {
      // Use key/values from array of tasks in placeholder above
      setTodos([
        ...todos,
        {text: text, key: Date.now().toString(), completed: false},
      ]);
      // Text state variable is set to empty after the input field is cleared once a todo item is added
      text = '';
    }
  };

  const toggleTodo = id => {
    const newTodos = todos.map(todo => {
      if (todo.key === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.key !== id);
    setTodos(newTodos);
  };

  // Create a function to update the text and impliment it in the external Header component file
  const updateText = newText => {
    text = (newText);
  };

  return (
    // Views are like divs - they wrap elements in a container together
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          {/* Contains the list items */}
          {/* FlatList needs specific props - check them in documentation Arlin linked */}
          {/* Needs data prop and renderItem function */}
          <FlatList
            ListHeaderComponent={() => (
              <Header text={text} updateText={updateText} onPress={newTodo} />
            )}
            data={todos}
            // renderItem function renders each item for the list
            renderItem={({item}) => (
              // Output the item with text component
              <Todo
                item={item}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
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
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
