import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import banner_data from '../../../../../data/banner_data.json';
import Card from '../MainCardComponent/MainCard';


const BannerCard = () => {
  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {banner_data.map(bannerActivity => (
          //  <Text> <Image style = {styles.bannerImage} source={{uri : bannerActivity.imageUrl}} /> Bu bir deneme metnidir   </Text>

          <View style={{height: 200, width: 200, overflow: 'hidden'}}>
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={{uri: bannerActivity.imageUrl}}>
                
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 2,
  },
});

export default BannerCard;
