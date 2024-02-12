import {View, Text, SafeAreaView, FlatList, Button} from 'react-native';
import React, {useState} from 'react';
import ArtScreenCard from './ArtScreenComponents/ArtScreenCard';
import main_data from '../../../data/main_data.json';
import SearchBar from '../HomeScreen/HomeScreenComponents/SearchBarComponent';
import moment from 'moment';

const ArtScreen = ({navigation}: any) => {
  const [list, setList] = useState(
    main_data.filter(item => item.category === 'Art'),
  );

  const filterUpcomingActivities = (activities: any) => {
    const currentDate = moment();
    return activities.filter((activity: any) =>
      moment(activity.date, 'DD-MM-YYYY').isSameOrAfter(currentDate, 'day'),
    );
  };

  const renderActivity = ({item}: any) => (
    <ArtScreenCard
      activity={item}
      function={() => navigation.navigate('ArtDetailScreen', {art: item})}
    />
  );

  const renderSeperator = () => (
    <View style={{borderWidth: 1, borderColor: '#e0e0e0'}} />
  );

  const handleSearch = (searchText: string) => {
    const filteredList = main_data.filter(data => {
      const currentName = data.name.toLowerCase();
      const currentLocation = data.city.toLowerCase();
      const currentCategory = data.category.toLowerCase();
      return (
        currentName.includes(searchText.toLowerCase()) ||
        currentLocation.includes(searchText.toLowerCase()) ||
        currentCategory.includes(searchText.toLowerCase())
      );
    });

    setList(filteredList.filter(item => item.category === 'Art'));
  };

  const upcomingActivities = filterUpcomingActivities(list);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={<SearchBar onSearch={handleSearch} />}
        keyExtractor={item => item.id.toString()}
        renderItem={renderActivity}
        data={upcomingActivities}
        numColumns={2}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};

export default ArtScreen;
