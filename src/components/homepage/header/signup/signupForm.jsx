import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'
import './responsive.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    const handleFullName = (event) => {
        setFullName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleConfrimPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const doSignup = async () => {

        await axios.post('http://localhost:4000/customers/create', {
            fullName: fullName,
            email: email,
            phone: phone,
            confirmPassword: confirmPassword,
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
            <form >
                <div className="mb-3">
                    <input type="text" className="form-control" id="fullName" onChange={handleFullName} placeholder="Full Name" value={fullName} required={true} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" onChange={handleEmail} placeholder="Email" value={email} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="phone" onChange={handlePhone} placeholder="Phone" value={phone} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="confirmpassword" onChange={handleConfrimPassword} placeholder="Confirm Password" value={confirmPassword} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="signuppassword" onChange={handlePassword} placeholder="Password" value={password} />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault homepage" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree to Zomato's <Link className='checkbox-heading' to='/'> Terms of Service, Privacy Policy</Link> and <Link className='checkbox-heading' to='/'>Content Policies</Link>
                    </label>
                </div>
                <div className="d-grid gap-2">
                    <Link to="/signup" ><button className="create-account" type="button" onClick={doSignup}>Create Account</button></Link>
                </div>
                <div className="form-check">
                    <label type="text" className="already">Already have an account? <Link to="/login" className="signup-button" tabIndex="-1" role="button" aria-disabled="true">Log In</Link>
                    </label>
                </div>
            </form>
        </>
    );
};

export default SignUp;