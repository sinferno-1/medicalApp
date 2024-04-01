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
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {WrapText} from '@mui/icons-material';
const {width} = Dimensions.get('window');
import {FileUp} from 'svg';
import {Dropdown} from 'react-native-element-dropdown';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {ImagesAssets} from '../../assets/images/ImageAssets';
// import DateTimePicker from '@react-native-community/datetimepicker';
const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
];
const gender = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Others', value: '3'},
];

const Item = ({label}) => (
  <View>
    <Text>{label}</Text>
  </View>
);

export const Upload_Prescription = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [date, onChangeDate] = React.useState('');
  const [name, onChangeName] = React.useState('');
  // const [number, onChangeNumber] = React.useState('');
  // const [isSelected, setSelection] = useState(false);
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  const [isFocus3, setIsFocus3] = useState(false);
  const [isFocus4, setIsFocus4] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [modal2Visible, setModal2Visible] = useState(false);

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

  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: 140,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingVertical: 20,
          paddingLeft: 25,
        }}>
        <TouchableOpacity onPress={() => console.log('H')}>
          <View style={styles.upload}>
            <View style={{height: 18, width: 20}}>
              <Icon name="camera-alt" size={20} color="#2441C2" />
            </View>
            <View
              style={{
                width: 50,
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 6,
              }}>
              <View>
                <Text style={styles.txt}> From</Text>

                <Text style={styles.txt}>Camera</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('H')}>
          <View style={styles.upload}>
            <View style={{height: 18, width: 20}}>
              <Icon name="photo-library" size={20} color="#2441C2" />
            </View>
            <View
              style={{
                width: 50,
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 6,
              }}>
              <Text style={styles.txt}>From</Text>
              <Text style={styles.txt}>Gallery</Text>
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
              <Text style={styles.txt}>Uploaded</Text>
              <Text style={styles.txt}>Prescription</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 158,
          backgroundColor: 'white',
          paddingHorizontal: 24,
          marginTop: -10,
        }}>
        <View style={{width: '100%', height: 23, marginTop: 32}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 700,
              lineHeight: 23.19,
              color: '#212B36',
            }}>
            Tips
          </Text>

          <View
            style={{
              width: '100%',
              height: 100,
              borderColor: 'green',
              marginTop: 16,
            }}>
            <FlatList
              data={[
                {key: 'Lorem ipsum dolor sit amet, consectetur adipiscing  '},
                {key: 'Lorem ipsum dolor sit amet'},
                {key: 'Lorem ipsum dolor sit amet, consectetur adipiscing'},
                {key: 'Lorem ipsum dolor sit amet, adipiscing'},
              ]}
              renderItem={({item}) => {
                return (
                  <View style={{marginTop: 2}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: 19.1,
                        color: '#637381',
                        justifyContent: 'center',
                      }}>{`\u2022 ${item.key}`}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          height: 80,
          width: '100%',
          paddingHorizontal: 24,
          paddingVertical: 8,
          backgroundColor: 'white',
          // marginTop: -20,
        }}>
        <View style={styles.container}>
          {renderLabel1()}
          <TextInput
            style={[styles.dropdown, isFocus1 && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus1 ? '   Add Notes' : ''}
            // searchPlaceholder="Search..."
            value={text}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChangeText={text => onChangeText(text)}
          />
        </View>
      </View>

      <View
        style={{
          height: 72,
          width: '100%',
          paddingHorizontal: 24,
          // paddingVertical: 8,
          backgroundColor: 'white',
          // marginTop: 8,
        }}>
        <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            containerStyle={styles.cts}
            iconStyle={styles.iconStyle}
            itemTextStyle={styles.itemText}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? '   Select Member' : '  Select Member'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Icon name="person" size={21} color="#919EAB" />
            )}
            renderRightIcon={() => (
              <Icon name="arrow-drop-down" size={20} color="#919EAB" />
            )}
            FooterComponent={() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                }}>
                <Button />
              </View>
            )}
          />
        </View>
      </View>
      <View
        style={{
          height: '100%',
          width: '100%',
          borderWidth: 0,
          borderColor: 'green',
          backgroundColor: 'white',
          padding: 24,
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            borderWidth: 0,
            borderColor: 'red',
            marginTop: 40,
            flexDirection: 'column',
          }}>
          <View
            style={{
              height: 43,
              width: '100%',
              borderColor: 'violet',
              // borderWidth: 1,
              flexDirection: 'row',
              alignContent: 'center',
            }}>
            <BouncyCheckbox
              size={25}
              fillColor="#2441C2"
              unfillColor="#FFFFFF"
              iconStyle={{
                borderColor: '#2441C2',
                borderWidth: 1,
                borderRadius: 0,
              }}
              innerIconStyle={{
                borderRadius: 0,
                borderColor: '#637381',
                borderWidth: 2,
              }}
              onPress={(isChecked: boolean ) => {console.log("JJ")}}
            />

            <View
              style={{
                marginLeft: 1.38,
                width: '100%',
                height: '60%',
                borderWidth: 0,
                marginTop: 6.7,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  lineHeight: 24.46,
                  color: '#212B36',
                  fontFamily: 'Nunito-Sans',
                }}>
                I just want to save the prescription
              </Text>
            </View>
          </View>

          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{marginBottom: 8}}>
                    <Text style={styles.modalText}>Add Members</Text>
                  </View>

                  <View style={styles.container}>
                    {renderLabel2()}
                    <TextInput
                      style={[
                        styles.dropdown,
                        isFocus1 && {borderColor: 'blue'},
                      ]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder={!isFocus2 ? '   Name' : ''}
                      // searchPlaceholder="Search..."
                      value={name}
                      onFocus={() => setIsFocus2(true)}
                      onBlur={() => setIsFocus2(false)}
                      onChangeText={name => onChangeName(name)}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        width: 332,
                        marginVertical: 8,
                      }}>
                      <View style={{paddingVertical: 16, width: 152}}>
                        {renderLabel3()}
                        <TextInput
                          style={[
                            styles.dropdown,
                            isFocus1 && {borderColor: 'blue'},
                          ]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus3 ? '   DD/MM/YYYY' : ''}
                          value={date}
                          onFocus={() => setIsFocus3(true)}
                          onBlur={() => setIsFocus3(false)}
                          onChangeText={date => onChangeDate(date)}
                        />
                        <TouchableOpacity>
                          <Icon
                            name="calendar-today"
                            size={18}
                            marginTop={-35}
                            marginLeft={125}
                            color="#939EAB"
                          />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          paddingVertical: 16,
                          width: 152,
                          marginLeft: 8,
                        }}>
                        {renderLabel4()}
                        <Dropdown
                          style={[
                            styles.dropdown,
                            isFocus1 && {borderColor: 'blue'},
                          ]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          data={gender}
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus4 ? '   Male' : ''}
                          value={text}
                          onFocus={() => setIsFocus4(true)}
                          onBlur={() => setIsFocus4(false)}
                          onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: -10}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <View
                        style={{
                          borderWidth: 1,
                          height: 48,
                          width: 152,
                          borderRadius: 8,
                          paddingVertical: 11,
                          paddingHorizontal: 22,
                          borderColor: '#919EAB',
                        }}>
                        <Text style={styles.textStyle}>Cancel</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <View
                        style={{
                          height: 48,
                          width: 152,
                          borderRadius: 8,
                          paddingVertical: 11,
                          paddingHorizontal: 22,
                          backgroundColor: '#2441C2',
                          marginLeft: 8,
                        }}>
                        <Text style={styles.textStyle1}>Add</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modal2Visible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModal2Visible(!modal2Visible);
            }}>
            <View style={styles.centered2View}>
              <View style={styles.modal2View}>
                <TouchableOpacity
                  onPress={() => setModal2Visible(!modal2Visible)}>
                  <View style={{marginBottom: 8, flexDirection: 'row-reverse'}}>
                    <Icon name="close" size={25.58} color="#212B36" />
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    height: '44%',
                    // borderWidth: 1,
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: '60%',
                      height: '100%',
                    }}
                    source={ImagesAssets.Rect}
                  />
                </View>

                <View
                  style={{
                    width: '100%',
                    height: '20%',
                    // borderWidth: 1,
                    alignItems: 'center',
                    marginTop: 24,
                  }}>
                  <View style={{width: '100%', height: 23}}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: 24.55,
                        color: '#212B36',
                      }}>
                      Take the photo of the prescriptionthis.
                    </Text>

                    <View
                      style={{
                        width: '100%',
                        height: 100,
                        borderColor: 'green',
                        marginTop: 16,
                      }}>
                      <FlatList
                        data={[
                          {
                            key: 'Lorem ipsum dolor sit amet, consectetur adipiscing  ',
                          },
                          {key: 'Lorem ipsum dolor sit amet'},
                        ]}
                        renderItem={({item}) => {
                          return (
                            <View style={{marginTop: 2}}>
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontWeight: 400,
                                  lineHeight: 19.1,
                                  color: '#637381',
                                  justifyContent: 'center',
                                  margin: 2,
                                }}>{`\u2022 ${item.key}`}</Text>
                            </View>
                          );
                        }}
                      />
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    width: '100%',
                    // borderWidth: 1,
                   
                    marginTop: 24,
                    paddingVertical: 24,
                    flexDirection: 'column-reverse',
                    // marginTop:-180
                  }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Add_Prescription')}>
                    <View
                      style={{
                        height: 48,
                        width: '100%',
                        borderColor: 'violet',
                        borderWidth: 0,
                        borderRadius: 8,
                        flexDirection: 'row',
                        alignContent: 'center',
                        backgroundColor: '#2441C2',
                        paddingHorizontal: 139.5,
                        paddingVertical: 11,
                      }}>
                        <View style={{width: '100%'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    lineHeight: 26,
                    fontFamily: 'Nunito-Sans',
                    color: 'white',
                  }}>
                  Continue
                </Text>
              </View>
                      
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View
              style={{
                height: 48,
                width: '100%',
                borderColor: 'violet',
                borderWidth: 0,
                borderRadius: 8,
                flexDirection: 'row',
                alignContent: 'center',
                marginTop: 16,
                backgroundColor: '#2441C2',
                paddingHorizontal: 139.5,
                paddingVertical: 11,
              }}>
              <View style={{marginHorizontal: 9, marginLeft: 0}}>
                <Icon name="person-add-alt-1" color="white" size={22} />
              </View>

              <View style={{width: '100%'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    lineHeight: 26,
                    fontFamily: 'Nunito-Sans',
                    color: 'white',
                  }}>
                  Add Member
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModal2Visible(true)}>
            <View
              style={{
                height: 48,
                width: '100%',
                borderColor: 'violet',
                borderWidth: 0,
                borderRadius: 8,
                flexDirection: 'row',
                alignContent: 'center',
                marginTop: 16,
                backgroundColor: '#2441C2',
                paddingHorizontal: 139.5,
                paddingVertical: 11,
              }}>
              <View style={{width: '100%'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    lineHeight: 26,
                    fontFamily: 'Nunito-Sans',
                    color: 'white',
                  }}>
                  Continue
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  itemText: {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 20.46,
    color: '#212B36',
    fontFamily: 'Nurito-Sans',
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
    height: 50,
    borderColor: '#A7A7A7',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
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
    top: 8,
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
  container: {
    // backgroundColor: 'white',
    paddingVertical: 16,
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

    // marginBottom: 15,
    // textAlign: 'center',
  },
});
