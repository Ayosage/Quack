import logo from "../../logo.svg";
import {Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {Menu, MenuItem} from "./menuNav.styles";
import {CgProfile} from "react-icons/cg";
import {AiOutlineCompass} from "react-icons/ai";
import {FaCog} from "react-icons/fa";
import {MdOutlineAccountBalance} from "react-icons/md";
import {GiPlasticDuck} from "react-icons/gi";
import {UserContext} from "../../App";
import TweetFloat from "../../component/float/TweetFloat";


function MenuNav() {
    const [user, setUser] =useContext(UserContext)
    const handleClick = () => {

        fetch("http://localhost:8080/user/logout")
            .then(() =>{
                setUser(null)
            })

    }

    return (
        <Fragment>
            <Menu>

                <div className="item-container">
                    <MenuItem to="/dashboard"> <MdOutlineAccountBalance/><span>Home</span> </MenuItem>
                </div>
                <div className="item-container">
                    <MenuItem to="/profile">  <CgProfile/> <span>Profile</span></MenuItem>
                </div>

                <div className="item-container">
                    <MenuItem to="/explore">  <AiOutlineCompass/><span>Explore</span></MenuItem>
                </div>

                <div className="item-container">
                    <MenuItem to="/settings"> <FaCog/><span>Settings</span>  </MenuItem>
                </div>



                <div className="item-container">
                    <MenuItem to="/" onClick={handleClick}>  <GiPlasticDuck/><span>Logout</span></MenuItem>
                </div>


                <TweetFloat/>
            </Menu>

        </Fragment>
    );
}

export default MenuNav;