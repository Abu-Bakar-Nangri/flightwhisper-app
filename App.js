import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button ,TextInput} from 'react-native';
import Login from './pages/Login';

export default function App() {
  return (
    <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
