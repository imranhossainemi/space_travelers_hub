import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Rocket from './Components/rockets/Rocket';
import Profile from './Components/profile/Profile';
import Header from './components/header/Header';
import Missions from './components/mission/Missions';
import { fetchRockets } from './Features/Rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
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
