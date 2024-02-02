import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import banner_data from '../../../../../data/banner_data.json'

const BannerCard = () => {
  return (
    <>
    <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
        {
          banner_data.map(bannerNews => <Image style = {styles.bannerImage} source={{uri : bannerNews.imageUrl}} />)
        }
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    bannerImage : {
        height : Dimensions.get('window').height / 5,
        width : Dimensions.get('window').width /2 ,
      },
})

export default BannerCard