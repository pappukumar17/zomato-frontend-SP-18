import React, { useState, useEffect, Fragment } from "react";
import './header.css'
import './responsive.css'
import '../../../index.css'
import { NavLink } from 'react-router-dom';
import { Divider, message, Card } from 'antd';
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoginModal from "../../common/modal/login/loginModal";
import SignupModal from "../../common/modal/signup/signupModal";
import debounce from 'lodash.debounce';
import jwt from 'jwt-decode'


export default function Header() {
    const [showNavbar, setShowNavbar] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    const [loggedInUser, setLoggedInUser] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const loggUser = localStorage.getItem("token");
        setLoggedInUser(loggUser);
    }, []);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    function decodeJwt(token) {
        try {
            const decoded = jwt.decode(token);
            return decoded;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const handleSearch = debounce((newValue) => {
        if (newValue) {
            axios.get(`http://localhost:4000/customers/menu?itemName=${newValue}`)
                .then(response => {
                    console.log(response)
                    setSearchResults(response.data?.data || []);
                })
                .catch(error => {
                    console.log("e", error)
                });
        } else {
            setSearchResults([]);
        }
    }, 800);

    const handleLogout = async (e) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                messageApi.success({
                    content: "You have been successfully logged Out!",
                    duration: 5
                });
                navigate(0)
            } else {
                console.log(e)
                const api = axios.create({
                    baseURL: 'http://localhost:4000/customers',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                await api.post('/logout');
                const token = localStorage.removeItem('token');
                const decodedData = decodeJwt(token);
                console.log(decodedData);

                messageApi.success({
                    content: e.response?.data?.message || "You have been successfully logged Out!",
                    duration: 5
                });
                navigate(0)
            }

        } catch (e) {
            messageApi.success({
                content: "You have been successfully logged Out!",
                duration: 5
            });
            navigate(0)
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
                            <NavLink to="https://bnc.lt/download-z-android" target="_blank" className={"app-logo-name"}><MdOutlineAppSettingsAlt /> Get the app</NavLink>
                        </li>
                    </ul>
                    <ul className={`navbar-elements ${showNavbar && 'mbl_nav'}`}>
                        <li className='homepage-li-1'>
                            <NavLink>
                                <div className="homepage-menu-icon-1" onClick={handleShowNavbar}>
                                    <AiOutlineClose color="black" size={22} className='menu-icon-bs' />
                                </div>
                            </NavLink>
                        </li>
                        <li className='homepage-li-2'>
                            <NavLink>
                                <img className='homepage-navlink-image-2' src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"} alt="hello" />
                            </NavLink>
                        </li>
                        <li className="navbar-element-res">
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
                                            <li className="homepage-login-elements-ul-2">
                                                <SignupModal signup={{
                                                    margin: 0,
                                                    textAlign: "center",
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    letterSpacing: "0.08em"
                                                }} className="login-span"/>
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
                            <input type="text" placeholder="Search for restaurant, cuisine or a dish" className='search-para-2'
                                value={searchTerm}
                                onChange={(event) => {
                                    setSearchTerm(event.target.value);
                                    handleSearch(event.target.value);
                                }}
                            />

                        </div>
                    </div>
                    <ul>
                        {
                            Array.isArray(searchResults) && searchResults.map(object => (
                                <Fragment key={object.id}>
                                    <Card
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "left",
                                            alignItems:"center"
                                        }}
                                    >
                                        <p>{object.categoryName}</p>
                                        <p>{object.itemName}</p>
                                        <p>{object.itemDescription}</p>
                                    </Card>
                                </Fragment>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}
