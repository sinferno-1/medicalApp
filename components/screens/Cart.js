import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FileUp} from 'svg';
import {WrapText} from '@mui/icons-material';
const {width} = Dimensions.get('window');
import {PS} from 'svg';
import {Dropdown} from 'react-native-element-dropdown';
import {ImagesAssets} from '../../assets/images/ImageAssets';
import RadioGroup from 'react-native-radio-buttons-group';
import {RadioButton} from 'react-native-paper';
import Collapsible from 'react-native-collapsible';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
];

const Item = ({label}) => (
  <View>
    <Text>{label}</Text>
  </View>
);

export const Cart = ({navigation}) => {
  const [text, onChangeText] = React.useState('LL');
  const [date, onChangeDate] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [collapsed, setCollapsed] = React.useState(true);

  const loadeddata = [
    {
      albumId: 1,
      id: 1,
      title: '10',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'sentiment-satisfied',
    },
    {
      albumId: 1,
      id: 2,
      title: '25',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'mood',
    },
    {
      albumId: 1,
      id: 3,
      title: '50',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'sentiment-very-satisfied',
    },
    {
      albumId: 1,
      id: 4,
      title: 'Others',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'handyman',
    },
  ];

  const toggleExpand = () => {
    setCollapsed(!collapsed);
  };
  const [checked, setChecked] = React.useState('first');

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  const [isFocus3, setIsFocus3] = useState(false);
  const [isFocus4, setIsFocus4] = useState(false);

  state = {
    data: [
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
        title: 'officia rrr',
        url: 'https://via.placeholder.com/600/24f355',
        thumbnailUrl: 'https://via.placeholder.com/150/24f355',
      },
    ],
  };
  onDelete = id => {
    const {data} = this.state;
    let filterArray = data.filter((val, i) => {
      if (val.id !== id) {
        return val;
      }
    });

    this.setState({data: filterArray});
    // console.log("Filter Array", filterArray)
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Select Member
        </Text>
      );
    }
    return null;
  };

  const renderLabel1 = () => {
    if (value || isFocus1) {
      return (
        <Text style={[styles.label, isFocus1 && {color: 'blue'}]}>
          Add Notes
        </Text>
      );
    }
    return null;
  };

  const renderLabel2 = () => {
    if (value || isFocus2) {
      return (
        <Text style={[styles.label, isFocus2 && {color: 'blue'}]}>Name</Text>
      );
    }
    return null;
  };

  const renderLabel3 = () => {
    if (value || isFocus3) {
      return (
        <Text style={[styles.label, isFocus3 && {color: 'blue'}]}>
          Select Date
        </Text>
      );
    }
    return null;
  };

  const renderLabel4 = () => {
    if (value || isFocus4) {
      return (
        <Text style={[styles.label, isFocus4 && {color: 'blue'}]}>
          Select Gender
        </Text>
      );
    }
    return null;
  };

  const [selected, setSelected] = React.useState('');
  const {data} = this.state;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F4F6F8',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        // borderWidth: 1,
      }}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ScrollView>
          <View
            style={{
              height: 47,
              width: '100%',
              backgroundColor: 'white',
              marginVertical: 8,
              paddingVertical: 10,
              paddingHorizontal: 24,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Nunito Sans',
                fontWeight: 700,
                color: '#212B36',
              }}>
              4 Items added
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 96,
              backgroundColor: 'white',
              paddingVertical: 12,
              // borderWidth: 1,
            }}>
            <View style={{width: '100%', height: 241, borderWidth: 0}}>
              <View
                style={{
                  width: '100%',
                  height: 32,
                  borderWidth: 0,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingHorizontal: 24,
                  // borderWidth: 1
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Nunito Sans',
                    // fontWeight: 700,
                    color: '#637381',
                  }}>
                  items requiring prescription
                </Text>
                <View style={{margin: 4}}>
                  <PS />
                </View>
              </View>

              <View
                style={{
                  width: '100%',
                  height: 44,
                  borderWidth: 0,
                  paddingLeft: 20,
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingRight: 8,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontFamily: 'Nunito Sans',
                      fontWeight: 700,
                      color: '#212B36',
                    }}>
                    Uploaded Prescription (3)
                  </Text>
                </View>
                <View
                  style={{
                    height: '100%',
                    width: '48%',
                    borderWidth: 0,
                    flexDirection: 'row-reverse',
                    borderRightColor: 'red',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={toggleExpand}>
                    <View
                      style={{
                        width: 36,
                        height: 36,
                        borderWidth: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                      }}>
                      <Icon
                        name="keyboard-arrow-up"
                        size={22}
                        color="#212B36"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <Collapsible collapsed={collapsed} flexDirection="column">
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 140,
                // marginTop: 8,
              }}>
              <View style={styles.mainview}>
                <View style={styles.flatlist}>
                  <FlatList
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={e => {
                      const x = e.nativeEvent.contentOffset.x;
                      setCurrentIndex((x / width).toFixed(0));
                    }}
                    horizontal
                    renderItem={({item}) => (
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          height: 200,
                        }}>
                        <TouchableOpacity
                          style={styles.tchbleopac}
                          onPress={() => console.log('L')}>
                          <Image
                            source={{uri: item.thumbnailUrl}}
                            style={{
                              borderRadius: 10,
                              height: 116,
                              width: 96,
                            }}></Image>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: 400,
                              lineHeight: 16.37,
                              color: '#212B36',
                              width: '100%',
                              marginLeft: 0,
                            }}>
                            {item.title}
                          </Text>
                        </TouchableOpacity>
                        <View>
                          <TouchableOpacity>
                            <View
                              style={{
                                marginLeft: -30,
                                backgroundColor: 'black',
                                height: 20,
                                width: 20,
                                borderRadius: 20,
                                alignItems: 'center',
                              }}>
                              <View>
                                <Icon name="delete" color="white" size={18} />
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
          </Collapsible>

          <View
            style={{
              width: '100%',
              height: 120,
              backgroundColor: 'white',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 24,
              // borderWidth:1
            }}>
            <TouchableOpacity onPress={() => console.log('H')}>
              <View style={styles.upload}>
                <View style={{height: 18, width: 20}}>
                  <Icon name="camera-alt" size={20} color="#2441C2" />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: 6,
                    // borderWidth:1
                  }}>
                  <View>
                    <Text style={styles.txt}> Upload</Text>

                    <Text style={styles.txt}>Prescription</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('H')}>
              <View style={styles.upload}>
                <View style={{height: 18, width: 20}}>
                  <FileUp height={18} />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: 6,
                  }}>
                  <Text style={styles.txt}>Select from</Text>
                  <Text style={styles.txt}>uploaded</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('H')}>
              <View style={styles.upload}>
                <View style={{height: 18, width: 20}}>
                  <Icon name="local-shipping" size={20} color="#2441C2" />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: 6,
                  }}>
                  <Text style={styles.txt}>Show at</Text>
                  <Text style={styles.txt}>Delivery</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              height: 95,
              paddingHorizontal: 24,
              paddingTop: 12,
              flexDirection: 'row',
              backgroundColor: 'white',
            }}>
            <View>
              <Image
                style={{
                  width: 79,
                  height: 83,
                  borderRadius: 7,
                }}
                source={ImagesAssets.Chw}
              />
            </View>

            <View
              style={{
                marginLeft: 8,
                flexDirection: 'column',
                height: '100%',
                width: 153,
                paddingVertical: 8,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 19.1,
                    color: '#212B36',
                  }}>
                  Pento PP
                </Text>
              </View>
              <View style={{marginVertical: 4}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 19.1,
                    color: '#637381',
                  }}>
                  Strip of 30 tablets
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 19.1,
                    color: '#161C24',
                  }}>
                  ₹281.00
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              height: 120,
              backgroundColor: 'white',
              paddingHorizontal: 24,
              paddingVertical: 10,
            }}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#EDF7FF',
                borderRadius: 8,
                padding: 8,
                flexDirection: 'column',
              }}>
              <View
                style={{
                  height: 40,
                  width: '100%',
                  flexDirection: 'row',
                  borderWidth: 0,
                }}>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderWidth: 0,
                    borderRadius: 12,
                    backgroundColor: '#CBE6FF',
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                  }}>
                  <View>
                    <Icon name="info" size={24} color="#1890FF"></Icon>
                  </View>
                </View>

                <View
                  style={{
                    width: '85%',
                    height: 37,
                    borderWidth: 0,
                    marginLeft: 8,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      lineHeight: 19.1,
                      color: '#212B36',
                    }}>
                    This item was not available , we have added different
                    varient .{' '}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: 34,
                  marginTop: 8,
                  alignContent: 'space-between',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: '100%',
                      flex: 1,
                      width: 159,
                      borderRadius: 8,
                      borderColor: '#919EAB',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          lineHeight: 22,
                          color: '#212B36',
                          fontFamily: 'Public-Sans',
                        }}>
                        Discard
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      height: '100%',
                      flex: 1,
                      width: 159,
                      borderRadius: 8,
                      borderColor: '#919EAB',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 8,
                      backgroundColor: '#2441C2',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          lineHeight: 22,
                          color: 'white',
                          fontFamily: 'Public-Sans',
                        }}>
                        Keep
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              height: 120,
              paddingHorizontal: 24,
              paddingTop: 12,
              flexDirection: 'row',
              backgroundColor: 'white',
            }}>
            <View>
              <Image
                style={{
                  width: 79,
                  height: 83,
                  // marginTop: 24,
                  borderRadius: 7,
                }}
                source={ImagesAssets.Chw}
              />
            </View>

            <View
              style={{
                marginLeft: 8,
                flexDirection: 'column',
                height: '100%',
                width: 153,
                paddingVertical: 8,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 19.1,
                    color: '#212B36',
                  }}>
                  Pento PP
                </Text>
              </View>
              <View style={{marginVertical: 4}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 19.1,
                    color: '#637381',
                  }}>
                  Strip of 30 tablets
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 19.1,
                    color: '#161C24',
                  }}>
                  ₹281.00
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              height: 95,
              paddingHorizontal: 24,
              paddingTop: 12,
              flexDirection: 'row',
              // marginTop: 12,
              backgroundColor: 'white',
            }}>
            <View>
              <Image
                style={{
                  width: 79,
                  height: 83,
                  // marginTop: 24,
                  borderRadius: 7,
                }}
                source={ImagesAssets.Chw}
              />
            </View>

            <View
              style={{
                marginLeft: 8,
                flexDirection: 'column',
                height: '100%',
                width: 153,
                paddingVertical: 8,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 19.1,
                    color: '#212B36',
                  }}>
                  Pento PP
                </Text>
              </View>
              <View style={{marginVertical: 4}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 19.1,
                    color: '#637381',
                  }}>
                  Strip of 30 tablets
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 19.1,
                    color: '#161C24',
                  }}>
                  ₹281.00
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              height: 120,
              backgroundColor: 'white',
              paddingHorizontal: 24,
              paddingVertical: 10,
            }}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#FEF0F0',
                borderRadius: 8,
                padding: 8,
                flexDirection: 'column',
              }}>
              <View
                style={{
                  height: 40,
                  width: '100%',
                  flexDirection: 'row',
                  borderWidth: 0,
                }}>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderWidth: 0,
                    borderRadius: 12,
                    backgroundColor: '#FFD6D4',
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                  }}>
                  <View>
                    <Icon name="error" size={24} color="#FF4842"></Icon>
                  </View>
                </View>

                <View
                  style={{
                    width: '85%',
                    height: 37,
                    borderWidth: 0,
                    marginLeft: 8,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      lineHeight: 19.1,
                      color: '#212B36',
                    }}>
                    This item was not available , we will notify you when it’s
                    available
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  height: 34,
                  marginTop: 8,
                  alignContent: 'space-between',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: '100%',
                      flex: 1,
                      width: 159,
                      borderRadius: 8,
                      borderColor: '#919EAB',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          lineHeight: 22,
                          color: '#212B36',
                          fontFamily: 'Public-Sans',
                        }}>
                        Discard
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      height: '100%',
                      flex: 1,
                      width: 159,
                      borderRadius: 8,
                      borderColor: '#919EAB',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 8,
                      backgroundColor: '#2441C2',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          lineHeight: 22,
                          color: 'white',
                          fontFamily: 'Public-Sans',
                        }}>
                        Keep
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 22,
              paddingHorizontal: 24,
              marginTop: 8,
              backgroundColor: 'white',
            }}>
            <Text style={{fontSize: 14}}>
              Items that doesn’t require any prescription
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              height: 95,
              paddingHorizontal: 24,
              paddingTop: 12,
              flexDirection: 'row',
              backgroundColor: 'white',
              // marginTop:12
            }}>
            <View>
              <Image
                style={{
                  width: 79,
                  height: 83,
                  // marginTop: 24,
                  borderRadius: 7,
                }}
                source={ImagesAssets.Chw}
              />
            </View>

            <View
              style={{
                marginLeft: 8,
                flexDirection: 'column',
                height: '100%',
                width: 153,
                paddingVertical: 8,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 19.1,
                    color: '#212B36',
                  }}>
                  Pento PP
                </Text>
              </View>
              <View style={{marginVertical: 4}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 19.1,
                    color: '#637381',
                  }}>
                  Strip of 30 tablets
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 19.1,
                    color: '#161C24',
                  }}>
                  ₹281.00
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              height: 95,
              paddingHorizontal: 24,
              paddingTop: 12,
              flexDirection: 'row',
              // marginTop: 12,
              backgroundColor: 'white',
            }}>
            <View>
              <Image
                style={{
                  width: 79,
                  height: 83,
                  // marginTop: 24,
                  borderRadius: 7,
                }}
                source={ImagesAssets.Chw}
              />
            </View>

            <View
              style={{
                marginLeft: 8,
                flexDirection: 'column',
                height: '100%',
                width: 153,
                paddingVertical: 8,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 19.1,
                    color: '#212B36',
                  }}>
                  Pento PP
                </Text>
              </View>
              <View style={{marginVertical: 4}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 19.1,
                    color: '#637381',
                  }}>
                  Strip of 30 tablets
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 19.1,
                    color: '#161C24',
                  }}>
                  ₹281.009
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 80,
              width: '100%',
              marginTop: 8,
              backgroundColor: 'white',
              borderWidth: 0,
              paddingHorizontal: 24,
              paddingVertical: 16,
            }}>
            <TouchableOpacity>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#2441C2',
                  borderRadius: 8,
                  paddingHorizontal: 22,
                  paddingVertical: 11,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  alignContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      lineHeight: 26,
                      color: 'white',
                    }}>
                    Apply Coupon
                  </Text>
                </View>

                <View style={{height: 22, width: 22}}>
                  <Icon name="keyboard-arrow-right" size={22} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 150,
              width: '100%',
              borderWidth: 1,
              paddingVertical: 16,
              flexDirection: 'column',
              paddingHorizontal: 24,
              backgroundColor: 'white',
              flex: 1,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  // lineHeight: 26,
                  color: '#212B36',
                }}>
                Tip your delivery partner
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 14,
                  // lineHeight: 26,
                  color: '#637381',
                  marginBottom: 10,
                }}>
                Your kindness means a lot !
              </Text>
            </View>
            <View stle={{flex: 1}}>
              <View
                style={{
                  width: '120%',
                  height: 40,
                  borderWidth: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <FlatList
                  data={loadeddata}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  renderItem={({item}) => (
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        height: '100%',
                        paddingRight: 23,
                      }}>
                      <TouchableOpacity onPress={() => console.log('L')}>
                        <View style={styles.tipbutton}>
                          <View>
                            <Icon
                              name={item.thumbnailUrl}
                              size={20}
                              color="#212B36"
                            />
                          </View>
                          <View>
                            <Text
                              style={{
                                color: '#212B36',
                                fontSize: 14,
                                fontWeight: 700,
                                lineHeight: 24,
                                fontFamily: 'Public-Sans',
                              }}>
                              ₹{item.title}
                            </Text>
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
              height: 143,
              width: '100%',
              backgroundColor: 'white',
              marginTop: 8,
              paddingVertical: 16,
              paddingLeft: 24,
            }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemText: {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 20.46,
    color: '#212B36',
    fontFamily: 'Nurito-Sans',
  },
  tipbutton: {
    width: 85,
    height: 36,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DFE3E8',
    borderRadius: 8,
    marginRight: 28,
    paddingHorizontal: 16,
    paddingVertical: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  txt: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 19.1,
    color: '#2441C2',
  },

  input: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    borderColor: '#A7A7A7',
  },

  dropdown: {
    height: '100%',
    borderColor: '#A7A7A7',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '100%',
  },
  cts: {
    // borderWidth: 10,
    borderRadius: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'Nurito-Sans',
    lineHeight: 19.1,
    color: '#212B36',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 10,
    color: '#212B36',
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    // marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // borderWidth: 1
  },
  centered2View: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // borderWidth: 10,
    justifyContent: 'flex-end',
    height: '100%',
    marginBottom: -50,
  },
  modal2View: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    width: '100%',
    height: '75%',
    padding: 24,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // borderWidth:1,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    width: 342,
    height: 313,
    padding: 15,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#212B36',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 26,
    fontFamily: 'Public-Sans',
    textAlign: 'center',
  },
  textStyle1: {
    color: 'white',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 26,
    fontFamily: 'Public-Sans',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 24.55,
    fontFamily: 'Nunito-Sans',
    color: '#212B36',
  },
  flatlist: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: '#D9D9D9',
    height: 135,
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingLeft: 24,
  },
  mainview: {
    height: 140,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  tchbleopac: {
    width: 96,
    height: 116,
    borderRadius: 12,
    marginLeft: 0,
    flexDirection: 'column',
    marginHorizontal: 16,
  },
  price: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16.37,
    color: '#161C24',
  },
  upload: {
    height: 100,
    width: 103,
    backgroundColor: '#EDF0FA',
    borderRadius: 8,
    marginRight: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
