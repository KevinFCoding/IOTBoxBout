import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title:{
        textAlign: 'center',
        marginTop: 5,
        padding:20,
        fontSize: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: "grey"
    },
    addButton:{
      position: 'absolute',
      bottom: 0,
      right: 0,
      margin: 20,
      backgroundColor: "green"
    },   
    floatButton:{
      position: 'absolute',
      bottom: 0,
      right: 0,
      margin: 20,
      backgroundColor: "green"
    },
});