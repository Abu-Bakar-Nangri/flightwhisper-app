import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";

const ProfileUpdate = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    gender: "",
    dob: "",
    nationality: "",
  });
  const [updatedAddress, setUpdatedAddress] = useState({
    street: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
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
      country: "Pakistan",
    },
  };

  const handleUpdateProfile = () => {
    const updatedProfileData = { ...userData };

    updatedProfileData.name = updatedUserData.name || userData.name;
    updatedProfileData.email = updatedUserData.email || userData.email;
    updatedProfileData.phoneNo = updatedUserData.phoneNo || userData.phoneNo;
    updatedProfileData.gender = updatedUserData.gender || userData.gender;
    updatedProfileData.dob = updatedUserData.dob || userData.dob;
    updatedProfileData.nationality =
      updatedUserData.nationality || userData.nationality;

    updatedProfileData.address = {
      ...userData.address,
      street: updatedAddress.street || userData.address.street,
      city: updatedAddress.city || userData.address.city,
      province: updatedAddress.province || userData.address.province,
      postalCode: updatedAddress.postalCode || userData.address.postalCode,
      country: updatedAddress.country || userData.address.country,
    };

    console.log("Updated Profile Data:", updatedProfileData);

    setModalVisible(false);
  };

  const renderAddress = () => {
    const { street, city, province, postalCode, country } = userData.address;
    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          {street}, {city}, {province} {postalCode}, {country}
        </Text>
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
      <TouchableOpacity
        style={styles.updateButton}
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
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Edit Profile</Text>
            <View style={styles.emailview}>
              <Text style={styles.email}>Name</Text>
              <TextInput
                style={styles.enteremail}
                
                placeholder="Enter name"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.emailview}>
              <Text style={styles.email}>Phone Number</Text>
              <TextInput
                style={styles.enteremail}
                
                placeholder="Enter phone number"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.emailview}>
              <Text style={styles.email}>Gender</Text>
              <TextInput
                style={styles.enteremail}
                
                placeholder="Enter gender"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.emailview}>
              <Text style={styles.email}>Date of Birth</Text>
              <TextInput
                style={styles.enteremail}
                
                placeholder="Enter date of birth"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.emailview}>
              <Text style={styles.email}>Nationality</Text>
              <TextInput
                style={styles.enteremail}
                
                placeholder="Enter nationality"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.emailview}>
              <Text style={styles.email}>Street</Text>
              <TextInput
                style={styles.enteremail}
                
                placeholder="Enter street"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.emailview}>
              <Text style={styles.email}>City</Text>
              <TextInput
                style={styles.enteremail}
                
                placeholder="Enter city"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.emailview}>
              <Text style={styles.email}>Province</Text>
              <TextInput
                style={styles.enteremail}
                
                placeholder="Enter province"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.emailview}>
              <Text style={styles.email}>Postal Code</Text>
              <TextInput
                style={styles.enteremail}
                
                placeholder="Enter postal code"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.emailview}>
              <Text style={styles.email}>Country</Text>
              <TextInput
                style={styles.enteremail}
                
                placeholder="Enter country"
                autoCapitalize="none"
              />
            </View>
    
            <Button title="Update" onPress={handleUpdateProfile} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
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
});

export default ProfileUpdate;
