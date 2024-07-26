import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return(
        <View style={styles.Header}>
            <Text style={styles.title}>MY TODO</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    Header: {
        backgroundColor: "#03346E",
        padding: 10
    },
    title: {
        fontSize: 36,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})