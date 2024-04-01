import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Hoo, Group, Account, Pro} from 'svg';
import {ImagesAssets} from '../../assets/images/ImageAssets';
// import {Presc} from 'svg';
// import {Account} from 'svg';
import axios from 'axios';
// import Hoo from 'assets\svgImages\hoo.svg'
// import SvgUri from 'react-native-svg';
const {width} = Dimensions.get('window');
export const Home = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, SetData] = useState([1, 1, 1, 1, 1]);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = event => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };

  const loadeddata = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderi',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      albumId: 1,
      id: 3,
      title: 'officia',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      albumId: 1,
      id: 4,
      title: 'culpa',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
    {
      albumId: 1,
      id: 5,
      title: 'natus ',
      url: 'https://via.placeholder.com/600/f66b97',
      thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    },
    {
      albumId: 1,
      id: 6,
      title: 'accusamus',
      url: 'https://via.placeholder.com/600/56a8c2',
      thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
    },
    {
      albumId: 1,
      id: 7,
      title: 'officia ',
      url: 'https://via.placeholder.com/600/b0f7cc',
      thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
    },
    {
      albumId: 1,
      id: 8,
      title: 'aut',
      url: 'https://via.placeholder.com/600/54176f',
      thumbnailUrl: 'https://via.placeholder.com/150/54176f',
    },
    {
      albumId: 1,
      id: 9,
      title: 'qui ',
      url: 'https://via.placeholder.com/600/51aa97',
      thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
    },
    {
      albumId: 1,
      id: 10,
      title: 'beatae',
      url: 'https://via.placeholder.com/600/810b14',
      thumbnailUrl: 'https://via.placeholder.com/150/810b14',
    },
    {
      albumId: 1,
      id: 11,
      title: 'nihil',
      url: 'https://via.placeholder.com/600/1ee8a4',
      thumbnailUrl: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      albumId: 1,
      id: 12,
      title: 'molli',
      url: 'https://via.placeholder.com/600/66b7d2',
      thumbnailUrl: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      albumId: 1,
      id: 13,
      title: 'repudian',
      url: 'https://via.placeholder.com/600/197d29',
      thumbnailUrl: 'https://via.placeholder.com/150/197d29',
    },
    {
      albumId: 1,
      id: 14,
      title: 'es',
      url: 'https://via.placeholder.com/600/61a65',
      thumbnailUrl: 'https://via.placeholder.com/150/61a65',
    },
    {
      albumId: 1,
      id: 15,
      title: 'harum ',
      url: 'https://via.placeholder.com/600/f9cee5',
      thumbnailUrl: 'https://via.placeholder.com/150/f9cee5',
    },
  ];

  const loadeddata1 = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderi',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      albumId: 1,
      id: 3,
      title: 'officia',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      albumId: 1,
      id: 4,
      title: 'culpa',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
    {
      albumId: 1,
      id: 5,
      title: 'natus ',
      url: 'https://via.placeholder.com/600/f66b97',
      thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    },
    {
      albumId: 1,
      id: 6,
      title: 'accusamus',
      url: 'https://via.placeholder.com/600/56a8c2',
      thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
    },
    {
      albumId: 1,
      id: 7,
      title: 'officia ',
      url: 'https://via.placeholder.com/600/b0f7cc',
      thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
    },
    {
      albumId: 1,
      id: 8,
      title: 'aut',
      url: 'https://via.placeholder.com/600/54176f',
      thumbnailUrl: 'https://via.placeholder.com/150/54176f',
    },
    {
      albumId: 1,
      id: 9,
      title: 'qui ',
      url: 'https://via.placeholder.com/600/51aa97',
      thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
    },
    {
      albumId: 1,
      id: 10,
      title: 'beatae',
      url: 'https://via.placeholder.com/600/810b14',
      thumbnailUrl: 'https://via.placeholder.com/150/810b14',
    },
  ];

  const loadeddata2 = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderi',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      albumId: 1,
      id: 3,
      title: 'officia',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      albumId: 1,
      id: 4,
      title: 'culpa',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
    {
      albumId: 1,
      id: 5,
      title: 'natus ',
      url: 'https://via.placeholder.com/600/f66b97',
      thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    },
    {
      albumId: 1,
      id: 6,
      title: 'accusamus',
      url: 'https://via.placeholder.com/600/56a8c2',
      thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
    },
  ];

  const loadeddata3 = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderi',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      albumId: 1,
      id: 3,
      title: 'officia',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      albumId: 1,
      id: 4,
      title: 'culpa',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
    {
      albumId: 1,
      id: 5,
      title: 'natus ',
      url: 'https://via.placeholder.com/600/f66b97',
      thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    },
    {
      albumId: 1,
      id: 6,
      title: 'accusamus',
      url: 'https://via.placeholder.com/600/56a8c2',
      thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
    },
    {
      albumId: 1,
      id: 7,
      title: 'officia ',
      url: 'https://via.placeholder.com/600/b0f7cc',
      thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
    },
    {
      albumId: 1,
      id: 8,
      title: 'aut',
      url: 'https://via.placeholder.com/600/54176f',
      thumbnailUrl: 'https://via.placeholder.com/150/54176f',
    },
    {
      albumId: 1,
      id: 9,
      title: 'qui ',
      url: 'https://via.placeholder.com/600/51aa97',
      thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
    },
  ];

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.carousel}>
            <View
              style={{
                height: 220,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                paddingRight: 10,
                paddingLeft: 10,
                paddingBottom: 8,
                marginTop: 8,

                // marginLeft:24
              }}>
              <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={e => {
                  const x = e.nativeEvent.contentOffset.x;
                  setCurrentIndex((x / width).toFixed(1));
                }}
                horizontal
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        width: 342,
                        height: 191,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 4,
                        paddingRight: 70,
                        paddingLeft: 40,
                      }}>
                      <TouchableOpacity
                        disabled={true}
                        style={{
                          width: 342,
                          height: 191,
                          backgroundColor: '#D9D9D9',
                          borderRadius: 10,
                          marginLeft: 24,
                        }}></TouchableOpacity>
                    </View>
                  );
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                {data.map((item, index) => {
                  return (
                    <View
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 4,
                        backgroundColor:
                          currentIndex == index ? 'blue' : 'gray',
                        marginLeft: 4,
                      }}></View>
                  );
                })}
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 132,
              backgroundColor: 'white',
              marginTop: 8,
              paddingTop: 12,
              paddingLeft: 24,
              paddingBottom: 14,
              marginBottom: 8,
              paddingRight: 24,
            }}>
            <View
              style={{
                width: '100%',
                height: 106,
                backgroundColor: '#E1E5FC',
                borderRadius: 8,
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    marginTop: 14,
                    marginLeft: 12,
                    fontSize: 18,
                    fontWeight: 700,
                    lineHeight: 24.55,
                    color: 'black',
                  }}>
                  Order with Prescription
                </Text>

                <Text
                  style={{
                    marginTop: 4,
                    marginLeft: 12,
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 19.1,
                    color: 'black',
                  }}>
                  Upload Prescription, order instantly from them.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    // borderWidth: 1,
                    // margin: 1,
                    height: 44,
                    paddingBottom: 10,
                  }}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Upload_Prescription')
                      }>
                      <Text
                        style={{
                          marginTop: 12,
                          marginLeft: 12,
                          fontSize: 14,
                          fontWeight: 400,
                          lineHeight: 19.1,
                          color: '#2441C2',
                          textDecorationLine: 'underline',
                        }}>
                        Upload now
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      borderWidth: 0,
                      flexDirection: 'row-reverse',
                      width: 240,
                      marginBottom: 0,
                      marginLeft: -10,
                      marginTop: 1,
                    }}>
                    <Image
                      source={ImagesAssets.v1}
                      style={{
                        // marginLeft: 200,
                        marginTop: 6.5,
                        height: 35,
                        width: 41.15,
                        marginBottom: 10,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 160,
              width: '100%',
              backgroundColor: 'white',
              flexDirection: 'column',
              // marginTop: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                borderWidth: 0,
                paddingLeft: 20,
                paddingRight: 28,
              }}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <Text style={styles.txt2}>Deals of the day</Text>
              </View>
              <TouchableOpacity onPress={() =>console.log('L')}>
                <View style={{flexDirection: 'row-reverse'}}>
                  <Text style={styles.other}>View All</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.mainview}>
              <View style={styles.flatlist}>
                <FlatList
                  data={loadeddata}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x;
                    setCurrentIndex((x / width).toFixed(0));
                  }}
                  horizontal
                  renderItem={({item}) => (
                    <View style={{flex: 1, flexDirection: 'row', height: 200}}>
                      <TouchableOpacity
                        style={styles.tchbleopac}
                        onPress={() =>console.log('L')
                        }>
                        <Image
                          source={{uri: item.thumbnailUrl}}
                          style={{
                            borderRadius: 10,
                            height: 120,
                            width: 120,
                            marginHorizontal: 8,
                          }}></Image>

                        {/* <View style={{ flexDirection: "row" }}> */}
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            lineHeight: 16.37,
                            color: '#212B36',
                            width: '100%',
                            marginLeft: 8,
                          }}>
                          {item.title}
                        </Text>
                        {/* </View> */}
                        <View
                          style={{
                            flexDirection: 'row',
                            width: 120,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginLeft: 8,
                            }}>
                            <View>
                              <Text
                                style={{
                                  fontSize: 12,
                                  fontWeight: 400,
                                  lineHeight: 16.37,
                                  color: '#637381',
                                  width: '100%',
                                }}>
                                {item.id}
                              </Text>
                            </View>
                            <View>
                              <Icon
                                name="star"
                                size={16}
                                color="#FFC107"
                                marginLeft={-0}
                              />
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row-reverse',
                              width: '100%',
                              marginRight: -32,
                            }}>
                            <View>
                              <Text style={styles.price}>₹{item.albumId}</Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              // height: 338,
              backgroundColor: '#FFFFFF',
              marginTop: 68,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                borderWidth: 0,
                paddingLeft: 20,
                paddingRight: 28,
                // justifyContent:'center',
                // alignContent:'center',
                // alignItems:'center'
              }}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <Text style={styles.txt2}>Explore Categories</Text>
              </View>
              <TouchableOpacity onPress={() => console.log('L')}>
                <View style={{flexDirection: 'row-reverse'}}>
                  <Text style={styles.other}>View All</Text>
                </View>
              </TouchableOpacity>
            </View>

            <FlatList
              data={loadeddata2}
              numColumns={3}
              renderItem={({item}) => (
                <View style={{paddingLeft: 10}}>
                  <View style={{alignContent: 'space-between', margin: 8}}>
                    <Image
                      source={{uri: item.thumbnailUrl}}
                      style={{
                        borderRadius: 12,
                        height: 100,
                        width: 100,
                      }}></Image>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.categry}> {item.title}</Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 152,
              backgroundColor: 'white',
              marginTop: 8,
            }}>
            <ImageBackground
              source={ImagesAssets.R}
              resizeMode="cover"
              style={{height: 152, width: 416}}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    marginLeft: 50,
                    marginTop: 81,
                    fontSize: 17,
                    fontWeight: 700,
                    lineHeight: 23.19,
                    color: '#FFFFFF',
                  }}>
                  Take Health Advices from our experts
                </Text>
                <View style={{width: 294.33, justifyContent: 'center'}}>
                  <Text
                    style={{
                      marginLeft: 160,
                      fontSize: 17,
                      fontWeight: 700,
                      lineHeight: 23.19,
                      color: '#FFFFFF',
                    }}>
                    Explore Now
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              height: 160,
              width: '100%',
              backgroundColor: 'white',
              flexDirection: 'column',
              marginTop: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                borderWidth: 0,
                paddingLeft: 20,
                paddingRight: 28,
              }}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <Text style={styles.txt2}>Daily Essentials</Text>
              </View>
              <TouchableOpacity onPress={() => console.log('L')}>
                <View style={{flexDirection: 'row-reverse'}}>
                  <Text style={styles.other}>View All</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.mainview}>
              <View style={styles.flatlist}>
                <FlatList
                  data={loadeddata1}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x;
                    setCurrentIndex((x / width).toFixed(0));
                  }}
                  horizontal
                  renderItem={({item}) => (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.tchbleopac}
                        onPress={() =>console.log('L')
                        }>
                        <Image
                          source={{uri: item.thumbnailUrl}}
                          style={{
                            borderRadius: 10,
                            height: 120,
                            width: 120,
                            marginHorizontal: 8,
                          }}></Image>

                        {/* <View style={{ flexDirection: "row" }}> */}
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            lineHeight: 16.37,
                            color: '#212B36',
                            width: '100%',
                            marginLeft: 8,
                          }}>
                          {item.title}
                        </Text>
                        {/* </View> */}
                        <View
                          style={{
                            flexDirection: 'row',
                            width: 120,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginLeft: 8,
                            }}>
                            <View>
                              <Text
                                style={{
                                  fontSize: 12,
                                  fontWeight: 400,
                                  lineHeight: 16.37,
                                  color: '#637381',
                                  width: '100%',
                                }}>
                                4.1
                              </Text>
                            </View>
                            <View>
                              <Icon
                                name="star"
                                size={16}
                                color="#FFC107"
                                marginLeft={-0}
                              />
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row-reverse',
                              width: '100%',
                              marginRight: -32,
                            }}>
                            <View>
                              <Text style={styles.price}>₹166.00</Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    // width: width,
                    justifyContent: 'center',
                    // alignItems: 'center',
                  }}></View>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 160,
              width: '100%',
              backgroundColor: 'white',
              flexDirection: 'column',
              marginTop: 67,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                borderWidth: 0,
                paddingLeft: 20,
                paddingRight: 28,
              }}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <Text style={styles.txt2}>Covid Essentials</Text>
              </View>
              <TouchableOpacity onPress={() => console.log('L')}>
                <View style={{flexDirection: 'row-reverse'}}>
                  <Text style={styles.other}>View All</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.mainview}>
              <View style={styles.flatlist}>
                <FlatList
                  data={loadeddata3}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x;
                    setCurrentIndex((x / width).toFixed(0));
                  }}
                  horizontal
                  renderItem={({item}) => (
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.tchbleopac}
                        onPress={() =>console.log('L')
                        }>
                        <Image
                          source={{uri: item.thumbnailUrl}}
                          style={{
                            borderRadius: 10,
                            height: 120,
                            width: 120,
                            marginHorizontal: 8,
                          }}></Image>

                        {/* <View style={{ flexDirection: "row" }}> */}
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            lineHeight: 16.37,
                            color: '#212B36',
                            width: '100%',
                            marginLeft: 8,
                          }}>
                          {item.title}
                        </Text>
                        {/* </View> */}
                        <View
                          style={{
                            flexDirection: 'row',
                            width: 120,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginLeft: 8,
                            }}>
                            <View>
                              <Text
                                style={{
                                  fontSize: 12,
                                  fontWeight: 400,
                                  lineHeight: 16.37,
                                  color: '#637381',
                                  width: '100%',
                                }}>
                                4.1
                              </Text>
                            </View>
                            <View>
                              <Icon
                                name="star"
                                size={16}
                                color="#FFC107"
                                marginLeft={-0}
                              />
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row-reverse',
                              width: '100%',
                              marginRight: -32,
                            }}>
                            <View>
                              <Text style={styles.price}>₹166.00</Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    // width: width,
                    justifyContent: 'center',
                    // alignItems: 'center',
                  }}></View>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              height: 152,
              backgroundColor: 'white',
              marginTop: 65,
            }}>
            <ImageBackground
              source={ImagesAssets.R2}
              resizeMode="cover"
              style={{height: 152, width: 416}}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    marginLeft: 25,
                    marginTop: 81,
                    fontSize: 17,
                    fontWeight: 700,
                    lineHeight: 23.19,
                    color: '#FFFFFF',
                  }}>
                  100% Assured Medicines At Your Door-step
                </Text>
                <View style={{width: 294.33, justifyContent: 'center'}}>
                  <Text
                    style={{
                      marginLeft: 160,
                      fontSize: 17,
                      fontWeight: 700,
                      lineHeight: 23.19,
                      color: '#FFFFFF',
                    }}>
                    Order Now
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          
          

          <StatusBar style="auto" />
        </ScrollView>
      </View>
      <View style={{width: '100%', height: 65, borderWidth: 0, width:'100%', backgroundColor: 'red'}}><View
            style={{
              height: 65,
              width: '100%',
              backgroundColor: 'white',
              // marginTop: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal:24
              // alignContent: 'stretchbleopac'
              // paddingRight: 20
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Hoo size={27} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 400,
                    lineHeight: 13.64,
                    color: '#2441C2',

                  }}>
                  Home
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop:-4
              }}>
              <View>
                <Icon name="search" size={25} />
              </View>
              <View >
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 400,
                    lineHeight: 13.64,
                    color: '#637381',
                  }}>
                  Search
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop:-4
              }}>
              <View>
                <Group size={27} color={'white'}/>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 400,
                    lineHeight: 13.64,
                    color: '#637381',
                  }}>
                  Prescription
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop:-3
              }}>
              <View>
                <Pro size={34}/>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10, 
                    fontWeight: 400,
                    lineHeight: 13.64,
                    color: '#637381',
                  }}>
                  Account
                </Text>
              </View>
            </View>
          </View>
          </View>
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
  },
  footer: {
    flex: 1
  },

  content:{
    flex: 1
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginTop: 24,
    borderRadius: 30,
  },
  header: {
    width: '100%',
    height: 124,
    backgroundColor: 'white',
    marginTop: -15,
    borderColor: 'black',
    borderWidth: 0,
    flexDirection: 'row',
    padding: 24,
  },
  carousel: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 16.37,
    color: '#637381',
  },
  categry: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 16.37,
    color: '#212B36',
    fontFamily: 'Nurito-Sans',
  },

  img: {height: 100, width: 100, borderRadius: 12},
  txt: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 16.37,
    color: '#212B36',
    width: 120,
    marginLeft: 0,
  },

  txt2: {
    marginTop: 15.5,
    // marginLeft: 20,
    fontSize: 17,
    fontWeight: 700,
    lineHeight: 23.19,
    color: '#212B36',
    width: '100%',
    // borderWidth: 1
  },
  other: {
    marginTop: 16,
    // marginLeft: 156,
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 22,
    color: '#2441C2',
    textDecorationLine: 'underline',
  },

  flatlist: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: -0,
    color: '#D9D9D9',
    marginLeft: 24,
    // borderWidth: 1,
    height: 155,
    backgroundColor: 'white',
    flexDirection: 'column',
    // marginTop: -30
  },
  tchbleopac: {
    // marginTop: -20,
    width: 120,
    height: 120,
    // backgroundColor: '#D9D9D9',
    borderRadius: 12,
    marginLeft: 0,
    flexDirection: 'column',
    marginHorizontal: 16,
  },

  mainview: {
    height: 180,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  price: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16.37,
    color: '#161C24',
  },
});
