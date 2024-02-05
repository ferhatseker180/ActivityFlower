import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import SearchBar from './HomeScreenComponents/SearchBarComponent'
import MainCard from './HomeScreenComponents/MainCardComponent'
import main_data from '../../../data/main_data.json'

const HomeScreen = ({navigation} : any) => {

  const renderActivity = ({item} : any) => <MainCard activity={item} function={() => navigation.navigate('HomeDetailScreen',{home : item})} />

  const renderSeperator = () => <View style = {{borderWidth:1,borderColor:'#e0e0e0'}} />

  const handleSearch = (text : any) => {
    const filteredList = main_data.filter(data => {
      const searchedText = text.toLowerCase();
      const currentName = data.name.toLowerCase();
      const currentCategory = data.category.toLowerCase();
      const currentLocation = data.location.toLowerCase();

      return currentName.indexOf(searchedText) > - 1 || currentLocation.indexOf(searchedText) > -1 && currentCategory.indexOf(searchedText)>-1 ;
      
    });

    setList(filteredList);
  }

  const [list,setList] = useState(main_data);

  return (
    <SafeAreaView style={{flex:1}}>
     
     <SearchBar onSearch={handleSearch} />

      
     <FlatList

     keyExtractor={(item) => item.id.toString()}
     renderItem={renderActivity}
     data={list}
     numColumns={2}
     ItemSeparatorComponent={renderSeperator}
    
     />

    </SafeAreaView>
  )
}

export default HomeScreen