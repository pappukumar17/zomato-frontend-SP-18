import React from "react";
import { Select, Divider } from 'antd';
import { GrLinkedin } from "react-icons/gr";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../footer/footer.css'
import '../footer/responsive.css'

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const Footer = () => (
    <>
        <footer className="footer">
            <div className="custom-container">
                <div className="main-container-1">
                    <div className="container-footer">
                        <div className="headings">
                            <section className="zomato-name">
                                <img src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"} alt="" />
                            </section>
                            <section className="select-cl">
                                <section className="select-country">
                                    <Select className="select-country-name"
                                        defaultValue="India"
                                        style={{

                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'jack',
                                                label: 'Jack',
                                            },
                                            {
                                                value: 'lucy',
                                                label: 'Lucy',
                                            },
                                            {
                                                value: 'disabled',
                                                disabled: true,
                                                label: 'Disabled',
                                            },
                                            {
                                                value: 'Yiminghe',
                                                label: 'yiminghe',
                                            },
                                        ]}
                                    />
                                </section>
                                <section className="select-language">
                                    <Select
                                        defaultValue="English"
                                        style={{
                                            width: 90,
                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'jack',
                                                label: 'Jack',
                                            },
                                            {
                                                value: 'lucy',
                                                label: 'Lucy',
                                            },
                                            {
                                                value: 'disabled',
                                                disabled: true,
                                                label: 'Disabled',
                                            },
                                            {
                                                value: 'Yiminghe',
                                                label: 'yiminghe',
                                            },
                                        ]}
                                    />
                                </section>
                            </section>
                        </div>
                        <div className="information">
                            <section className="about-zomato">
                                <h6 className="footer-heading">ABOUT ZOMATO</h6>
                                <Link to="/" className="footer-content">Who We Are</Link>
                                <Link to="/navbar" className="footer-content">Work With Us</Link>
                                <Link to="/contactus" className="footer-content">Contact Us</Link>
                            </section>
                            <section className="zomaverse">
                                <h6 className="footer-heading">ZOMAVERSE</h6>
                                <Link to="/" className="footer-content">Zomato</Link>
                                <Link to="/" className="footer-content">Blinkit</Link>
                            </section>
                            <section className="places">
                                <section className="restaurants">
                                    <h6 className="footer-heading">FOR RESTAURANTS</h6>
                                    <Link to="/" className="footer-content">Partner With Us</Link>
                                    <Link to="/" className="footer-content">Apps For You</Link>
                                </section>
                                <section className="enterprises">
                                    <h6 className="footer-heading">FOR ENTERPRISES</h6>
                                    <Link to="/" className="footer-content">Zomato For Work</Link>
                                </section>
                            </section>
                            <section className="learn-more">
                                <h6 className="footer-heading">LEARN MORE</h6>
                                <Link to="/" className="footer-content">Privacy</Link>
                                <Link to="/" className="footer-content">Security</Link>
                                <Link to="/" className="footer-content">Terms</Link>
                                <Link to="/" className="footer-content">Sitemap</Link>
                            </section>
                            <section className="social-links">
                                <h6 className="footer-heading">SOCIAL LINKS</h6>
                                <div className="main-links">
                                    <section className="links">
                                        <Link to="/" className="footer-link"><GrLinkedin size={25} style={{ color: "black", borderradius: "20px" }} /></Link>
                                        <Link to="/" className="footer-link"><AiFillInstagram size={30} color="black" /></Link>
                                        <Link to="/" className="footer-link"><AiFillTwitterCircle size={30} color="black" /></Link>
                                        <Link to="/" className="footer-link"><TiSocialYoutubeCircular size={33} color="black" /></Link>
                                        <Link to="/" className="footer-link"><BsFacebook size={25} color="black" /></Link>
                                    </section>
                                </div>
                                <div className="image-store">
                                    <div className="download-link-2">
                                        <div className="android-2">
                                            <Link to="https://play.google.com/store/apps/details?id=com..application.zomato&_branch_match_id=1144157600425835932&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3STcxLKcrPTAEABp6kzyEAAAA%3D">
                                                <img className="android-image" src={"https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"} alt="" />
                                            </Link>
                                        </div>
                                        <div className="ios-2">
                                            <Link to="https://play.google.com/store/apps/details?id=com..application.zomato&_branch_match_id=1144157600425835932&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3STcxLKcrPTAEABp6kzyEAAAA%3D" target="_blank"><img className="ios-image" src={"https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <Divider />
                        <p className="footer-para">
                            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="main-container-2">
                    <div className="main-container-3">
                        <div className="mobile-container-footer">
                            <section className="mobile-zomato-name">
                                <img src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"} alt="" />
                            </section>
                            <section className="mobile-input">
                                <section className="mobile-select-country">
                                    <Select className="select-country-name"
                                        defaultValue="India"
                                        style={{

                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'jack',
                                                label: 'Jack',
                                            },
                                            {
                                                value: 'lucy',
                                                label: 'Lucy',
                                            },
                                            {
                                                value: 'disabled',
                                                disabled: true,
                                                label: 'Disabled',
                                            },
                                            {
                                                value: 'Yiminghe',
                                                label: 'yiminghe',
                                            },
                                        ]}
                                    />
                                </section>
                                <section className="mobile-select-language">
                                    <Select
                                        defaultValue="English"
                                        style={{
                                            width: 120,
                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'jack',
                                                label: 'Jack',
                                            },
                                            {
                                                value: 'lucy',
                                                label: 'Lucy',
                                            },
                                            {
                                                value: 'disabled',
                                                disabled: true,
                                                label: 'Disabled',
                                            },
                                            {
                                                value: 'Yiminghe',
                                                label: 'yiminghe',
                                            },
                                        ]}
                                    />
                                </section>
                            </section>
                        </div>
                        <div className="mobile-information">
                            <section className="mobile-about-zomato">
                                <h6 className="mobile-footer-heading">ABOUT ZOMATO</h6>
                                <Link to="/" className="mobile-footer-content">Who We Are</Link>
                                <Link to="/" className="mobile-footer-content">Work With Us</Link>
                                <Link to="/" className="mobile-footer-content">Contact Us</Link>
                            </section>
                            <section className="mobile-zomaverse">
                                <h6 className="mobile-footer-heading">ZOMAVERSE</h6>
                                <Link to="/" className="mobile-footer-content">Zomato</Link>
                                <Link to="/" className="mobile-footer-content">Blinkit</Link>
                            </section>
                        </div>
                        <div className="mobile-information">
                            <section className="mobile-places">
                                <section className="mobile-restaurants">
                                    <h6 className="mobile-footer-heading">FOR RESTAURANTS</h6>
                                    <Link to="/" className="mobile-footer-content">Partner With Us</Link>
                                    <Link to="/" className="mobile-footer-content">Apps For You</Link>
                                </section>
                                <section className="mobile-enterprises">
                                    <h6 className="mobile-footer-heading">FOR ENTERPRISES</h6>
                                    <Link to="/" className="mobile-footer-content">Zomato For Work</Link>
                                </section>
                            </section>
                            <section className="mobile-learn-more">
                                <h6 className="mobile-footer-heading">LEARN MORE</h6>
                                <Link to="/" className="mobile-footer-content">Privacy</Link>
                                <Link to="/" className="mobile-footer-content">Security</Link>
                                <Link to="/" className="mobile-footer-content">Terms</Link>
                                <Link to="/" className="mobile-footer-content">Sitemap</Link>
                            </section>
                        </div>
                        <div className="mobile-information">
                            <section className="mobile-social-links">
                                <h6 className="mobile-footer-heading">SOCIAL LINKS</h6>
                                <section className="mobile-links">
                                    <Link to="/" className="mobile-footer-link"><GrLinkedin size={25} style={{ color: "black", borderradius: "20px" }} /></Link>
                                    <Link to="/" className="mobile-footer-link"><AiFillInstagram size={30} color="black" /></Link>
                                    <Link to="/" className="mobile-footer-link"><AiFillTwitterCircle size={30} color="black" /></Link>
                                    <Link to="/" className="mobile-footer-link"><TiSocialYoutubeCircular size={33} color="black" /></Link>
                                    <Link to="/" className="mobile-footer-link"><BsFacebook size={25} color="black" /></Link>
                                </section>
                                <div className="mobile-download-link-2">
                                    <div className="mobile-android-2">
                                        <Link to="https://play.google.com/store/apps/details?id=com..application.zomato&_branch_match_id=1144157600425835932&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3STcxLKcrPTAEABp6kzyEAAAA%3D">
                                            <img className="mobile-android-image" src={"https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"} alt="" />
                                        </Link>
                                    </div>
                                    <div className="mobile-ios-2">
                                        <Link to="https://play.google.com/store/apps/details?id=com..application.zomato&_branch_match_id=1144157600425835932&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3STcxLKcrPTAEABp6kzyEAAAA%3D" target="_blank"><img className="mobile-ios-image" src={"https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="mobile-footer-bottom">
                            <Divider />
                            <p className="footer-para">
                                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    </>
);

export default Footer