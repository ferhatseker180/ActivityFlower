import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './ConcertCardStyle'

const ConcertCard = (props : any) => {

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <View style={styles.mainContainer}>
 
      <Image style={[styles.imageStyle, imageError && styles.errorImage]} 
      source={imageError ? require('../../../../data/images/concert.jpg') : { uri: props.activity.image }}
      onError={handleImageError}
      />

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