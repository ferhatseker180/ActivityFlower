import { View, Text, SafeAreaView, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import ArtScreenCard from './ArtScreenComponents/ArtScreenCard'
import main_data from '../../../data/main_data.json'
import SearchBar from '../HomeScreen/HomeScreenComponents/SearchBarComponent'

const ArtScreen = ({navigation}: any) => {


  const renderActivity = ({item} : any) => <ArtScreenCard activity={item} function={() => navigation.navigate('ArtDetailScreen')} />
  const artData = main_data.filter(item => item.category === 'Art');

 
  
  const renderSeperator = () => <View style = {{borderWidth:1,borderColor:'#e0e0e0'}} />

  const handleSearch = (text : any) => {
    const filteredList = artData.filter(data => {
      const searchedText = text.toLowerCase();
      const currentName = data.name.toLowerCase();

      const currentCategory = data.category.toLowerCase();

     return currentName.indexOf(searchedText) > - 1 || currentCategory.indexOf(searchedText)>-1;
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
     data={artData}
     numColumns={2}
     ItemSeparatorComponent={renderSeperator}
    
     />

    </SafeAreaView>
  )
}

export default ArtScreen