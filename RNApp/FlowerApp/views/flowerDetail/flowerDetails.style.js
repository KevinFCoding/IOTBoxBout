import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    title:{
        textAlign: 'center'
    },
    blocInfo:{
        alignSelf: 'center'
    },
    info:{
        flexDirection: 'row'
    },
    pressable:{
        marginTop : 20,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: "flex-end"
    }
});