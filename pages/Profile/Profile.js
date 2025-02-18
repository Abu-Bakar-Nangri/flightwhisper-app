import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  Modal,
  Pressable,
  Platform,
  Alert,
  ActivityIndicator
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import img from "../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg";
import axios from "axios";
import Toast from "react-native-toast-message";
import { UserContext } from "../Context/UserContext";

const Profile = ({ navigation }) => {
  const {user} = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleTicket = () => {
    navigation.navigate("Flight");
  };
  const handleHome = () => {
    navigation.navigate("Dashboard");
  };
  const handleProfile = () => {
    navigation.navigate("Profile");
  };
  const handleHistory = () => {
    navigation.navigate("History");
  };
  const handlePaymentMethod = () => {
    navigation.navigate("PaymentMethods");
  };
  const handleLanguage = () => {
    Alert.alert("Language supported is English");
  };
  const handleSecurity = () => {
    navigation.navigate("Security");
  };
  const handleHelpCenter = () => {
    navigation.navigate("HelpCenter");
  };
  const handleAboutUS = () => {
    navigation.navigate("AboutUs");
  };
  const handleContactUS = () => {
    navigation.navigate("ContactUs");
  };
  const handleProfileUpdate = () => {
    navigation.navigate("ProfileUpdate");
  };

  const handleSignout = () => {
    Alert.alert(
      "Confirm Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Sign Out",
          onPress: () => navigation.navigate("Login"),
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  const handleAccountDelete = () =>{
    Alert.alert(
      "Confirm Deleting Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Delete Account",
          onPress: () => deleteAccount(),
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  }

  const deleteAccount = async () => {
    Toast.show({
      type: 'info',
      text1: 'Deleting Account',
      text2: 'Your account deletion request is being processed',
      position: 'bottom',
    });
    try {
      setLoading(true);
      const response = await axios.delete(`http://192.168.1.83:3699/api/users/deleteAccount/${user.email}`);
  
      if (response.status === 200) {
        navigation.navigate('Login');
        Toast.show({
          type: 'success',
          text1: 'Account Deleted',
          text2: 'Your account has been deleted successfully',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Failed to delete the account',
          position: 'bottom',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred while deleting the account',
        position: 'bottom',
      });
      console.error('Error deleting account:', error);
    } finally{
      setLoading(false);
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
     {loading && <ActivityIndicator style={styles.loader} size={70} color={"#4F718A"} />}
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.profiledata}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}} activeOpacity={1} style={styles.BackBtnContainer}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={28}
                color={"#f5f5f5"}
              />
            </TouchableOpacity>
            <Text style={styles.userName}>Profile</Text>
            <TouchableOpacity activeOpacity={1}>
              <MaterialCommunityIcons
                name={"dots-vertical"}
                size={28}
                color="#f5f5f5"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ProfileInfoContainer}>
          <View style={styles.ProfileData}>
            <Pressable
              style={styles.ProfileImage}
              onPress={() => setModalVisible(true)}
            >
              <Image source={img} style={styles.image} resizeMode="cover" />
            </Pressable>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}
            >
              <View style={styles.modalContainer}>
                <Image
                  source={img}
                  style={styles.fullScreenImage}
                  resizeMode="contain"
                />
                <Pressable
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <MaterialCommunityIcons
                    name="close"
                    size={30}
                    color="black"
                  />
                </Pressable>
              </View>
            </Modal>
            <Text style={styles.ProfileTitle}>{user.name}</Text>
            <Text style={styles.ProfileEmail}>{user.email}</Text>
          </View>
          <View style={styles.SettingContainer}>
            <Text style={styles.SettingTitle}>Profile</Text>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.SettingItem}
              onPress={handleProfileUpdate}
            >
              <View style={styles.SettingItemInfo}>
                <MaterialCommunityIcons
                  name={"account"}
                  size={24}
                  color="rgba(0,0,0,0.7)"
                  style={styles.SettingItemIcon}
                />
                <Text style={styles.SettingItemTitle}>Profile Edit</Text>
              </View>
              <MaterialCommunityIcons
                name={"chevron-right"}
                size={36}
                color="rgba(0,0,0,0.7)"
                style={styles.SettingItemIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.SettingContainer}>
            <Text style={styles.SettingTitle}>Settings</Text>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.SettingItem}
              onPress={handlePaymentMethod}
            >
              <View style={styles.SettingItemInfo}>
                <MaterialCommunityIcons
                  name={"credit-card"}
                  size={24}
                  color="rgba(0,0,0,0.7)"
                  style={styles.SettingItemIcon}
                />
                <Text style={styles.SettingItemTitle}>Payment Method</Text>
              </View>
              <MaterialCommunityIcons
                name={"chevron-right"}
                size={36}
                color="rgba(0,0,0,0.7)"
                style={styles.SettingItemIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.SettingItem}
              onPress={handleLanguage}
            >
              <View style={styles.SettingItemInfo}>
                <MaterialCommunityIcons
                  name={"earth"}
                  size={24}
                  color="rgba(0,0,0,0.7)"
                  style={styles.SettingItemIcon}
                />
                <Text style={styles.SettingItemTitle}>Language</Text>
              </View>
              <MaterialCommunityIcons
                name={"chevron-right"}
                size={36}
                color="rgba(0,0,0,0.7)"
                style={styles.SettingItemIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.SettingItem}
              onPress={handleSecurity}
            >
              <View style={styles.SettingItemInfo}>
                <MaterialCommunityIcons
                  name={"security"}
                  size={24}
                  color="rgba(0,0,0,0.7)"
                  style={styles.SettingItemIcon}
                />
                <Text style={styles.SettingItemTitle}>Security</Text>
              </View>
              <MaterialCommunityIcons
                name={"chevron-right"}
                size={36}
                color="rgba(0,0,0,0.7)"
                style={styles.SettingItemIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.SettingContainer}>
            <Text style={styles.SettingTitle}>Support</Text>

            <TouchableOpacity
              activeOpacity={1}
              style={styles.SettingItem}
              onPress={handleAboutUS}
            >
              <View style={styles.SettingItemInfo}>
                <MaterialCommunityIcons
                  name={"account-group"}
                  size={24}
                  color="rgba(0,0,0,0.7)"
                  style={styles.SettingItemIcon}
                />
                <Text style={styles.SettingItemTitle}>About Us</Text>
              </View>
              <MaterialCommunityIcons
                name={"chevron-right"}
                size={36}
                color="rgba(0,0,0,0.7)"
                style={styles.SettingItemIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.SettingItem}
              onPress={handleContactUS}
            >
              <View style={styles.SettingItemInfo}>
                <MaterialCommunityIcons
                  name={"phone"}
                  size={24}
                  color="rgba(0,0,0,0.7)"
                  style={styles.SettingItemIcon}
                />
                <Text style={styles.SettingItemTitle}>Contact Us</Text>
              </View>
              <MaterialCommunityIcons
                name={"chevron-right"}
                size={36}
                color="rgba(0,0,0,0.7)"
                style={styles.SettingItemIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.SettingItem}
              onPress={handleHelpCenter}
            >
              <View style={styles.SettingItemInfo}>
                <MaterialCommunityIcons
                  name={"help-circle"}
                  size={24}
                  color="rgba(0,0,0,0.7)"
                  style={styles.SettingItemIcon}
                />
                <Text style={styles.SettingItemTitle}>Help Center</Text>
              </View>
              <MaterialCommunityIcons
                name={"chevron-right"}
                size={36}
                color="rgba(0,0,0,0.7)"
                style={styles.SettingItemIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.SettingContainer}>
            <Text style={styles.SettingTitle}>Account Center</Text>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.SettingItem}
              onPress={handleSignout}
            >
              <View style={styles.SettingItemInfo}>
                <MaterialCommunityIcons
                  name={"logout"}
                  size={24}
                  color="rgba(0,0,0,0.7)"
                  style={styles.SettingItemIcon}
                />
                <Text style={styles.SettingItemTitle}>Signout</Text>
              </View>
              <MaterialCommunityIcons
                name={"chevron-right"}
                size={36}
                color="rgba(0,0,0,0.7)"
                style={styles.SettingItemIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.SettingItem} onPress={handleAccountDelete}>
              <View style={styles.SettingItemInfo}>
                <MaterialCommunityIcons
                  name={"delete"}
                  size={24}
                  color="rgba(0,0,0,0.7)"
                  style={styles.SettingItemIcon}
                />
                <Text style={styles.SettingItemTitle}>Delete account</Text>
              </View>
              <MaterialCommunityIcons
                name={"chevron-right"}
                size={36}
                color="rgba(0,0,0,0.7)"
                style={styles.SettingItemIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
          onPress={handleHome}
        >
          <MaterialCommunityIcons name={"home"} size={26} color="gray" />
          <Text style={styles.otherIconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
          onPress={handleTicket}
        >
          <MaterialCommunityIcons name={"airplane"} size={26} color="gray" />
          <Text style={styles.otherIconText}>Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
          onPress={handleHistory}
        >
          <MaterialCommunityIcons name={"file"} size={26} color="gray" />
          <Text style={styles.otherIconText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
          onPress={handleProfile}
        >
          <MaterialCommunityIcons name={"account"} size={30} color="#4F718A" />
          <Text style={styles.homeIconText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f5f5f5",
    width: "100%",
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1, width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.6)'
  },
  profiledata: {
    backgroundColor: "#4F718A",
    height: 200,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Platform.OS === "ios" ? 28 : 40,
    marginHorizontal: 20,
    width: "92%",
  },
  BackBtnContainer: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#f9f9f9",
    backgroundColor: "#728DA1",
  },
  userName: {
    fontSize: Platform.OS === "ios" ? 26 : 22,
    fontWeight: "500",
    color: "rgba(255,255,255,0.9)",
  },
  ProfileInfoContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 12,
    marginTop: -105,
    marginVertical: 10,
    elevation: 5,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  ProfileData: {
    justifyContent: "center",
    alignItems: "center",
  },
  ProfileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    position: "relative",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    marginTop: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: {
    width: width,
    height: height,
  },
  closeButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 60 : 20,
    right: Platform.OS === "ios" ? 30 : 25,
    borderRadius: 30,
    borderWidth: 2,
  },
  ProfileTitle: {
    fontSize: Platform.OS === "ios" ? 20 : 18,
    fontWeight: "600",
  },
  ProfileEmail: {
    fontSize: 14,
    color: "rgba(0,0,0,0.4)",
  },
  SettingContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  SettingTitle: {
    fontSize: 17,
    fontWeight: "500",
    paddingVertical: 10,
  },
  SettingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#B5C5D2",
    height: 60,
    borderRadius: 8,
    marginVertical: 4,
  },
  SettingItemInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  SettingItemIcon: {
    marginHorizontal: 10,
  },
  SettingItemTitle: {
    paddingHorizontal: 2,
    fontSize: 16,
  },
  footerContainer: {
    backgroundColor: "#fff",
    justifyContent: "space-around",
    flexDirection: "row",
    height: Platform.OS === "ios" ? 60 : 50,
    width: "100%",
  },
  footerBtn: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "red",
  },
  homeIconText: {
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "bold",
    color: "#4F718A",
  },
  otherIconText: {
    fontSize: 11,
    lineHeight: 15,
    color: "gray",
  },
});

export default Profile;
