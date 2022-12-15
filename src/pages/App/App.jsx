import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../YourListPage/YourListPage';
import AboutPage from '../AboutPage/AboutPage';
import DonePage from '../DonePage/DonePage';
import NavBar from '../../components/NavBar/NavBar';
import YourListPage from '../YourListPage/YourListPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/yourlist" element={<YourListPage user={user} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/done" element={<DonePage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
