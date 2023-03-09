import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

function App() {
  // State variable for todos list
  const [todos, setTodos] = useState([]);
  // State variable for new todos
  const [newTodo, setNewTodo] = useState('');
  // Add a new todo to the list of todos
  const handleAddTodo = () => {
    setTodos([...todos, {id: Date.now(), text: newTodo, completed: false}]);
    setNewTodo('');
  };
  // Toggle completed state of todo item
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
  // Delete a todo item
  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Add TextInput to add new todos */}
      <View style={styles.inputContainer}>
        <Text
          style={styles.input}
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          placeholder="Add new todo"
          onSubmitEditing={handleAddTodo}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {/* Render the todo list items using FlatList or ScrollView */}
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleToggleCompleted(item.id)}>
            <View style={styles.todoContainer}>
              {/* Checkbox to represent completed state of item */}
              <View style={styles.checkboxContainer}>
                <View
                  style={[
                    styles.checkbox,
                    item.completed && styles.checkedCheckbox,
                  ]}
                />
              </View>
              {/* Styling for completed items */}
              <Text
                style={[
                  styles.todoText,
                  item.completed && styles.completedTodoText,
                ]}>
                {item.text}
              </Text>
              {/* Renders a delete button w/each list item that renders */}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteTodo(item.id)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#009688',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
