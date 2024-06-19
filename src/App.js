import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import React, { useState } from 'react';
import { getUser } from './utilities/users-service';
import Authentication from './pages/Authentication/Authentication';
import InterestedProfile from './pages/InterestedProfile';

function App() {
  const [user, setUser] = useState(getUser());
  //getUser()
  
  return (
    <div className="Purrfect Post">
      {user?(
              <Router>
              <Navbar setUser={setUser}/><hr/>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/CreatePost" element={<CreatePost />}></Route>
                  <Route path="/Explore" element={<Explore />}></Route>
                  <Route path="/Profile" element={<Profile setUser={setUser}/>}></Route>
                  <Route path="/Settings" element={<Settings />}></Route>
                  <Route path="/interested-profile/:userId" element={<InterestedProfile/>}></Route>
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
