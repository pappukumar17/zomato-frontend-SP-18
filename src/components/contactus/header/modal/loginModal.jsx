import { Button, Modal, Form, Input, message, Divider} from 'antd';
import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css'


const LoginModal1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    let navigate = useNavigate();
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
            console.log('response', response.data?.message)

            if (response.status === 201) {
                messageApi.success({
                    content: response.data?.message,
                    duration: 5
                })
                navigate("/contactus")
            }
            form.resetFields();
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
            <Button type="primary" onClick={showModal}>
                Login
            </Button>
            <Modal title="Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} className="modal-title" >
            <Divider type="horizontal"/>
                {contextHolder}
                <div className="form-container">
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
                                    required: true,
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
                                    required: true,
                                    message: 'Please enter your Phone No.!',
                                },
                            ]}
                        >
                            <Input placeholder='Phone' />
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
                            <div className="checbox-1">
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
export default LoginModal1;