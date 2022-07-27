import React from 'react';
import {
  StyleSheet,
  TextInput,
  Keyboard,
  View,
  Button
} from 'react-native';

const SearchBar = ({searchPhrase, setSearchPhrase}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar} >
        <TextInput
          style={styles.input}
          placeholder="Enter game name or filter"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
		<Button 
		title="X"
		accessibilityLabel="Clear"
		color='#808080'
		onPress={() => setSearchPhrase("")}
		/>
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",

  },
  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});