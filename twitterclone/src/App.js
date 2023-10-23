import logo from './logo.svg';
import Nav from "./routes/nav/nav";
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./routes/dashboard/dashboard";
import Home from "./routes/home/home";
import Settings from "./routes/settings/settings";
import Explore from "./routes/explore/explore";

import Registration from "./routes/register/register";

import Profile from "./routes/profile/profile";
import {createContext, useContext, useEffect, useState} from "react";
import OtherProfile from "./routes/profile/profile.other";
import Quack from "./routes/quack/quack.profile";




export const UserContext = createContext();
function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        fetch("http://localhost:8080/user/getUser").then((response) =>{
            return response.json()
        }).then(data => {
            console.log(user)

            setUser(data)

        })
    }, [])


  return (
    <div className="App">

        <UserContext.Provider value={[user, setUser]}>
        <Routes>
                <Route index element={user ? <Dashboard/> : <Home/>} />
                <Route path="/dashboard" element={ user ? <Dashboard/> : <Home/>} />
                <Route path="/settings" element={ user ? <Settings/> : <Home/>} />
                <Route path="/explore" element={ user ? <Explore/> : <Home/>} />
                <Route path="/register" element={<Registration/>}/>
                <Route path="/profile" element={ user ? <Profile/> : <Home/>}/>
                <Route path={"/other-profile"} element={ user ? <OtherProfile/> : <Home/>}/>
                <Route path={"/quack"} element={user ? <Quack/> : <Home/> }/>

        </Routes>
        </UserContext.Provider>

    </div>
  );
}

export default App;
