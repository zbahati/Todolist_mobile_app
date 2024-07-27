import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const Form = ({handleSubmit}) => {
    const [text, setText] = useState('');

    const OnchangeHandler = (val) => {
        setText(val)
    }

    return (
        <View style={styles.Form}>
            <TextInput
                style={styles.TextInput}
                onChangeText={(val) =>OnchangeHandler(val)}
                placeholder="add Todo"
            />
            <Button title="Add Todo" onPress={() => handleSubmit(text)}/>
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