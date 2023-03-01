import React, { useState, useEffect } from "react";
import './header.css'
import './responsive.css'
import '../../../index.css'
import { NavLink } from 'react-router-dom';
import { Divider, message } from 'antd';
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoginModal from "../../common/modal/login/loginModal";
import SignupModal from "../../common/modal/signup/signupModal";


export default function Header() {
    const [showNavbar, setShowNavbar] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    let navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useState("");

    useEffect(() => {
        const loggUser = localStorage.getItem("token");
        setLoggedInUser(loggUser)

    }, []);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const searchHandle = async (event) => {
        await fetch(`http://localhost:4000/customers/menu`)
    }

    const handleLogout = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                messageApi.success({
                    content: "Please login first!",
                    duration: 5
                });
            } else {
                const api = axios.create({
                    baseURL: 'http://localhost:4000/customers',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                await api.post('/logout');
                localStorage.removeItem('token');
                messageApi.success({
                    content: e.response?.data?.message || "You have been successfully logged Out!",
                    duration: 5
                });
                navigate(0)
            }

        } catch (e) {
            // console.log('e', e.response.data.message);
            messageApi.error({
                content: e.response?.data?.message || 'Something went wrong!',
                duration: 5
            });
        }
    };

    return (
        <div className='header-bg'>
            {contextHolder}
            <div className="custom-container">
                <header className='homepage-header-1'>
                    <div className="homepage-menu-icon" onClick={handleShowNavbar}>
                        <FaBars color="white" size={20} className='contact-menu-icon-bs' />
                    </div>
                    <ul className="app-logo-section">
                        <li>
                            <NavLink className={"app-logo-name"}><MdOutlineAppSettingsAlt /> Get the app</NavLink>
                        </li>
                    </ul>
                    <ul className={`navbar-elements ${showNavbar && 'mbl_nav'}`}>
                        <li className='homepage-li-1'>
                            <NavLink>
                                <div className="homepage-menu-icon" onClick={handleShowNavbar}>
                                    <AiOutlineClose color="black" size={22} className='menu-icon-bs' />
                                </div>
                            </NavLink>
                        </li>
                        <li className='homepage-li-2'>
                            <NavLink>
                                <img className='homepage-navlink-image-2' src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"} alt="hello" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"navbar-element"} to="/signup">Add restaurant</NavLink>
                        </li>
                        <li className="login-elements">
                            {
                                loggedInUser ? <NavLink className={"navbar-element"} onClick={handleLogout}>Logout</NavLink> :
                                    <>
                                        <ul className="homepage-login-elements-ul">
                                            <li className="homepage-login-elements-ul-1">
                                                <LoginModal login={{
                                                    margin: 0,
                                                    textAlign: "center",
                                                    backgroundColor: "transparent",
                                                    borderbottom: "none",
                                                    letterSpacing: "0.08em",

                                                }} />
                                            </li>
                                            <li className="contact-login-elements-ul-2">
                                                <SignupModal signup={{
                                                    margin: 0,
                                                    textAlign: "center",
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    letterSpacing: "0.08em"
                                                }}  />
                                            </li>
                                        </ul>
                                    </>
                            }

                        </li>
                    </ul>
                </header>
            </div>
            <div className="custom-container">
                <div className="top-section">
                    <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="zomato-logo" className="zomato-image" />
                    <p className="zomato-image-text">Discover the best food & drinks in Delhi NCR</p>
                    <div className="search">
                        <div className="search-item-1">
                            <HiLocationMarker size={30} color="rgb(255, 126, 139)" className='zomato-location-mark' />
                            <p className="search-para">
                                <select name="membership" id="membership" className='search-option'>
                                    <option value="silver">Spark Eighteen, New Delhi</option>
                                </select>
                            </p>
                        </div>
                        <Divider type="vertical" style={{
                            border: "1px solid grey"
                        }} />
                        <div className="search-item-2">
                            <BsSearch size={20} className="location-marker" />
                            <input type="text" placeholder="Search for restaurant, cuisine or a dish" className='search-para-2' onChange={searchHandle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
