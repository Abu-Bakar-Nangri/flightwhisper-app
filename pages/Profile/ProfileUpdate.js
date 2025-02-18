import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert,
  ActivityIndicator
} from "react-native";
import { RadioButton } from 'react-native-paper';
import Toast from "react-native-toast-message";
import { UserContext } from "../Context/UserContext";

const defaultAddress = {
  street: '',
  city: '',
  province: '',
  postalCode: '',
  country: ''
};

const ProfileUpdate = () => {
  const { user, setUser } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDOB] = useState('');
  const [nationality, setNationality] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setPhoneNo(user.phoneNo || '');
      setGender(user.gender || '');
      setDOB(user.dob || '');
      setNationality(user.nationality || '');
      setStreet(user.address ? user.address.street || '' : '');
      setCity(user.address ? user.address.city || '' : '');
      setProvince(user.address ? user.address.province || '' : '');
      setPostalCode(user.address ? user.address.postalCode || '' : '');
      setCountry(user.address ? user.address.country || '' : '');
    }
  }, [user]);


  const handleUpdate = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`http://192.168.1.83:3699/api/users/updateProfile/${user._id}`, {
        name,
        phoneNo,
        gender,
        dob,
        nationality,
        address: {
          street,
          city,
          province,
          postalCode,
          country,
        },
      });
  
      if (response.status === 200) {
  
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Update was successful',
          position: "bottom",
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Update failed',
          position: "bottom",
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred during the update',
        position: "bottom",
      });
    } finally {
      setModalVisible(false);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (user) {
      setName(user.name || '');
      setPhoneNo(user.phoneNo || '');
      setGender(user.gender || '');
      setDOB(user.dob || '');
      setNationality(user.nationality || '');
      setStreet(user.address ? user.address.street || '' : '');
      setCity(user.address ? user.address.city || '' : '');
      setProvince(user.address ? user.address.province || '' : '');
      setPostalCode(user.address ? user.address.postalCode || '' : '');
      setCountry(user.address ? user.address.country || '' : '');
    }
     setModalVisible(false)
  }
  

  return (
    <ScrollView style={styles.container}>
    
      <Text style={styles.header}>Profile Edit</Text>
      <Text style={styles.sectionHeader}>Name</Text>
      <Toast />
      <View style={styles.section}>
        <Text style={styles.sectionText}>{name}</Text>
      </View>
      <Text style={styles.sectionHeader}>Email</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{user.email}</Text>
      </View>
      <Text style={styles.sectionHeader}>Phone Number</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{phoneNo}</Text>
      </View>
      <Text style={styles.sectionHeader}>Gender</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{gender}</Text>
      </View>
      <Text style={styles.sectionHeader}>Date of Birth</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{dob}</Text>
      </View>
      <Text style={styles.sectionHeader}>Nationality</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{nationality}</Text>
      </View>
      <Text style={styles.sectionHeader}>Address</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          {street}, {city}, {province} {postalCode}, {country}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.updateButton}
        activeOpacity={0.9}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ScrollView>
        {loading && <ActivityIndicator style={styles.loader} size={70} color={"#4F718A"} />}
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>Edit Profile</Text>
              <View style={styles.emailview}>
                <Text style={styles.email}>Name</Text>
                <TextInput
                  style={styles.enteremail}
                  value={name}
                  onChangeText={(text) => setName(text)}
                  placeholder="Enter name"
                />
              </View>
              <View style={styles.emailview}>
                <Text style={styles.email}>Phone Number</Text>
                <TextInput
                  style={styles.enteremail}
                  value={phoneNo}
                  onChangeText={(text) => setPhoneNo(text)}
                  placeholder="Enter phone number"
                />
              </View>
              <View style={styles.emailview}>
                <Text style={styles.email}>Gender</Text>
                <View style={styles.radioContainer}>
                  <View style={styles.radioButton}>
                    <RadioButton
                      value={gender}
                      status={gender === 'Male' ? 'checked' : 'unchecked'}
                      onPress={() => setGender('Male')}
                      color="#4F718A"
                    />
                    <Text style={styles.radioText}>Male</Text>
                  </View>
                  <View style={styles.radioButton}>
                    <RadioButton
                      value={gender}
                      status={gender === 'Female' ? 'checked' : 'unchecked'}
                      onPress={() => setGender('Female')}
                      color="#4F718A"
                    />
                    <Text style={styles.radioText}>Female</Text>
                  </View>
                  <View style={styles.radioButton}>
                    <RadioButton
                      value={gender}
                      status={gender === 'Others' ? 'checked' : 'unchecked'}
                      onPress={() => setGender('Others')}
                      color="#4F718A"
                    />
                    <Text style={styles.radioText}>Others</Text>
                  </View>
                </View>
              </View>
              <View style={styles.emailview}>
                <Text style={styles.email}>Date of Birth</Text>
                <TextInput
                  style={styles.enteremail}
                  value={dob}
                  onChangeText={(text) => setDOB(text)}
                  placeholder="Enter date of birth"

                />
              </View>
              <View style={styles.emailview}>
                <Text style={styles.email}>Nationality</Text>
                <TextInput
                  style={styles.enteremail}
                  value={nationality}
                  onChangeText={(text) => setNationality(text)}
                  placeholder="Enter nationality"

                />
              </View>
              <View style={styles.emailview}>
                <Text style={styles.email}>Street</Text>
                <TextInput
                  style={styles.enteremail}
                  value={street}
                  onChangeText={(text) => setStreet(text)}
                  placeholder="Enter street"

                />
              </View>
              <View style={styles.emailview}>
                <Text style={styles.email}>City</Text>
                <TextInput
                  style={styles.enteremail}
                  value={city}
                  onChangeText={(text) => setCity(text)}
                  placeholder="Enter city"

                />
              </View>
              <View style={styles.emailview}>
                <Text style={styles.email}>Province</Text>
                <TextInput
                  style={styles.enteremail}
                  value={province}
                  onChangeText={(text) => setProvince(text)}
                  placeholder="Enter province"

                />
              </View>
              <View style={styles.emailview}>
                <Text style={styles.email}>Postal Code</Text>
                <TextInput
                  style={styles.enteremail}
                  placeholder="Enter postal code"
                  value={postalCode}
                  onChangeText={(text) => setPostalCode(text)}
                />
              </View>
              <View style={styles.emailview}>
                <Text style={styles.email}>Country</Text>
                <TextInput
                  style={styles.enteremail}
                  value={country}
                  onChangeText={(text) => setCountry(text)}
                  placeholder="Enter country"
                />
              </View>
              <View style={styles.modeleditbtn}>
                <TouchableOpacity activeOpacity={0.9} style={styles.cancelBtn} onPress={handleCancel} >
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.updateBtn} onPress={handleUpdate} >
                  <Text style={styles.updateText}>Update</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    zIndex: -100,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1, width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.6)',
    zIndex:1000,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#000000",
  },
  section: {
    marginBottom: 15,
    backgroundColor: "#92A7BA40",
    padding: 10,
    borderRadius: 8,
  },
  sectionHeader: {
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 5,
    color: "#000000",
  },
  sectionText: {
    color: "#000000",
  },
  ffooter: {
    paddingBottom: 20,
  },
  updateButton: {
    backgroundColor: "#4F718A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
    height: 50,
    zIndex: -100,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  emailview: {
    paddingVertical: 3,
    width: "100%",
  },
  email: {
    fontSize: 14,
    paddingVertical: 6,
    color: "#000000",
  },
  enteremail: {
    borderColor: "#D8DADC",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    height: 55,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  modeleditbtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 25,
  },
  cancelBtn: {
    backgroundColor: "#92A7BA40",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
    width: '45%',
  },
  cancelText: {
    fontSize: 16,
  },
  updateText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600'
  },
  updateBtn: {
    backgroundColor: "#4F718A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
    width: '45%',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    marginLeft: 8,
  },
});

export default ProfileUpdate;
