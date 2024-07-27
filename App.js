
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/header';
import Form from './components/form';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Wake up at 7:00", key: '1' },
    { text: "Drink water", key: '2' },

  ])


  const handleSubmit = (text) => {
    if (text.length > 5) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert("OOPS!", "todo must have atleast 4 characters.", [
        { text: "Understood", onPress: () => console.log("alert closed") }
      ])
    }
  }


  const onPressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter((todos) => todos.key !== key)
    })
  }
  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss()
    }}>
      <View style={styles.AppContainer}>
        {/* header */}
        <Header />
        <View style={styles.main}>
          {/* form */}
          <Form handleSubmit={handleSubmit} />
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
    </TouchableWithoutFeedback>

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