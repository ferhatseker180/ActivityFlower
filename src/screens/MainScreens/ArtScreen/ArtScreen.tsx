import { View, Text, SafeAreaView, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import ArtScreenCard from './ArtScreenComponents/ArtScreenCard'
import main_data from '../../../data/main_data.json'
import SearchBar from '../HomeScreen/HomeScreenComponents/SearchBarComponent'

const ArtScreen = ({navigation}: any) => {

  const renderActivity = ({item} : any) => <ArtScreenCard activity={item} function={() => navigation.navigate('ArtDetailScreen', {art: item})} />

  const [list,setList] = useState(main_data.filter(item => item.category === 'Art'));
 
  
  const renderSeperator = () => <View style = {{borderWidth:1,borderColor:'#e0e0e0'}} />

  const handleSearch = (text : any) => {

    const filteredList = main_data.filter(data => {
      const searchedText = text.toLowerCase();
      const currentName = data.name.toLowerCase();
      const currentLocation = data.location.toLowerCase();
      const currentCategory = data.category.toLowerCase();

      return currentName.indexOf(searchedText) > - 1 || currentLocation.indexOf(searchedText) > -1 && currentCategory.indexOf(searchedText)>-1 ;

    });

    setList(filteredList.filter(item => item.category === 'Art'));
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

export default ArtScreen