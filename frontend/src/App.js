import './App.css';

import Hub from './pages/Hub';
import { Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage.js";
import Dashboard from './pages/Dashboard'
import Friend from './pages/Friend';
import User from './pages/User';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="friend" element={<Friend />} />
            <Route path="hub" element={<Hub />} />
            <Route path="user" element={<User />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    );
}

export default App;

