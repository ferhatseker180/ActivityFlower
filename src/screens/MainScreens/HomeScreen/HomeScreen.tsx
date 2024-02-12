import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import SearchBar from './HomeScreenComponents/SearchBarComponent'
import MainCard from './HomeScreenComponents/MainCardComponent'
import main_data from '../../../data/main_data.json'
import moment from 'moment';
import RatingScrollView from './HomeScreenComponents/ScrollViewComponent/RatingScrollView'
import DateRangePicker from './HomeScreenComponents/DateSearchBarComponent/DateRangePicker'

const HomeScreen = ({navigation} : any) => {

  const [list,setList] = useState(main_data);
  const [filteredActivities, setFilteredActivities] = useState(main_data);
 

  const filterUpcomingActivities = (activities : any) => {
    const currentDate = moment();
    return activities.filter((activity : any) => moment(activity.date, 'DD-MM-YYYY').isSameOrAfter(currentDate, 'day'));
  };
 
  const renderActivity = ({item} : any) => <MainCard activity={item} function={() => navigation.navigate('HomeDetailScreen',{home : item})} />

  const renderSeperator = () => <View style = {{borderWidth:1,borderColor:'#e0e0e0'}} />

  const handleSearch = (text : any) => {
    const filteredList = main_data.filter(data => {
      const searchedText = text.toLowerCase();
      const currentName = data.name.toLowerCase();
      const currentCategory = data.category.toLowerCase();
      const currentLocation = data.city.toLowerCase();

      return currentName.includes(text) || currentCategory.includes(text) || currentLocation.includes(text);
      
    });

    setList(filteredList);
    setFilteredActivities(filterUpcomingActivities(filteredList));
  }

  const handleDateRangeSelection = (startDate: any, endDate: any) => {
    const filteredList = main_data.filter((activity) => {
      const activityDate = moment(activity.date, 'DD-MM-YYYY');
      return activityDate.isSameOrAfter(startDate) && activityDate.isSameOrBefore(endDate);
    });

    setFilteredActivities(filteredList);
  }
  const upcomingActivities = filterUpcomingActivities(filteredActivities);

 

  return (
    <SafeAreaView style={{flex:1}}>
     
     <SearchBar onSearch={handleSearch} />

     <DateRangePicker onDatesSelected={handleDateRangeSelection} />
      
     <FlatList
     ListHeaderComponent={<RatingScrollView navigation={navigation} />}
     keyExtractor={(item) => item.id.toString()}
     renderItem={renderActivity}
     data={upcomingActivities}
     numColumns={2}
     ItemSeparatorComponent={renderSeperator}
    
     />

    </SafeAreaView>
  )
}


export default HomeScreen