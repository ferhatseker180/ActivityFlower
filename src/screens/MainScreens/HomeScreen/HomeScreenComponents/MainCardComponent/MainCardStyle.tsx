import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const cardWidth = (windowWidth - 24) / 2;

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
        width: '100%',
        height : cardWidth * 1.5,
        borderWidth : 1,
        borderRadius : 10,
        resizeMode : 'cover',
        borderColor:'white'
    },

    errorImage: {
        width: '100%', // Uygun bir boyut belirleyin
        height: cardWidth * 1.5, // Uygun bir boyut belirleyin
        resizeMode: 'cover',
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
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        
    
    },
})