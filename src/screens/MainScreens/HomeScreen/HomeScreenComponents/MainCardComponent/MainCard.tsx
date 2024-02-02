import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './MainCardStyle'

const MainCard = (props : any) => {
  return (
    <View style={styles.container}>
    <Image style={styles.imageStyle} source={{uri: props.activity.image}} />

    <View style={styles.innerContainerStyle}>
      <Text style={styles.titleStyle}> {props.activity.name} </Text>

      <View style={styles.mergeContainer}>
        <View style={styles.infoContainerStyle}>
          <Text style={styles.artistTextStyle}> {props.activity.category} </Text>
          <Text style={styles.yearTextStyle}> {props.activity.startTime} </Text>
        </View>

      </View>
    </View>
  </View>
  )
}

export default MainCard