import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from "react-native";

const ProfileUpdate = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    gender: "",
    dob: "",
    nationality: ""
  });
  const [updatedAddress, setUpdatedAddress] = useState({
    street: "",
    city: "",
    province: "",
    postalCode: "",
    country: ""
  });

  const userData = {
    _id: "66562162cbd69eeac59ac811",
    name: "Abu Bakar Siddique",
    email: "abubakarnangri@gmail.com",
    phoneNo: "3245521001",
    gender: "male",
    dob: "2003-05-15",
    nationality: "Pakistan",
    address: {
      street: "Rose place street",
      city: "Lahore",
      province: "Punjab",
      postalCode: "54000",
      country: "Pakistan"
    }
  };

  const handleUpdateProfile = () => {
    // Create a copy of the userData object
    const updatedProfileData = { ...userData };
  
    // Update the user data with the new values
    updatedProfileData.name = updatedUserData.name || userData.name;
    updatedProfileData.email = updatedUserData.email || userData.email;
    updatedProfileData.phoneNo = updatedUserData.phoneNo || userData.phoneNo;
    updatedProfileData.gender = updatedUserData.gender || userData.gender;
    updatedProfileData.dob = updatedUserData.dob || userData.dob;
    updatedProfileData.nationality = updatedUserData.nationality || userData.nationality;
  
    // Update the address with the new values
    updatedProfileData.address = {
      ...userData.address,
      street: updatedAddress.street || userData.address.street,
      city: updatedAddress.city || userData.address.city,
      province: updatedAddress.province || userData.address.province,
      postalCode: updatedAddress.postalCode || userData.address.postalCode,
      country: updatedAddress.country || userData.address.country,
    };
  
    // Perform any other necessary operations with updatedProfileData
  
    // Log the updated profile data
    console.log("Updated Profile Data:", updatedProfileData);
  
    // Close the modal
    setModalVisible(false);
  };
  

  const renderAddress = () => {
    const { street, city, province, postalCode, country } = userData.address;
    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>{street}, {city}, {province} {postalCode}, {country}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Profile Edit</Text>
      <Text style={styles.sectionHeader}>Name</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{userData.name}</Text>
      </View>
      <Text style={styles.sectionHeader}>Email</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{userData.email}</Text>
      </View>
      <Text style={styles.sectionHeader}>Phone Number</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{userData.phoneNo}</Text>
      </View>
      <Text style={styles.sectionHeader}>Gender</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{userData.gender}</Text>
      </View>
      <Text style={styles.sectionHeader}>Date of Birth</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{userData.dob}</Text>
      </View>
      <Text style={styles.sectionHeader}>Nationality</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{userData.nationality}</Text>
      </View>
      <Text style={styles.sectionHeader}>Address</Text>
      {userData.address && renderAddress()}
      <TouchableOpacity style={styles.updateButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Edit Profile</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={updatedUserData.name}
              onChangeText={(text) => setUpdatedUserData({...updatedUserData, name: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={updatedUserData.email}
              onChangeText={(text) => setUpdatedUserData({...updatedUserData, email: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={updatedUserData.phoneNo}
              onChangeText={(text) => setUpdatedUserData({...updatedUserData, phoneNo: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Gender"
              value={updatedUserData.gender}
              onChangeText={(text) => setUpdatedUserData({...updatedUserData, gender: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              value={updatedUserData.dob}
              onChangeText={(text) => setUpdatedUserData({...updatedUserData, dob: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Nationality"
              value={updatedUserData.nationality}
              onChangeText={(text) => setUpdatedUserData({...updatedUserData, nationality: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Street"
              value={updatedAddress.street}
              onChangeText={(text) => setUpdatedAddress({...updatedAddress, street: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="City"
              value={updatedAddress.city}
              onChangeText={(text) => setUpdatedAddress({...updatedAddress, city: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Province"
              value={updatedAddress.province}
              onChangeText={(text) => setUpdatedAddress({...updatedAddress, province: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Postal Code"
              value={updatedAddress.postalCode}
              onChangeText={(text) => setUpdatedAddress({...updatedAddress, postalCode: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Country"
              value={updatedAddress.country}
              onChangeText={(text) => setUpdatedAddress({...updatedAddress, country: text})}
            />
            <Button title="Update" onPress={handleUpdateProfile} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
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
    backgroundColor: '#4F718A', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center', 
    marginTop: 20, 
    marginBottom: 50,
    height:50, 
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width:'100%',
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
});

export default ProfileUpdate;
