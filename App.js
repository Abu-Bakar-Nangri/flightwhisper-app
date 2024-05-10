import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#f9f9f9'
  },
  text:{
    fontSize:25,
    fontWeight:'bold',
    color:'#f100f2'
  },
  input:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:10,
    height:50,
    width:'90%',
    paddingHorizontal:20,
    marginVertical:5,
    fontSize:16, 
  },
  button:{
    width:'90%',
    height:40,
    fontSize:18,
  }
});
