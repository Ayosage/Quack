import logo from './logo.svg';
import Nav from "./routes/nav/nav";
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./routes/dashboard/dashboard";
import Home from "./routes/home/home";
import Settings from "./routes/settings/settings";
import Explore from "./routes/explore/explore";

import Registration from "./routes/Register/register";


function App() {
  return (
    <div className="App">
        <Routes>

                <Route index element={<Home />} />
                <Route path="/profile" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/register" element={<Registration/>}/>

        </Routes>
    </div>
  );
}

export default App;
