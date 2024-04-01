import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import Icon from 'react-native-vector-icons/MaterialIcons';

  export default function Header()
  {
    return(<View
        style={styles.header}>
        {/* <Image
          style={styles.tinyLogo}
          source={
            require('./F.png') 
          }
        /> */}

        <View
          style={{
            flexDirection: 'column',
            width: 154,
            marginLeft: 12,
          }}>
          <Text
            style={styles.pfp}>
            Narayan Murthy
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>navigation.navigate('Location')}>
              <Icon name="location-pin" size={16} color="#2441C2" />
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={styles.add}>
                  421/B, 24th main road..
                </Text>
                <Icon name="keyboard-arrow-down" size={17} color="#142368" />
              </View>
            </TouchableOpacity>
            {/*  */}
          </View>
        </View>

        <View
          style={{
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 16.37,
            color: '#637381',
            flexDirection: 'row',
            marginTop: 15,
            marginHorizontal: 34.41
          }}>
          <Icon name="search" size={24} color="#212B36" marginTop={11.47} />
          <Icon
            name="shopping-cart"
            size={24}
            color="#212B36"
            marginLeft={21.47}
            marginTop={11.47}
          />
        </View>
      </View>
      );
  }
        
  const styles = StyleSheet.create({

    header:{
        width: '100%',
        height: 124,
        backgroundColor: 'white',
        marginTop: -15,
        borderColor: 'black',
        borderWidth: 0,
        flexDirection: 'row',
        padding: 24,
      },

    
  });