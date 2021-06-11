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
    },
    floatButton:{
      position: 'absolute',
      bottom: 0,
      right: 0,
      margin: 20,
      backgroundColor: "green"
    },
    puceItem:{
        backgroundColor: "white",
        marginBottom: 30,
        marginLeft: 3,
        marginRight: 3,
        padding: 10,
        height: 80,
        elevation: 5,
        borderRadius : 10
    },
    pressable: {
      flex: 1,
      alignSelf: 'stretch'
    },
    modalTitle:{
      textAlign: "center",
      fontSize: 20
    },
    flatList:{
      marginTop: 40
    }
});