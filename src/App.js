import './Styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Rocket from './Components/Rocket';
import Profile from './Components/Profile';
import Header from './Components/Header';
import Missions from './Components/Missions';
import { fetchRockets } from './Features/Rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/space_travelers_hub/" element={<Rocket />} />
          <Route path="/space_travelers_hub/missions" element={<Missions />} />
          <Route path="/space_travelers_hub/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
