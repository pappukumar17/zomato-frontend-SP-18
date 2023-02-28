import React from 'react';
import '../form/form.css'
import { Button, Form, Input, Select, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Option } = Select;

const ContactForm = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const [form] = Form.useForm();
    const onIssueChange = (value) => {
        switch (value) {
            case 'text':
                form.setFieldsValue({
                });
                break;
            default:
        }
    };

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        form.resetFields();
        try {
            const response = await axios.post('http://localhost:4000/customers/issues/create', values)
            console.log('response', response);
            console.log('response', response.data?.message)

            if (response.status === 201) {
                messageApi.success({
                    content: response.data?.message,
                    duration: 5
                })
                
                navigate("/contactus")
            }
        } catch (e) {
            console.log('e', e.response.data.message);
            messageApi.error({
                content: e.response?.data?.message || 'Something went wrong!',
                duration: 5
            });
        }
    };


    return (
        <Form
            name="normal_help"
            className="help-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            form={form}
        >
            {contextHolder}
            <Form.Item name="issue" rules={[{ required: true }]}>
                <Select
                    placeholder={<><p style={{ fontSize: "17px" }}>How can we help you?</p></>}
                    onChange={onIssueChange}
                    allowClear
                    listHeight={128}
                    size="large"
                    rules={[
                        {
                            required: true,
                            message: 'Please select one of the issue!',
                        },
                    ]}
                >
                    <Option value="How can we help you?" >How can we help you?</Option>
                    <Option value="I need help with my Zomato online order." >I need help with my Zomato online order.</Option>
                    <Option value="I found incorrect/outdated information on a page." >I found incorrect/outdated information on a page.</Option>
                    <Option value="There is a photo/review that is bothering me and I would like to report it." >There is a photo/review that is bothering me and I would like to report it.</Option>
                    <Option value="The website/app are not working the way they should." >The website/app are not working the way they should.</Option>
                    <Option value="I would like to give feedback/suggestions." >I would like to give feedback/suggestions.</Option>
                    <Option value="I need some help with my blog." >I need some help with my blog.</Option>
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            >
                {({ getFieldValue }) =>
                    getFieldValue('help') === 'text' ? (
                        <Form.Item name="customizeHelp" label="Customize help" rules={[{ required: true }]}>
                            <Input className='box' />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
            <Form.Item
                name="fullName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Full Name!',
                    },
                ]}
            >
                <Input placeholder="Full Name" className='box' />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email Address!',
                    },
                ]}
            >
                <Input placeholder="Email Address" className='box'/>
            </Form.Item>
            <Form.Item name="phone"
               rules={[
                    {
                        required: false,
                        message: 'Mobile Number is optional!',
                    },
                ]}>
                <Input placeholder="Mobile Number(optional)" className='box'/>
            </Form.Item>
            <Form.Item
                name="issueDescription"
                rules={[
                    {
                        required: true,
                        message: 'Please enter some text',
                    },
                ]}
            >
                <Input.TextArea showCount maxLength={100} size="large" placeholder="Type text" className='box-text-area' />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" >
                    Submit feedback
                </Button>
            </Form.Item>
        </Form>
    );
};
export default ContactForm;