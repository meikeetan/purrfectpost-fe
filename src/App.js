import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Likes from './pages/Likes';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="Purrfect Post">
      <Router>
      <Navbar/><hr/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CreatePost" element={<CreatePost />}></Route>
          <Route path="/Likes" element={<Likes />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp setUser={setUser} />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Settings" element={<Settings />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
