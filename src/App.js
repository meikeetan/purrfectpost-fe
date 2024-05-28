import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="Purrfect Post">
      <Navbar/>
      <Login/>
      <SignUp/>
      <Home/>
      <Profile/>
    </div>
  );
}

export default App;
