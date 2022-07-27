import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, gameplayMain, gameplayMainExtra, gameplayCompletionist}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>Main Story: {gameplayMain} hours</Text>
	<Text style={styles.details}>Main + Extra: {gameplayMainExtra} hours</Text>
	<Text style={styles.details}>Completionist: {gameplayCompletionist} hours</Text>
  </View>
);

// the filter
const List = ({ searchPhrase, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} gameplayMain={item.gameplayMain} gameplayMainExtra={item.gameplayMainExtra} gameplayCompletionist={item.gameplayCompletionist} />;
    }
    // filter of the name
    if (item.name.toUpperCase().trim().includes(searchPhrase.toUpperCase().trim())) {
      return <Item name={item.name} gameplayMain={item.gameplayMain} gameplayMainExtra={item.gameplayMainExtra} gameplayCompletionist={item.gameplayCompletionist} />;
    }
    // filter of the description
    if (item.id.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.gameplayMain} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});