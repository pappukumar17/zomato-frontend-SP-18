import React, { useState } from 'react';
import './login.css'
import './responsive.css'
import { Link } from "react-router-dom";
import axios from 'axios';



const LogIn = () => {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");


    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const doLogin = async () => {

        await axios.post('http://localhost:4000/customers/login', {
            email: email,
            phone: phone,
            password: password
        })
            .then(result => {
                console.log(result.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <form method='POST' className='modal-form' >
                <div className="mb-2">
                    <input type="text" className="form-control" htmlFor="contact" id="loginemail" onChange={handleEmail} placeholder="Email" />
                </div>
                <p className="lead text-center">
                    OR
                </p>
                <div className="mb-3 mt-2">
                    <input type="text" className="form-control" htmlFor="contact" id="loginphone" onChange={handlePhone} placeholder="Phone" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" htmlFor="password" id="loginpassword" onChange={handlePassword} placeholder="Password" />
                </div>
                <div className="d-grid gap-2">
                    <Link to="/signup"><button className="login-account" type="button" onClick={doLogin}>Log In</button></Link>
                </div>
                <div className="form-check">
                    <label type="text" className="already-login">New to Zomato?
                        <Link className="login-button" tabIndex="-1" role="button" aria-disabled="true">Create Account</Link>
                    </label>
                </div>
            </form>

        </>
    );
};
export default LogIn;