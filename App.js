import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function App() {
  return (
    // Views are like divs - they wrap elements in a container together
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.content}>
        {/* Contains full list content */}
        <View style={styles.list}>{/* Contains the list items */}
        {/* FlatList needs specific props - check them in documentation Arlin linked */}
        <FlatList data={todos}
        renderItem={() => ()} />
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
