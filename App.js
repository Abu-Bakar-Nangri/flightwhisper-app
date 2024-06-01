import Navigation from './pages/Navigation';
import FlightSearchResult from './pages/FlightAllPages/FlightSearchResult';

import { UserProvier } from './pages/Context/UserContext';
export default function App() {
  return (
    <UserProvier>
        <Navigation/>
    </UserProvier>
  );
}
