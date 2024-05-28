import { StyleSheet} from 'react-native';
import Navigation from './pages/Navigation';
import { Provider } from 'react-redux'
import store from './pages/ReduxState/store';
import ProfileUpdate from './pages/Profile/ProfileUpdate';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
