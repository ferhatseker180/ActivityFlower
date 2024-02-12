import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  
    mainContainer : {
        flex : 1,
        backgroundColor: 'azure',
        margin : 8,
        borderWidth : 1,
        borderRadius : 6,
        padding : 0,
        borderColor : 'azure',
        alignContent : 'center',
        
    },

    imageStyle : {
        height : Dimensions.get('window').height / 5,
        borderWidth : 1,
        borderRadius : 10,
        resizeMode : 'contain',
        borderColor:'white'
    },

    errorImage: {
        width: Dimensions.get('window').height / 5, // Uygun bir boyut belirleyin
        height: Dimensions.get('window').height / 5, // Uygun bir boyut belirleyin
        resizeMode: 'contain',
        borderColor: 'white',  
      },
   
    nameStyle : {
        fontSize : 18,
        fontWeight : 'bold',
        textAlign : 'center',
        margin : 2,
        color : 'black',
    },

    buttonTextStyle : {
        color : 'white',
        textAlign:'center',
        fontSize: 18,
    },

    detailButtonStyle : {
        backgroundColor: 'brown',
        height:40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    
    },

})