import React from 'react';
import SignUp from './signupForm';
import Modal from '../common/modal';


const SignUpModal = () => {
    return (
        <Modal id={"signup"} heading={"Sign Up"}>
            <SignUp />
        </Modal>
    );
};

export default SignUpModal;