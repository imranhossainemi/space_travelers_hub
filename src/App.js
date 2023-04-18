import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Mission from './components/mission/Mission';
import Rocket from './components/rockets/Rocket';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
