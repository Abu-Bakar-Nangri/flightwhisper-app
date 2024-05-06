import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput ,Button,Touchable} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FlightWhisper</Text>
      <TextInput style={styles.input} placeholder='Enter Name'></TextInput>
      <TextInput style={styles.input} placeholder='Enter Name'></TextInput>
      <TextInput style={styles.input} placeholder='Enter Name'></TextInput>
      <Touchable style={styles.button}>Login hdlfjgldfkjglfkd dfgjdlfg dfkgj ere</Touchable>
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
