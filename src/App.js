import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import React, { useState } from 'react';
import { getUser } from './utilities/users-service';
import Authentication from './pages/Authentication';

function App() {
  const [user, setUser] = useState(getUser());
  //getUser()
  
  return (
    <div className="Purrfect Post">
      {user?(
              <Router>
              <Navbar/><hr/>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/CreatePost" element={<CreatePost />}></Route>
                  <Route path="/Explore" element={<Explore />}></Route>
                  <Route path="/Profile" element={<Profile />}></Route>
                  <Route path="/Settings" element={<Settings />}></Route>
                </Routes>
              </Router>
      ): (
        <Authentication setUser={setUser}/>
      )
    
      }

    </div>
  );
}

export default App;
