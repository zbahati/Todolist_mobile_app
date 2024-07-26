
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './components/header';
import Form from './components/form';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Wake up at 7:00", key: '1' },
    { text: "Drink water", key: '2' },

  ])

  const onPressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter((todos) => todos.key !== key)
    })
  }
  return (
    <View style={styles.AppContainer}>
      {/* header */}
      <Header />
      <View style={styles.main}>
        {/* form */}
        <Form />
        <View style={styles.TodoContainer}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onPressHandler(item.key)}
                style={styles.Listitem} >
                <Text style={styles.Todo}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: '#021526',
    marginTop: 45,
  },

  main: {
    marginTop: 2
  },

  TodoContainer: {

  },
  Listitem: {
    marginTop: 20,
    backgroundColor: "#FFDFD6",
    padding: 20
  },

  Todo: {
    fontFamily: "monospace",
    fontSize: 20
  }

})