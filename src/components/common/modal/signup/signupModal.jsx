import { Button, Modal, Form, Input, message, Divider, Checkbox } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './signup.css'
import './responsive.css'


const SignupModal = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

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
            const response = await axios.post('http://localhost:4000/customers/create', values)
            console.log('response', response);
            console.log('response', response.data?.message)

            if (response.status === 201) {
                messageApi.success({
                    content: response.data?.message,
                    duration: 5
                })
            }
            handleOk()
        } catch (e) {
            console.log('e', e.response.data.message);
            messageApi.error({
                content: e.response?.data?.message || 'Something went wrong!',
                duration: 5
            });
        }
    };

    return (
        <>
            <Button type="primary" onClick={showModal}
                style={props.signup}
                size="large" className='signup-span-mobile'>
                Signup
            </Button>
            <Modal title="Signup" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} className="modal-title" >
                <Divider type="horizontal" />
                {contextHolder}
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
                            name="fullName"
                            rules={[
                                { required: true, message: 'Please enter your fullName!' },
                            ]}
                        >
                            <Input placeholder='Full Name' />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                { type: "email", required: "true", message: "Please enter a valid email!" },
                            ]}
                        >
                            <Input placeholder='Email' type='email' />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[
                                { required: true, message: 'Please enter a valid phoneNo.!' },
                            ]}
                        >
                            <Input placeholder='Phone' type='number' />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: 'Please enter your password!' },
                            ]}
                        >
                            <Input.Password placeholder='Password' />
                        </Form.Item>
                        <Form.Item
                            name="confirmPassword"
                            rules={[
                                { required: true, message: 'Please enter confirm Password!' },
                            ]}
                        >
                            <Input.Password placeholder='Confirm Password' />
                        </Form.Item>

                        <Form.Item
                            name="myCheckbox"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 0,
                                span: 25,
                            }}
                            rules={[
                                {
                                    validator: async (_, checked) => {
                                        if (!checked) {
                                            return Promise.reject(
                                                new Error("Please accept our terms and conditions to register succesfully"),
                                            );
                                        }
                                    },
                                }
                            ]}
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
                            <Button type="primary" className='create-account' htmlType="submit">
                                Create Account
                            </Button>
                            <div className="checkbox-1">
                                <label type="text" className="already">Already have an account? <Link to="/" className="signup-button">Log In</Link>
                                </label>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
};
export default SignupModal;