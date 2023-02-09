import React from 'react';
import './login.css'
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <>
            <form method='POST' className='modal-form' >
                <div className="mb-3">
                    <input type="text" className="form-control" id="contact" placeholder="Phone / Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="email" placeholder="Password" />
                </div>
                <div className="d-grid gap-2">
                    <Link to="/login"><button className="login-account" type="button">Log In</button></Link>
                </div>
                <div className="form-check">
                    <Link to="/login"> <label type="text" className="already-login">New to Zomato? <Link className="login-button" tabindex="-1" role="button" aria-disabled="true">Create Account</Link>
                    </label></Link>
                </div>
            </form>

        </>
    );
};
export default LogIn;