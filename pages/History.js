import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const notifications = [
  {
    id: 1,
    icon: "ticket",
    message: "Your Booking Has Been Successful",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dolor tempor a nisl viverra in sit id convallis. Porttitor cras posuere volutpat id placerat mattis sed neque eget.",
    date: "2024-05-20T04:25:00",
  },
  {
    id: 2,
    icon: "bell",
    message: "Reminder: Upcoming Event Tomorrow",
    description: "Don't forget about the event tomorrow!",
    date: "2024-05-21T10:00:00",
  },
  {
    id: 3,
    icon: "calendar",
    message: "Meeting Reminder",
    description: "You have a meeting at 2:00 PM.",
    date: "2024-05-12T14:00:00",
  },
  {
    id: 4,
    icon: "car",
    message: "Car Maintenance Due",
    description: "Time for your car's regular maintenance.",
    date: "2024-03-05T08:30:00",
  },
  {
    id: 5,
    icon: "credit-card",
    message: "Credit Card Payment Reminder",
    description: "Your credit card payment is due tomorrow.",
    date: "2024-02-24T09:00:00",
  },
  {
    id: 6,
    icon: "bell",
    message: "Reminder: Anniversary",
    description: "Don't forget your anniversary today!",
    date: "2024-05-02T11:00:00",
  },
];

const formatDate = (dateStr) => {
  const today = new Date();
  const notificationDate = new Date(dateStr);

  if (notificationDate.toDateString() === today.toDateString()) {
    return "Today";
  } else if (notificationDate.getDate() === today.getDate() - 1) {
    return "Yesterday";
  } else {
    return notificationDate.toLocaleDateString(); // Format other dates as locale date
  }
};

const History = ({ navigation }) => {
  const handleTicket = () => {
    navigation.navigate("Ticket");
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

  const groupedNotifications = notifications.reduce((group, notification) => {
    const dateStr = formatDate(notification.date);
    group[dateStr] = group[dateStr] || [];
    group[dateStr].push(notification);
    return group;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.NotificatonContainer}>
        <TouchableOpacity activeOpacity={1} style={styles.BackBtnContainer}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={28}
            color={"#f5f5f5"}
          />
        </TouchableOpacity>
        <Text style={styles.NotificatonTitle}>Notification</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.keys(groupedNotifications)
          .sort((a, b) => {
            if (a === "Today") return -1;
            if (b === "Today") return 1;
            if (a === "Yesterday") return -1;
            if (b === "Yesterday") return 1;
            return new Date(a) - new Date(b);
          })
          .map((date) => (
            <View key={date}>
              <Text style={styles.dateTitle}>{date}</Text>
              {groupedNotifications[date].map((notification) => (
                <View key={notification.id} style={styles.notifycontainer}>
                  <View style={styles.notificationItem}>
                    <View style={styles.notifyIcon}>
                      <MaterialCommunityIcons
                        size={24}
                        name={notification.icon}
                        color={'rgba(0,0,0,0.8)'}
                      />
                    </View>
                    <View style={styles.infoNotify}>
                      <Text style={styles.message}>{notification.message}</Text>
                      <Text style={styles.description}>{notification.description}</Text>
                      <Text style={styles.date}>{notification.date}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
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
          <MaterialCommunityIcons name={"ticket"} size={26} color="gray" />
          <Text style={styles.otherIconText}>Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
          onPress={handleHistory}
        >
          <MaterialCommunityIcons name={"history"} size={26} color="#4F718A" />
          <Text style={styles.homeIconText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.footerBtn}
          onPress={handleProfile}
        >
          <MaterialCommunityIcons name={"account"} size={30} color="gray" />
          <Text style={styles.otherIconText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f5f5f5",
    width: "100%",
  },
  NotificatonContainer: {
    backgroundColor: "#4F718A",
    width: "100%",
    flexDirection: "row",
    height: Platform.OS === "ios" ? 80 : 100,
    justifyContent: "space-between",
    alignItems: "center",
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
    marginLeft: 20,
  },
  NotificatonTitle: {
    fontSize: 22,
    color: "#fff",
    marginLeft: -50,
  },
  notifycontainer: {
    paddingVertical: 10,
  },
  notificationItem: {
    flexDirection: "row",
  },
  notifyIcon: {
    backgroundColor: "#728DA1",
    width: 38,
    height: 38,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:20,
  },
  infoNotify:{
    paddingRight: 20, // Adjust as needed
    width:'81%'
  },
  
  message:{
    paddingRight:10,
    fontSize:15,
    fontWeight:'bold',
  },
  description:{
    fontSize:14,
    color:'rgba(0,0,0,0.5)',
    paddingVertical:4,
  },
  date:{
    fontSize:11,
    color:'rgba(0,0,0,0.5)',
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
    shadowOffset: { width: 0, height: 8 },
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
  dateTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

export default History;
