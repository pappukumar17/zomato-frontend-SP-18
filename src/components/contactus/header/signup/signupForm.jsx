import React from 'react';
import './signup.css'
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <>
            <form >
                <div className="mb-3">
                    <input type="text" className="form-control" id="contactFullName" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="signupEmail" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="contactSignupPassword" placeholder="Password" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="contactConfirmPassword" placeholder="Confirm Password" />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault contact" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree to Zomato's <Link className='checkbox-heading' to='/'> Terms of Service, Privacy Policy</Link> and <Link className='checkbox-heading' to='/'>Content Policies</Link>
                    </label>
                </div>
                <div className="d-grid gap-2">
                    <Link to="/signup"><button className="create-account" type="button">Create Account</button></Link>
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