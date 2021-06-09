import { StyleSheet} from 'react-native';

export const itemStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      margin: 30,
      marginBottom: 0,
      height: 100,
      elevation: 10,
      borderRadius: 20,
    },
    pressable: {
      padding: 10,
      flex: 1,
      alignSelf: 'stretch'
    },
    infos:{
      justifyContent: "space-around"
    },
    title:{
      fontSize : 18,
      fontWeight : 'bold'
    },
    img:{
      width: 100,
      height: 80,
      marginRight: 10 ,
      borderRadius: 5
    },
    subContainer:{
      flexDirection: 'row'
    },
    plantStatus:{
      flexDirection : 'row'
    },
    stateIcon:{
      width: 30,
      height: 30
    }
  });