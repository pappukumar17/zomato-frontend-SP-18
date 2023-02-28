import React, { useState } from 'react';
import './login.css'
import './responsive.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from "react-router-dom";


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LogIn = () => {

    const [messageApi, contextHolder] = message.useMessage();
    const [isModalOpen, setIsModalOpen] = useState(true);
    let navigate = useNavigate();
    const [form] = Form.useForm();

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (values) => {
        console.log('Success:', values);
        try {
            const response = await axios.post('http://localhost:4000/customers/login', values)
            console.log('response', response);
            
            const token = response.data.data.token;
            
            if (response.status === 200) {
                localStorage.setItem('token', token);
                navigate("/contactus")
            }
            messageApi.success({
                content: response.data?.message || "You have been successfully loggedin!",
                duration: 5
            });
            form.resetFields()
            handleOk()
            
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
                    autoComplete="on"
                    className='contact-login-form'

                    form={form}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: false,
                                message: 'Please enter your Email Address!',
                            },
                        ]}
                    >
                        <Input placeholder='Email' />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: false,
                                message: 'Please enter your Phone No.!',
                            },
                        ]}
                    >
                        <Input placeholder='Phone'/>
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
                        <Input.Password placeholder='Password'/>
                    </Form.Item>

                    <Form.Item
                        size="large"
                        wrapperCol={{
                            offset: 0,
                            span: 25,
                        }}
                    >
                        <Button type="primary" className='create-account' htmlType="submit" open={isModalOpen}>
                            Log In
                        </Button>
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