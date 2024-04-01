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
import {WrapText} from '@mui/icons-material';
const {width} = Dimensions.get('window');
import {FileUp} from 'svg';
import {Dropdown} from 'react-native-element-dropdown';
import {ImagesAssets} from '../../assets/images/ImageAssets';
import RadioGroup from 'react-native-radio-buttons-group';
import {RadioButton} from 'react-native-paper';
import Collapsible from 'react-native-collapsible';




var radio_props = [
  {label: 'param1', value: 0},
  {label: 'param2', value: 1},
];

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

export const Add_Prescription = ({navigation}) => {
  const [text, onChangeText] = React.useState('LL');
  const [date, onChangeDate] = React.useState('');
  const [name, onChangeName] = React.useState('');

  const[collapsed, setCollapsed]= React.useState(true);

  const toggleExpand=()=>{
    setCollapsed(!collapsed)
  }

  // const [radiovalue, setRadiovalue] = React.useState('first');
  const [checked, setChecked] = React.useState('first');

  // const [number, onChangeNumber] = React.useState('');
  // const [isSelected, setSelection] = useState(false);
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  const [isFocus3, setIsFocus3] = useState(false);
  const [isFocus4, setIsFocus4] = useState(false);

  // const [modalVisible, setModalVisible] = useState(false);

  // const [modal2Visible, setModal2Visible] = useState(false);
  //   const radioButtons = useMemo(() => ([
  //     {
  //         id: '1', // acts as primary key, should be unique and non-empty string
  //         label: ' Call me for Details',
  //         value: 'option1'
  //     },
  //     {
  //         id: '2',
  //         label: 'Search and add Medicine to cart',
  //         value: 'option2'
  //     },
  //     {
  //       id: '3',
  //       label: 'Order Directly',
  //       value: 'option3'
  //   }
  // ]), []);

  // const [selectedId, setSelectedId] = useState();

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
          height: 23,
          borderWidth: 0,
          backgroundColor: 'white',
          paddingHorizontal: 25,
        }}>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 17,
            lineHeight: 23.19,
            color: '#212B36',
          }}>
          Attatched Prescription
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 140,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingBottom: 20,
          paddingHorizontal: 25,
          // marginTop:-20
          paddingTop: 8,
          // borderWidth: 1,
        }}>
        <TouchableOpacity >
          <View style={styles.upload}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 4,
              }}
              source={ImagesAssets.Add}
            />

            <View
              style={{
                width: '100%',
                marginTop: 2,
                borderWidth: 0,
                height: 18,
              }}>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: 16.37,
                  color: '#212B36',
                }}>
                Filename.jpg
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('H')}>
          <View style={styles.upload}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 4,
              }}
              source={ImagesAssets.Add}
            />

            <View
              style={{
                width: '100%',
                height: 18,
                marginTop: 2,
                borderWidth: 0,
              }}>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: 16.37,
                  color: '#212B36',
                }}>
                Filename.jpg
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('H')}>
          <View style={styles.upload}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 4,
              }}
              source={ImagesAssets.Add}
            />

            <View
              style={{
                width: '100%',
                marginTop: 2,
                borderWidth: 0,
                height: 18,
              }}>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: 16.37,
                  color: '#212B36',
                }}>
                Filename.jpg
              </Text>
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
          marginTop: 0,
        }}>
        <View style={{width: '100%', height: 23, marginTop: 26}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 700,
              lineHeight: 23.19,
              color: '#212B36',
            }}>
            Notes
          </Text>

          <View
            style={{
              width: '100%',
              height: 100,
              borderColor: 'green',
              marginTop: 6.5,
              // borderWidth:1
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
                placeholder={
                  !isFocus1
                    ? 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                    : ''
                }
                // searchPlaceholder="Search..."
                value={text}
                onFocus={() => setIsFocus1(true)}
                onBlur={() => setIsFocus1(false)}
                onChangeText={text => onChangeText(text)}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: '25.5%',
          width: '100%',
          paddingVertical: 8,
          paddingHorizontal: 34,
          backgroundColor: 'white',
          // borderWidth: 1,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop:24}}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#2441C2"
          />
          <Text
            style={{
              fontWeight: 600,
              fontSize: 15,
              lineHeight: 20.46,
              color: '#637381',
            }}>
            Call me for details
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:'3%', borderWidth:0, width:'100%'}}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')&&{toggleExpand}} 
            color="#2441C2"
          />
          <Text
            style={{
              fontWeight: 600,
              fontSize: 15,
              lineHeight: 20.46,
              color: '#637381',
            }}>
            Search and add Medicine to Cart
          </Text>
          
          </View>
          <View style={{ borderWidth:0, height:25, width:25, alignItems:'center', borderWidth:0, marginLeft:320, marginTop:-42 }}>
         <TouchableOpacity onPress={toggleExpand}><Icon name='keyboard-arrow-down' size={25} color='black'/></TouchableOpacity>
         
          
        </View>
        <Collapsible collapsed={collapsed} flexDirection='column'>
          <View style={{flexDirection: 'row', alignItems: 'center',   marginTop:16, paddingHorizontal:24}}>
        <RadioButton
            value="four"
            status={checked === 'four' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('four')}
            color="#2441C2"
          />
          <Text
            style={{
              fontWeight: 600,
              fontSize: 15,
              lineHeight: 20.46,
              color: '#637381',
            
            }}>
            Clear Existing Cart
          </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center',   marginTop:16, paddingHorizontal:24}}>
        <RadioButton
            value="five"
            status={checked === 'five' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('five')}
            color="#2441C2"
          />
          <Text
            style={{
              fontWeight: 600,
              fontSize: 15,
              lineHeight: 20.46,
              color: '#637381',
            
            }}>
            Move current cart to wishlist
          </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center',   marginTop:16, paddingHorizontal:24}}>
        <RadioButton
            value="six"
            status={checked === 'six' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('six')}
            color="#2441C2"
          />
          <Text
            style={{
              fontWeight: 600,
              fontSize: 15,
              lineHeight: 20.46,
              color: '#637381',
            
            }}>
            Add Medicines to existing Cart
          </Text>
          </View>
          </Collapsible>
       
        <View style={{flexDirection: 'row', alignItems: 'center',   marginTop:16}}>
          <RadioButton
            value="third"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
            color="#2441C2"
          />
          <Text
            style={{
              fontWeight: 600,
              fontSize: 15,
              lineHeight: 20.46,
              color: '#637381',
            
            }}>
            Order Directly
          </Text>
        </View>
      </View>
      <View style={{height: '100%', width: '100%', backgroundColor: 'white', padding:24}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}>
            <View  style={{backgroundColor:'#2441C2', height:48, width:'100%', borderRadius:8, justifyContent:'center', alignItems:'center'}}>
              <Text style={{color:'white', fontWeight:700, fontSize:15, lineHeight:26}}>Continue</Text>
            </View>
         
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  upload: {
    height: 100,
    width: 103,
    // backgroundColor: '#EDF0FA',
    // borderRadius: 8,
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
  container: {
    // backgroundColor: 'white',
    // paddingVertical: 16,
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
