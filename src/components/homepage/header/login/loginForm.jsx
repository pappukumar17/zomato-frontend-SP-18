import React, { useState } from 'react';
import './login.css'
import './responsive.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from "react-router-dom";

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LogIn = (props) => {
    const [messageApi, contextHolder] = message.useMessage();

    // const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const handleEmail = (event) => {
        // setEmail(event.target.value)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const doLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:4000/customers/login', {
                // email: email,
                phone: phone,
                password: password
            })
            console.log('response', response);
            messageApi.success({
                content: response.data?.message || "You have been successfully loggedin!",
                duration: 5
            });

            const token = response.data.data.token;
            localStorage.setItem('token', token);
            navigate(0)
            
        } catch (e) {
            console.log('e', e.response.data.message);
            messageApi.error({
                content: e.response?.data?.message || 'Something went wrong!',
                duration: 5
            });
        }
    }

    return (
        <>
            <div className="form-container">
                {contextHolder}
                <Form
                    name="homepage-login-form"
                    size="large"

                    wrapperCol={{
                        span: 25,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className='login-form'
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: false,
                                message: 'Please enter a correct email!',
                            },
                        ]}
                    >
                        <Input placeholder='Email' onChange={handleEmail} />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: false,
                                message: 'Please enter a correct phoneNo.!',
                            },
                        ]}
                    >
                        <Input placeholder='Phone' onChange={handlePhone} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Password' onChange={handlePassword} />
                    </Form.Item>

                    <Form.Item
                        size="large"
                        wrapperCol={{
                            offset: 0,
                            span: 25,
                        }}
                    >
                        <Link to="/">
                            <Button type="primary" className='create-account' htmlType="submit" data-bs-dismiss="modal" onClick={doLogin}>
                                Log In
                            </Button>
                        </Link>
                        <div className="form-check-1">
                            <label type="text" className="already-login">New to Zomato?
                                <Link className="login-button" tabIndex="-1" role="button" aria-disabled="true">Create Account</Link>
                            </label>
                        </div>
                    </Form.Item>
                </Form>
            </div>

        </>
    );
};

export default LogIn;