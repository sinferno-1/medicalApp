import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('window');
// import {Searchbar} from 'react-native-paper';
// import { SearchBar } from 'react-native-screens';
import Searchbar from '../Searchbar';
import { ImagesAssets } from '../../assets/images/ImageAssets';

export const Location = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: 390,
            height: 140,
            backgroundColor: 'white',
            marginTop: 0,
            borderColor: 'black',
            borderWidth: 0,
            flexDirection: 'column',
            paddingTop: 8,
          }}>
          <View
            style={{
              height: 64,
              width: 390,
              paddingVertical: 5,
              paddingHorizontal: 24,
              position: 'relative',
            }}>
            <View>
              <Searchbar
                placeholder="Search for area, street name"
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>
          </View>
          <View
            style={{
              height: 12,
              width: '100%',
              flexDirection: 'row',
              paddingHorizontal: 24,
              marginVertical: 9,
              marginLeft: -8,
            }}>
            <View
              style={{
                width: 156,
                height: 1,
                backgroundColor: '#C4CDD5',
              }}></View>
            <View
              style={{
                height: 18,
                width: 22,
                marginTop: -8,
                marginHorizontal: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 19.1,
                  color: '#637381',
                }}>
                OR
              </Text>
            </View>
            <View
              style={{
                width: 156,
                height: 1,
                backgroundColor: '#C4CDD5',
              }}></View>
          </View>

          <View
            style={{
              height: 64,
              width: 390,
              flexDirection: 'row',
              paddingHorizontal: 24,
              paddingBottom: 6,
            }}>
            <View style={{height: 22, width: 22, }}>
              <Icon name="my-location" size={22} color="#2441C2" />
            </View>

            <View style={{marginLeft: 9}}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  lineHeight: 24.46,
                  color: '#2441C2',
                }}>
                Use current location
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 190,
            backgroundColor: 'white',
            flexDirection: 'column',
            marginTop: 8,
            paddingHorizontal: 24,
            paddingVertical: 12,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 600,
              lineHeight: 16.37,
              color: '#212B36',
            }}>
            SAVED ADDRESSES
          </Text>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 59,
              paddingVertical: 8,
            }}>
            <View style={{width: 25, height: 22,  marginTop: 5}}>
              <Icon name="home" size={25} color="#DFE3E8" />
            </View>
            <View style={{flexDirection: 'column', marginLeft: 12}}>
              <View style={{height: 18, width: 90}}>
                <Text
                  style={styles.hd}>
                  Home
                </Text>
              </View>
              <View style={{width: 296, height: 23, borderWidth: 0}}>
                <Text
                  style={styles.adcon}>
                  1st Sector, HSR Layout, Bengaluru, Karnataka
                </Text>
              </View>
            </View>
          </View>
          <View
            style={styles.lyt}>
            <View style={{width: 25, height: 22, marginTop: 5}}>
              <Icon name="work" size={25} color="#DFE3E8" />
            </View>
            <View style={{flexDirection: 'column', marginLeft: 12}}>
              <View style={{height: 18, width: 90}}>
                <Text
                  style={styles.hd}>
                  Work
                </Text>
              </View>
              <View style={{width: 296, height: 23, borderWidth: 0}}>
                <Text
                  style={styles.adcon}>
                  1st Sector, HSR Layout, Bengaluru, Karntaka
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginTop: 8, marginHorizontal: 8}}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 600,
                lineHeight: 16.37,
                color: '#2441C2',
                fontFamily:'Nunito-Sans'
              }}>
              VIEW MORE
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 168,
            backgroundColor: 'white',
            flexDirection: 'column',
            marginTop: 8,
            paddingHorizontal: 24,
            paddingVertical: 12,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 600,
              lineHeight: 16.37,
              color: '#212B36',
            }}>
            RECENT SEARCHES
          </Text>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 59,
              paddingVertical: 8,
            }}>
            <View style={{width: 25, height: 22,  marginTop: 5}}>
              <Icon name="history" size={25} color="#DFE3E8" />
            </View>
            <View style={{flexDirection: 'column', marginLeft: 15}}>
              <View style={{height: 18, width: 90}}>
                <Text
                  style={styles.hd}>
                  Hrs layout
                </Text>
              </View>
              <View style={{width: 296, height: 23, borderWidth: 0}}>
                <Text
                  style={styles.adcon}>
                  1st Sector, HSR Layout, Bengaluru, Karntaka
                </Text>
              </View>
            </View>
          </View>
          <View
            style={styles.lyt}>
            <View style={{width: 25, height: 22,  marginTop: 5}}>
              <Icon name="history" size={25} color="#DFE3E8" />
            </View>
            <View style={{flexDirection: 'column', marginLeft: 12}}>
              <View style={{height: 18, width: 90}}>
                <Text
                  style={styles.hd}>
                  Hrs layout
                </Text>
              </View>
              <View style={{width: 296, height: 23, borderWidth: 0}}>
                <Text
                  style={styles.adcon}>
                  1st Sector, HSR Layout, Bengaluru, Karntaka
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 1935,
  },

  hd: {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 20.46,
    color: '#212B36',
  },

  adcon: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 19.1,
    color: '#637381',
  },

  lyt: {
    flexDirection: 'row',
    width: '100%',
    height: 59,
    paddingVertical: 8,
    borderTopColor: '#F4F6F8',
    borderTopWidth: 1,
    borderBottomColor: '#F4F6F8',
    borderBottomWidth: 1,
  }
});
