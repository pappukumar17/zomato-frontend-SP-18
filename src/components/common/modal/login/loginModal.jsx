import { Button, Modal, Form, Input, message, Divider, Typography } from 'antd';
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css'
import './responsive.css'

const LoginModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    // let navigate = useNavigate();

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        try {
            const response = await axios.post('http://localhost:4000/customers/login', values)
            console.log('response', response);

            const token = response.data.data.token;

            if (response.status === 200) {
                localStorage.setItem('token', token);
                messageApi.success({
                    content: response.data?.message || "You have been successfully loggedin!",
                    duration: 5
                });
                window.location.reload()
                form.resetFields()
                handleOk()
            }

        } catch (e) {
            console.log('e', e.response.data.message);
            messageApi.error({
                content: e.response?.data?.message || 'Something went wrong!',
                duration: 5
            });
        }
    };

    const validateEmailOrPhone = (_, newValue) => {
        const newFormValues = form.getFieldsValue();
        // console.log("_, values", _, newValue);
        if (_.field === 'email') {
            if (newValue) {
                form.resetFields(["phone"]);
            }
        } else if (_.field === 'phone') {
            if (newValue) {
                form.resetFields(["email"]);
            }
        }
        if (!newFormValues.email && !newFormValues.phone) {
            return Promise.reject('Please enter either a phone or an email');
        }
        return Promise.resolve();
    };

    return (
        <>
            <Button type="primary" onClick={showModal}
                style={props.login}
                size="large" className='login-span-mobile'>
                Login
            </Button>
            <Modal title="Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} className="modal-title" >
                <Divider type="horizontal" />
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
                                { type: "email", message: "Please enter a valid email!" },
                                { validator: validateEmailOrPhone },
                            ]}
                            style={{marginBottom:"0"}}
                        >
                            <Input placeholder='Email' />
                        </Form.Item>
                        {/* <Divider /> */}
                        <Typography.Title level={4} style={{ margin: 0, textAlign: "center", color: "#4f4f4f", padding:"10px 0px" }}>
                            OR
                        </Typography.Title>
                        {/* <Divider /> */}
                        <Form.Item
                            name="phone"
                            rules={[
                                { validator: validateEmailOrPhone }
                            ]}
                        >
                            <Input placeholder='Phone' type='number' />
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
                            <Input.Password placeholder='Password' />
                        </Form.Item>

                        <Form.Item
                            size="large"
                            wrapperCol={{
                                offset: 0,
                                span: 25,
                            }}
                        >
                            <Button type="primary" className='create-account' htmlType="submit" >
                                Log In
                            </Button>
                            <div className="checkbox-1">
                                <label type="text" className="already-login">New to Zomato?
                                    <Link to="/" className="login-button">Create Account</Link>
                                </label>
                            </div>
                        </Form.Item>
                    </Form>

                </div>
            </Modal>
        </>
    );
};
export default LoginModal;