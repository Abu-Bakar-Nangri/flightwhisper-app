import { StyleSheet} from 'react-native';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <Register/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#f9f9f9'
  }
});
