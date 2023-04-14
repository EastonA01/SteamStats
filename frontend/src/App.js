import './App.css';

import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Friend from './pages/Friend';
import Recap from './pages/Recap';
import NoPage from "./pages/NoPage.js";
import Menu from './components/Menu';
import OwnedGames from './pages/OwnedGames';
import RecentlyPlayed from "./pages/RecentlyPlayed.js";
import User from './pages/User';
import UserStats from './pages/UserStats';

function App() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="user_stats" element={<UserStats />} />
                <Route path="friend" element={<Friend />} />
                <Route path="hub" element={<Recap />} />
                <Route path="user" element={<User />} />
                <Route path="owned" element={<OwnedGames />} />
                <Route path="recently_played" element={<RecentlyPlayed />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    );
}

export default App;

