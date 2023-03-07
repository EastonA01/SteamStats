import './App.css';
// import Home from "./Home";
import Hub from './pages/Hub';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage.js";
import Dashboard from './pages/Dashboard'

function App() {
    return (     
              <Routes>
                <Route path="/" element={<Dashboard />}>
                  {/* <Route index element={<Home />} /> */}
                  <Route path="hub" element={<Hub />} />
                  {/* <Route path="contact" element={<Contact />} /> */}
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
    );
}

export default App;

