import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import main_data from '../../../../../data/main_data.json';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RatingScrollView = ({navigation}: any) => {
  const filterByRating = (rating: number) => {
    return main_data.filter((item: any) => parseFloat(item.rating) >= rating);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<Icon key={i} name="star" size={20} color="#FFB400" />);
    }
    return stars;
  };

  const renderActivityImages = () => {
    const filteredActivities = filterByRating(4);
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        {filteredActivities.map((activity: any) => (
          <TouchableOpacity
            key={activity.id}
            onPress={() =>
              navigation.navigate('HomeDetailScreen', {home: activity})
            }
            style={styles.activityItem}>
            <Image source={{uri: activity.image}} style={styles.image} />
            <Text style={styles.activityName}>{activity.name}</Text>
            <Text style={styles.category}>{activity.category}</Text>
            <View style={styles.ratingContainer}>
              {renderStars(parseFloat(activity.rating))}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Featured Activities</Text>
      {renderActivityImages()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  activityItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  activityName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  category: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  starIcon: {
    marginRight: 5,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});

export default RatingScrollView;
