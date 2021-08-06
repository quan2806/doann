import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Result from './Result';

const SearchPage = props => {
  const IdM = props.route.params.IdM;
  const Meal = props.route.params.Meal;
  const date = props.route.params.date;
  const [searchText, setSearch] = useState('');
  //console.log(props);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.headerContainer} />
      <View style={styles.searchBarOuter}>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'black'}
            style={styles.searchbar}
            clearButtonMode="always"
            defaultValue={searchText}
            onChangeText={text => setSearch(text)}
          />
        </View>
      </View>
      <ScrollView style={styles.listFoodContainer}>
        <Result
          navigation={props.navigation}
          IdM={IdM}
          Meal={Meal}
          date={date}
          search={searchText}
        />
      </ScrollView>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerConatiner: {
    backgroundColor: 'rgb(0, 153, 204)',
    width: '100%',
    height: '13%',
  },
  searchBarOuter: {
    width: '100%',
    height: '7%',
    backgroundColor: 'rgb(235,235,235)',
    alignItems: 'center',
  },
  inputBox: {
    borderRadius: 50,
    borderWidth: 0.5,
    height: '70%',
    width: '85%',
    top: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  searchbar: {
    width: '80%',
  },
  listFoodContainer: {
    backgroundColor: '#ffffff',
  },
});
