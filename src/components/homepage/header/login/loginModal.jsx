import React from 'react';
import Modal from '../common/modal';
import LogIn from './loginForm';

const LoginModal = () => {
    return (
        <Modal id={"login"} heading={"Log In"}>
            <LogIn />
        </Modal>
    );
};
export default LoginModal;