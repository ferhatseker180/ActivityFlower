import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './ArtDetailScreenComponent/ArtDetailScreenStyle';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const ArtDetailScreen = ({route}: any) => {
  const {art} = route.params;
  const {
    name,
    image,
    image2,
    image3,
    category,
    date,
    author,
    description,
    location,
    startTime,
    finishTime,
    price,
    lat,
    long,
  } = art;

  const defaultImage = require('../../../data/images/art.png'); 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal={true}>
          <Image
            style={styles.image}
            source={image ? {uri: image} : defaultImage}
          />
          <Image
            style={styles.image}
            source={image2 ? {uri: image2} : defaultImage}
          />
          <Image
            style={styles.image}
            source={image3 ? {uri: image3} : defaultImage}
          />
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Category:</Text>
          <Text style={styles.info}>{category}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Author Or Composer:</Text>
          <Text style={styles.info}>{author}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.info}>{location}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Date:</Text>
          <Text style={styles.info}>{date}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Start Time:</Text>
          <Text style={styles.info}>{startTime}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Finish Time:</Text>
          <Text style={styles.info}>{finishTime}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Ticket Price:</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>

      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: lat, //  enlem
          longitude: long, // boylam
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}>
        <Marker
          coordinate={{latitude: lat, longitude: long}} 
          title={location}
          description={location}
        />
      </MapView>
    </ScrollView>
  );
};

export default ArtDetailScreen;
