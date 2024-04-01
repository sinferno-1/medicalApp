import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Searchbar({value, updateSearch, style}) {
  const [query, setQuery] = useState();
  const [error, setError] = useState();
  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <View style={styles.vwSearch}>
          {/* <Image
                        style={styles.icSearch}
                        source={require('../../assets/images/ic_search.png')} /> */}

          <Icon name="search" size={23} color="#919EAB" marginLeft={-0} />
        </View>

        <TextInput
          value={query}
          placeholder="Search for area, street name"
          style={styles.textInput}
          onChangeText={text => {
            var letters = /^$|^[a-zA-Z._\b ]+$/;
            if (text.length > 12) setError('Query too long.');
            else if (text.match(letters)) {
              setQuery(text);
              updateSearch(text);
              if (error) setError(false);
            } else setError('Please only enter alphabets');
          }}
        />
        {query ? (
          <TouchableOpacity
            onPress={() => setQuery('')}
            style={styles.vwClear}></TouchableOpacity>
        ) : (
          <View style={styles.vwClear} />
        )}
      </View>
      {error && <Text style={styles.txtError}>{error}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  txtError: {
    marginTop: '2%',
    width: '89%',
    color: 'white',
  },
  vwClear: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    // backgroundColor: 'green',
    flex: 1,
    // fontSize: 14,
    // fontWeight: 400,
    // lineHeight: 19.1,
  },

  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 40,
    // borderWidth: 10,
    // backgroundColor: 'red'
  },
  icSearch: {
    height: 18,
    width: 18,
  },
  searchContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
  },
  container: {
    marginBottom: -10,
    height: 40,
    alignItems: 'center',
    // borderWidth: 1,
    // height: '100%', width: '100%'
  },
});
