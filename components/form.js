import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const Form = () => {

    const [text, setText] = useState('');

    const OnchangeHandler = (val) => {
        console.log(val)
        setText(val)
    }

    const handleSubmit = () => {
        console.log()
    }
    return (
        <View style={styles.Form}>
            <TextInput
                style={styles.TextInput}
                onChangeText={(val) =>OnchangeHandler(val)}
                placeholder="add Todo"
            />
            <Button title="Add Todo" handleSubmit={handleSubmit(text)} />
        </View>
    )
}

export default Form;

const styles = StyleSheet.create({
    Form: {
        marginTop: 10,
        backgroundColor:'#E2E2B6'
    },
    TextInput: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        fontSize: 20,
        padding: 16,
    }
   
})