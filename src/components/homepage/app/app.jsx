import React from 'react';
import { Radio, Input, Button } from 'antd';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../app/app.css'
import '../app/responsive.css'

function ZomatoApp() {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <>
            <div className="app-bg">
                <div className="custom-container">
                    <div className="main-1">
                        <div className="left-part">
                            <img src={"https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png"} className="left-part-image" alt="" />
                        </div>
                        <div className="right-part">
                            <h1 className="zomato-heading">Get the Zomato app</h1>
                            <p className="zomato-paragraph">We will send you a link, open it on your phone to download the app</p>
                            <div className="contact">
                                <div className="email"><Radio.Group onChange={onChange} value={value}>
                                    <Radio value={1} className="radio-email">Email</Radio>
                                </Radio.Group></div>
                                <div className="phone"><Radio.Group onChange={onChange} value={value} size="large">
                                    <Radio value={0} className="radio-phone">Phone</Radio>
                                </Radio.Group></div>
                            </div>
                            <div className="contact-1">
                                <div className="email-1"><Input placeholder="Email" style={{ color: 'white', width: '105%', fontSize: '20px' }} /></div>
                                <div className="email-2"><Button type="message" style={{ backgroundColor: ' rgb(241, 79, 98)', color: 'white', width: '60%', fontSize: '17px', fontWeight: '400' }}>Share</Button></div>
                            </div>
                            <p className="download-app">Download app from</p>
                            <div className="download-link-1">
                                <div className="android">
                                    <Link to="https://bnc.lt/download-z-android" target="_blank">
                                        <img className="android-image-1" src={"https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"} alt="" />
                                    </Link>
                                </div>
                                <div className="ios">
                                    <Link to="https://bnc.lt/download-zomato-ios" target="_blank">
                                        <img className="ios-image-1" src={"https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"} alt="" />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ZomatoApp