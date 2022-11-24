import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Layout/Header/Navbar';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>

    </Router>
     
    </div>
  );
}

export default App;
