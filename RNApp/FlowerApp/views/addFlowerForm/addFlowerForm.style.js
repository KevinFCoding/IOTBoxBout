import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        marginBottom: 30,
        textAlign: 'center'
    },
    field:{
        margin: 20,
        marginBottom: 0,
        borderColor: "grey",
        borderWidth: 0.2,
        padding: 10,
        height: 60
    },
    addButton:{
        alignSelf: "center",
        margin: 30,
        width: "60%"
    }
})