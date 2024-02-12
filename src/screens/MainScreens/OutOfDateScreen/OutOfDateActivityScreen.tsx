import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment';
import OutOfDateActivityCard from './OutOfDateScreenComponent/OutOfDateCardComponent/OutOfDateActivityCard';
import SearchBar from './OutOfDateScreenComponent/SearchBarComponent';
import main_data from '../../../data/main_data.json'

const OutOfDateActivityScreen = ({navigation} : any) => {
  
    const [list, setList] = useState(main_data);

    const filterPastActivities = (activities : any) => {
      const currentDate = moment();
  
      return activities.filter((activity : any) => moment(activity.date, 'DD-MM-YYYY').isBefore(currentDate, 'day'));
    };
  
    const renderActivity = ({ item } : any) => (
      <OutOfDateActivityCard
        activity={item}
        function={() => navigation.navigate('OutOfDateDetailScreen', { invalid: item })}
      />
    );
  
    const renderSeperator = () => <View style={{ borderWidth: 1, borderColor: '#e0e0e0' }} />;
  
    const handleSearch = (text : any) => {
      const filteredList = main_data.filter(data => {
        const searchedText = text.toLowerCase();
        const currentName = data.name.toLowerCase();
        const currentCategory = data.category.toLowerCase();
        const currentLocation = data.location.toLowerCase();
  
        return currentName.indexOf(searchedText) > -1 || currentLocation.indexOf(searchedText) > -1 && currentCategory.indexOf(searchedText) > -1;
      });
  
      setList(filteredList);
    };
  
    const pastActivities = filterPastActivities(list);
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderActivity}
          data={pastActivities}
          numColumns={2}
          ItemSeparatorComponent={renderSeperator}
        />
      </SafeAreaView>
    )
   

}

export default OutOfDateActivityScreen;