import './App.css';

import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Friend from './pages/Friend';
import Hub from './pages/Hub';
import NoPage from "./pages/NoPage.js";
import OwnedGames from './pages/OwnedGames';
import User from './pages/User';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="friend" element={<Friend />} />
            <Route path="hub" element={<Hub />} />
            <Route path="user" element={<User />} />
            <Route path="owned" element={<OwnedGames />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    );
}

export default App;

