import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function App() {
  // Array of tasks for testing purposes
  const [todos, setTodos] = useState([
    {text: 'task 1', key: '1'},
    {text: 'task 2', key: '2'},
    {text: 'task 3', key: '3'},
  ]);

  return (
    // Views are like divs - they wrap elements in a container together
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.content}>
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
            <Text>{item.text}</Text>
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
});
