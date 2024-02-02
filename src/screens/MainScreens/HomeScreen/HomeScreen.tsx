import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import SearchBar from './HomeScreenComponents/SearchBarComponent'
import MainCard from './HomeScreenComponents/MainCardComponent'
import main_data from '../../../data/main_data.json'
const HomeScreen = () => {

  const renderActivity = ({item} : any) => <MainCard activity={item} />

  return (
    <SafeAreaView style={{flex:1}}>
     
     <SearchBar/>

      
     <FlatList

     renderItem={renderActivity}
     data={main_data}
    
     />

    </SafeAreaView>
  )
}

export default HomeScreen