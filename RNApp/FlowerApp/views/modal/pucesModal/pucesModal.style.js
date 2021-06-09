import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      modalSubContainer:{
        backgroundColor:"white",
        elevation: 10,
        borderRadius:30,
        padding: 25,
        alignSelf: 'stretch',
        margin: 20,
        flex: 1,
        alignItems: 'center'
    },
    floatButton:{
      position: 'absolute',
      bottom: 0,
      right: 0,
      margin: 20,
      backgroundColor: "green"
    },
    puceItem:{
        backgroundColor: "red",
        margin: 30,
        marginBottom: 0,
        elevation: 5,
        padding: 10
    }
});