import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './signup.css'
import './responsive.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    function doSignup() {

        axios.post('http://localhost:4000/customers/create')
            .then(response => {
                setFullName(response.data.fullName);
                setEmail(response.data.email);
                setConfirmPassword(response.data.confirmPassword);
                setPassword(response.data.password);
            })
            .catch(error => {
                if (error.response) {
                    // console.log(error.response);
                }
            });
    }

    useEffect(() => {
        doSignup()
    }, [])

    return (
        <>
            <form >
                <div className="mb-3">
                    <input type="text" className="form-control" htmlFor="fullName" id="fullName" onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" value={fullName} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" htmlFor="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={email} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" htmlFor="password" id="signuppassword" onChange={(e) => setPassword(e.target.value)} placeholder="Password" value={password} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" htmlFor="confirmpassword" id="confirmpassword" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" value={confirmPassword} />
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