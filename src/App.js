// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import SideBar from './components/SideBar'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/dashboard" element={<div> <SideBar /> <Dashboard /></div>} ></Route>
        <Route path="/Profile" element={<div> <SideBar /> <Profile /></div>} ></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
