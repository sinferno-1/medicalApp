import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './components/screens/Home';
import {Location} from './components/screens/Location';
import {Upload_Prescription} from './components/screens/UploadPrescription';
import {Add_Prescription} from './components/screens/Add_Prescription';
import {Cart} from './components/screens/Cart';
import Header from './components/header';
import {ImagesAssets} from './assets/images/ImageAssets';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
// import MaterialIcon, {colorPalette} from 'material-icons-react';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getHeaderTitle} from '@react-navigation/elements';
const {width} = Dimensions.get('window');

const Stack = createNativeStackNavigator();

export default function App({props}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: ({navigation, route, options, back, handleScroll}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <ScrollView>
                  <View
                    style={{
                      width: '150  %',
                      height: 124,
                      backgroundColor: 'white',
                      marginTop: -15,
                      borderColor: 'black',
                      borderWidth: 0,
                      flexDirection: 'row',
                      padding: 24,
                      marginLeft: -15,
                      // position: 'sticky'
                    }}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        marginTop: 24,
                        borderRadius: 30,
                        marginLeft: 15,
                      }}
                      source={ImagesAssets.F}
                    />

                    <View
                      style={{
                        flexDirection: 'column',
                        width: 154,
                        marginLeft: 15,
                      }}>
                      <Text
                        style={{
                          marginTop: 24,
                          fontSize: 18,
                          fontWeight: 700,
                          lineHeight: 24.55,
                          color: '#212B36',
                          fontFamily: 'Nunito-Sans',
                        }}>
                        Narayan Murthy
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: -2,
                          marginTop: 2,
                        }}>
                        <TouchableOpacity
                          style={{flexDirection: 'row'}}
                          onPress={() => navigation.navigate('Location')}>
                          <Icon name="location-pin" size={16} color="#2441C2" />
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              // style={styles.add}
                              style={{
                                fontSize: 12,
                                fontWeight: 700,
                                lineHeight: 16.37,
                                color: '#637381',
                                fontFamily: 'Nunito-Sans',
                              }}>
                              421/B, 24th main road..
                            </Text>
                            <Icon
                              name="keyboard-arrow-down"
                              size={17}
                              color="#142368"
                            />
                          </View>
                        </TouchableOpacity>
                        {/*  */}
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 25,
                        marginLeft: 50,
                      }}>
                      <Icon
                        name="search"
                        size={24}
                        color="#212B36"
                        marginTop={11.47}
                      />
                      <Icon
                        name="shopping-cart"
                        size={24}
                        color="#212B36"
                        marginLeft={15.47}
                        marginTop={11.47}
                      />
                    </View>
                  </View>
                </ScrollView>
              );
            },
          }}
        />
        <Stack.Screen name="Location" component={Location} />

        <Stack.Screen
          name="Upload_Prescription"
          component={Upload_Prescription}
          options={{
            header: ({navigation, route, options, back}) => {
              const title = getHeaderTitle(options, route.name);
              const [isSticky, setIsSticky] = useState(false);

              const handleScroll = event => {
                const scrollTop = event.nativeEvent.contentOffset.y;

                setIsSticky(scrollTop > 0);
              };

              return (
                <ScrollView onScroll={handleScroll}>
                  <View
                    style={{
                      width: '150  %',
                      height: 100,
                      backgroundColor: 'white',
                      marginTop: -15,
                      borderColor: 'black',
                      borderWidth: 0,
                      flexDirection: 'row',
                      padding: 24,
                      marginLeft: -15,
                    }}>
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        marginTop: 24,
                        borderRadius: 30,
                        // marginLeft: 15,
                      }}
                    />

                    <TouchableOpacity
                      onPress={() => navigation.navigate('Home')}>
                      <Icon
                        name="arrow-back"
                        size={24}
                        color="#212B36"
                        marginTop={24}
                        marginLeft={-30}
                      />
                    </TouchableOpacity>

                    <View />

                    <View
                      style={{
                        width: 180,
                        marginLeft: 20,
                      }}>
                      <Text
                        style={{
                          marginTop: 24,
                          fontSize: 18,
                          fontWeight: 700,
                          lineHeight: 24.55,
                          color: '#212B36',
                          fontFamily: 'Nurito-Sans',
                        }}>
                        Upload Prescription
                      </Text>
                    </View>

                    <View
                      style={{
                        color: '#637381',
                        flexDirection: 'row',
                        marginTop: 15,
                        marginLeft: 20,
                      }}>
                      <Icon
                        name="search"
                        size={24}
                        color="#212B36"
                        marginTop={11.47}
                      />
                      <Icon
                        name="shopping-cart"
                        size={24}
                        color="#212B36"
                        marginLeft={21.47}
                        marginTop={11.47}
                      />
                    </View>
                  </View>
                </ScrollView>
              );
            },
          }}
        />

        <Stack.Screen
          name="Add_Prescription"
          component={Add_Prescription}
          options={{
            header: ({navigation, route, options, back}) => {
              const title = getHeaderTitle(options, route.name);
              const [isSticky, setIsSticky] = useState(false);

              const handleScroll = event => {
                const scrollTop = event.nativeEvent.contentOffset.y;

                setIsSticky(scrollTop > 0);
              };

              return (
                <ScrollView onScroll={handleScroll}>
                  <View
                    style={{
                      width: '150  %',
                      height: 100,
                      backgroundColor: 'white',
                      marginTop: -15,
                      borderColor: 'black',
                      borderWidth: 0,
                      flexDirection: 'row',
                      padding: 24,
                      marginLeft: -15,
                    }}>
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        marginTop: 24,
                        borderRadius: 30,
                        // marginLeft: 15,
                      }}
                    />

                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Upload_Prescription')
                      }>
                      <Icon
                        name="arrow-back"
                        size={24}
                        color="#212B36"
                        marginTop={24}
                        marginLeft={-30}
                      />
                    </TouchableOpacity>

                    <View />

                    <View
                      style={{
                        width: 180,
                        marginLeft: 20,
                      }}>
                      <Text
                        style={{
                          marginTop: 24,
                          fontSize: 18,
                          fontWeight: 700,
                          lineHeight: 24.55,
                          color: '#212B36',
                          fontFamily: 'Nurito-Sans',
                        }}>
                        Upload Prescription
                      </Text>
                    </View>

                    <View
                      style={{
                        color: '#637381',
                        flexDirection: 'row',
                        marginTop: 15,
                        marginLeft: 20,
                      }}>
                      <Icon
                        name="search"
                        size={24}
                        color="#212B36"
                        marginTop={11.47}
                      />
                      <Icon
                        name="shopping-cart"
                        size={24}
                        color="#212B36"
                        marginLeft={21.47}
                        marginTop={11.47}
                      />
                    </View>
                  </View>
                </ScrollView>
              );
            },
          }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            header: ({navigation, route, options, back}) => {
              return (
                <ScrollView>
                  <View
                    style={{
                      width: '100%',
                      height: 100,
                      backgroundColor: 'white',
                      // marginTop: -15,
                      borderColor: 'black',
                      // borderWidth: 1,
                      flexDirection: 'row',
                      paddingHorizontal: 24,
                      paddingTop: 48,
                      paddingBottom: 12,

                      // marginLeft: -15,
                    }}>
                    <View
                      style={{
                        height: '100%',
                        width: '100%',
                        // borderWidth: 1,
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Add_Prescription')}>
                      <View
                        style={{
                          height: 32,
                          width: 32,
                          // borderWidth: 1,
                          marginRight: 12,
                          justifyContent:'center'
                        }}>
                        <Icon name="arrow-back" color="#212B36" size={32} />
                      </View>
                      </TouchableOpacity>
                      <View>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: 800,
                            color: '#212B36',
                            fontFamily: 'Nunito Sans',
                          }}>
                          Cart
                        </Text>
                      </View>

                      <View
                        style={{
                          height: '100%',
                          width: '78.5%',
                          // borderWidth: 1,
                          borderColor: 'red',
                          flexDirection:'row-reverse'
                        }}>
                          <TouchableOpacity>
                           <View
                        style={{
                          height: 40,
                          width: 40,
                          // borderWidth: 1,
                          // marginRight: 12,
                          justifyContent:'center'
                        }}>
                        <Icon name="more-vert" color="black" size={32} />
                      </View>
                      </TouchableOpacity>

                        </View>
                    </View>
                  </View>
                </ScrollView>
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
