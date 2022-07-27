/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { HowLongToBeatService, HowLongToBeatEntry } from 'howlongtobeat';
import colors from './components/colors';
import SearchBar from './components/SearchBar'
import List from './components/List'
import React from 'react';
import type {Node} from 'react';
import { useState, useEffect } from "react"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Keyboard,
  Button,
  Text,
  useColorScheme,
  View,
  ToastAndroid,
  FlatList
} from 'react-native';
let hltbService = new HowLongToBeatService();
	  
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? colors.white : colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? colors.light : colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


const App: () => Node = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [fakeData, setFakeData] = useState();
 
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darker : colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Section title="HowLongToBeat">
		Search for <Text style={styles.highlight}>a game</Text> and see how long it takes to <Text style={styles.highlight}>beat it</Text>!{'\n'}
		If you can't see your query, try clearing the search bar
		</Section>
        <View
          style={{
            backgroundColor: isDarkMode ? colors.black : colors.white,
          }}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
	  <Button
		onPress={() => hltbService.search(searchPhrase).then(result => setFakeData(result)).then()}
		title="Update list"
	  />
          <List
            searchPhrase={searchPhrase}
            data={fakeData}
          />
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
	marginBottom: 10
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
	textAlign: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
	textAlign: 'center'
  },
  highlight: {
    fontWeight: '700',
  },
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

export default App;
