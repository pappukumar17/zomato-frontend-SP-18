import React, { useState, useEffect } from "react";
import { HiLocationMarker } from "react-icons/hi";
// import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { message } from 'antd';
import './header.css'
import './responsive.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoginModal from "../../common/modal/login/loginModal";
import SignupModal from "../../common/modal/signup/signupModal";


const Header1 = () => {
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
            console.log('e', e.response.data.message);
            messageApi.error({
                content: e.response?.data?.message || 'Something went wrong!',
                duration: 5
            });
        }
    };

    return (
        <>
            <header className='main-header'>
                {contextHolder}
                <div className="custom-container">
                    <div className="main-navbar">
                        <div className="contact-menu-icon" onClick={handleShowNavbar}>
                            <FaBars color="black" size={20} className='contact-menu-icon-bs' />
                        </div>
                        <ul className='contact-app-heading'>
                            <NavLink>
                                <img className='contact-navlink-image-1' src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"} alt="hello" />
                            </NavLink>
                        </ul>
                        <ul className="contact-search">
                            <div className="contact-search-item-1">
                                <HiLocationMarker size={25} color="rgb(255, 126, 139)" />
                                <p className="contact-search-para">
                                    <select name="membership" id="membership" className='contact-search-option'>
                                        <option value="silver">Spark Eighteen, New Delhi</option>
                                    </select></p>
                            </div>
                            <div className="contact-search-item-2">
                                <BsSearch size={20} className="location-marker" />
                                <input type="text" placeholder="Search for restaurant, cuisine or a dish" className='contact-search-para-2' onChange={searchHandle} />
                            </div>
                        </ul>
                        <ul className={`contact-nav-elements  ${showNavbar && 'Active'}`}>
                            <li className='contact-li-1'>
                                <NavLink>
                                    <div className="contact-menu-icon" onClick={handleShowNavbar}>
                                        <AiOutlineClose color="black" size={22} className='menu-icon-bs' />
                                    </div>
                                </NavLink>
                            </li>
                            <li className='contact-li-2'>
                                <NavLink>
                                    <img className='contact-navlink-image-2' src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"} alt="hello" />
                                </NavLink>
                            </li>
                            <li className="login-elements">
                                {
                                    loggedInUser ? <NavLink className={"navbar-element"} onClick={handleLogout}>Logout</NavLink> :
                                        <>
                                            <ul className="contact-login-elements-ul">
                                                <li className="contact-login-elements-ul-1">
                                                    <LoginModal login={{
                                                        margin: 0,
                                                        textAlign: "center",
                                                        backgroundColor: "transparent",
                                                        border: "1px solid #4f4f4f",
                                                        color: "#4f4f4f",
                                                        letterSpacing: "0.08em"
                                                    }} />
                                                </li>
                                                <li className="contact-login-elements-ul-2">
                                                    <SignupModal signup={{
                                                        margin: 0,
                                                        textAlign: "center",
                                                        backgroundColor: "transparent",
                                                        border: "1px solid #4f4f4f",
                                                        color: "#4f4f4f",
                                                        letterSpacing: "0.08em",
                                                    }} />
                                                </li>
                                            </ul>
                                        </>
                                }

                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>

    );
}
export default Header1;


