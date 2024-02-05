import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import TheaterCard from './TheaterScreenComponents/TheaterCard'
import main_data from '../../../data/main_data.json'
import SearchBar from '../HomeScreen/HomeScreenComponents/SearchBarComponent/SearchBar'

const TheaterScreen = ({navigation} : any) => {

  const [list,setList] = useState(main_data.filter(item => item.category === 'Theater'));

  const renderActivity = ({item} : any) => <TheaterCard activity={item} function={() => navigation.navigate('TheaterDetailScreen',{theater : item})} />
  

 
  const renderSeperator = () => <View style = {{borderWidth:1,borderColor:'#e0e0e0'}} />

  const handleSearch = (text : any) => {
    const filteredList = main_data.filter(data => {
      const searchedText = text.toLowerCase();
      const currentName = data.name.toLowerCase();
      const currentCategory = data.category.toLowerCase();
      const currentLocation = data.location.toLowerCase();

     return currentName.indexOf(searchedText) > - 1 || currentLocation.indexOf(searchedText) > -1 && currentCategory.indexOf(searchedText)>-1 ;
    });

    setList(filteredList.filter(item => item.category === 'Theater'));
  }

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

export default TheaterScreen