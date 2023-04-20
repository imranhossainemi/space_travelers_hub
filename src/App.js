import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Missions from './components/mission/Missions';
import Rocket from './components/rockets/Rocket';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
