import logo from './logo.svg';
import Nav from "./routes/nav/nav";
import './App.css';
import Form from "./component/form/login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./routes/profile/profile";
import Home from "./routes/home/home";
import Settings from "./routes/settings/settings";
import Explore from "./routes/explore/explore";
import Register from "./component/form/register";


function App() {
  return (
    <div className="App">
        <Routes>

                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/register" element={<Register/>}/>

        </Routes>
    </div>
  );
}

export default App;
