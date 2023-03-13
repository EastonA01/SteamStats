import './App.css';

import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Friend from './pages/Friend';
import Hub from './pages/Hub';
import NoPage from "./pages/NoPage.js";
// import OwnedGames from './pages/OwnedGames';
import Menu from './components/Menu';
import OwnedGames from './pages/OwnedGames';
import RecentlyPlayed from "./pages/RecentlyPlayed.js";
import User from './pages/User';

function App() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="friend" element={<Friend />} />
                <Route path="hub" element={<Hub />} />
                <Route path="user" element={<User />} />
                <Route path="owned" element={<OwnedGames />} />
                <Route path="recently_played" element={<RecentlyPlayed />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    );
}

export default App;

