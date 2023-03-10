import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles the header area
  header: {
    height: 100,
    paddingTop: 42,
    backgroundColor: 'blue',
  },
  // Styles the text/title inside the header area
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
});
