import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './ConcertCardStyle'

const ConcertCard = (props : any) => {
  return (
    <View style={styles.mainContainer}>
 
      <Image style={styles.imageStyle} source={{uri: props.activity.image}} />

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
       
        {
           props.activity.category === 'Concert' && (
            <Icon name='music' size={20} />
            )
        }
        <Text style={styles.nameStyle}> {props.activity.name} </Text>  

      </View>

      <TouchableOpacity style = {styles.detailButtonStyle}>
            <Text style={styles.buttonTextStyle} onPress={props.function}> Go To Detail Page </Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default ConcertCard;