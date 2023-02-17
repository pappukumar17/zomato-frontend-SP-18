import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'
import './responsive.css'
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input, message } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const SignUp = () => {
    const [messageApi, contextHolder] = message.useMessage();
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

        try {
            const resp = await axios.post('http://localhost:4000/customers/create', {
                fullName: fullName,
                email: email,
                phone: phone,
                confirmPassword: confirmPassword,
                password: password
            })
            console.log('resp', resp);
            messageApi.success({
                content: resp.response?.data?.message || "You have been registered successfully!",
                duration: 10
            });
        } catch (e) {
            console.log('e', e.response.data.message);
            messageApi.error({
                content: e.response?.data?.message || 'Something went wrong!',
                duration: 10
            });
        }
    }

    return (
        <>
            <div className="form-container">
                {contextHolder}
                <Form
                    name="signup-form"
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
                    className='signup-form'
                >
                    <Form.Item
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter a correct fullName!',
                            },
                        ]}
                    >
                        <Input placeholder='Full Name' onChange={handleFullName} />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
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
                                required: true,
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
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter confirm Password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Confirm Password' onChange={handleConfrimPassword} />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 0,
                            span: 25,
                        }}
                    >
                        <Checkbox> I agree to Zomato's <Link className='checkbox-heading' to='/'> Terms of Service, Privacy Policy</Link> and <Link className='checkbox-heading' to='/'>Content Policies</Link></Checkbox>
                    </Form.Item>

                    <Form.Item
                        size="large"
                        wrapperCol={{
                            offset: 0,
                            span: 25,
                        }}
                    >
                        <Button type="primary" className='create-account' htmlType="submit" onClick={doSignup}>
                            Create Account
                        </Button>
                        <div className="form-check-1">
                            <label type="text" className="already">Already have an account? <Link to="/login" className="signup-button" tabIndex="-1" role="button" aria-disabled="true">Log In</Link>
                            </label>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default SignUp;