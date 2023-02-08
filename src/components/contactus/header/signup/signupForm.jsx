import React from 'react';
import './signup.css'
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <>
            <form >
                <div className="mb-3">
                    <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        I agree to Zomato's <a className='checkbox-heading' href='/'> Terms of Service, Privacy Policy</a> and <a className='checkbox-heading' href='/'>Content Policies</a>
                    </label>
                </div>
                <div className="d-grid gap-2">
                    <Link to="/signup"><button className="create-account" type="button">Create Account</button></Link>
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