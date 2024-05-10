import { StyleSheet} from 'react-native';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import PasswordChanged from './pages/PasswordChanged';

export default function App() {
  return (
    <PasswordChanged/>
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
