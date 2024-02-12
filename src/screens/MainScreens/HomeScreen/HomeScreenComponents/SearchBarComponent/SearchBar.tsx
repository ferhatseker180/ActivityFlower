import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './SearchBarStyle';

const SearchBar = (props: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor="black"
        onChangeText={props.onSearch}
        style={styles.text}
      />
    </View>
  );
};

export default SearchBar;
