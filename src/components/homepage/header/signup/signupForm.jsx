import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './signup.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    function doSignup() {
        axios.post("http://localhost:4000/customers/create", { crossdomain: true }).then(response => {
            console.log(response)
            setFullName(response.data.fullName);
            setEmail(response.data.email);
            setConfirmPassword(response.data.confirmPassword);
            setPassword(response.data.password);
        });
    }

    useEffect(() => {
        doSignup()
        // getValue()
    }, [])

    // const getValue = (e) => {
    //     setFullName(e.target.value)
    // }

    return (
        <>
            <form >
                <div className="mb-3">
                    <input type="text" className="form-control" id="fullName" onChange={(e)=>setFullName(e.target.value)} placeholder="Full Name" value={fullName} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" value={email} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="signuppassword" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" value={password} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="confirmpassword" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" value={confirmPassword} />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        I agree to Zomato's <a className='checkbox-heading' href='/'> Terms of Service, Privacy Policy</a> and <a className='checkbox-heading' href='/'>Content Policies</a>
                    </label>
                </div>
                <div className="d-grid gap-2">
                    <Link to="/signup"><button className="create-account" type="button" onClick={doSignup}>Create Account</button></Link>
                </div>
                <div className="form-check">
                    <label type="text" className="already">Already have an account? <Link to="/login" className="signup-button" tabindex="-1" role="button" aria-disabled="true">Log In</Link>
                    </label>
                </div>
            </form>

        </>
    );
};
export default SignUp;