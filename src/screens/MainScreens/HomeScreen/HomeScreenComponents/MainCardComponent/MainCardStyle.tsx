import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
    container: {
        padding : 10,
        flexDirection : 'row',

    },

    imageStyle : {
        width : 100,
        height : 100,
        borderRadius : 50,
    },

    innerContainerStyle : {
       padding : 10,
       flex : 1,
       justifyContent : 'center',

    },

    titleStyle : {
        fontWeight : 'bold',
        color : 'black',
        fontSize : 28,
    },

    infoContainerStyle : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
    },

    artistTextStyle : {
        fontSize : 16,
        color : 'black',
    },

    yearTextStyle: {
        marginLeft : 6,
        color : 'grey',
        fontWeight : 'bold',
        fontSize : 12,
       
    },

    soldOutContainer : {
        borderWidth : 1,
        borderColor : 'red',
        padding : 10,
        borderRadius : 5,
        
    },

    soldOutTitleStyle : {
        color : 'red',
        fontSize : 12,
    },

    mergeContainer : {
        flexDirection : 'row',
    },

})