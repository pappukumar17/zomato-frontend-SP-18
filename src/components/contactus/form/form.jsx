import React from 'react';
import '../form/form.css'
import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;

const ContactForm = () => {
    const [form] = Form.useForm();
    const onGenderChange = (value) => {
        switch (value) {
            case 'text':
                form.setFieldsValue({
                    note: 'Please enter some text to submit the feedback',
                });
                break;
            default:
        }
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };


    return (
        <Form
            name="normal_help"
            className="help-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item name="help" rules={[{ required: true }]}>
                <Select
                    placeholder={<><p style={{ fontSize: "17px" }}>How can we help you?</p></>}
                    onChange={onGenderChange}
                    allowClear
                    listHeight={128}
                    size="large"
                >
                    <Option value="text">How can we help you?</Option>
                    <Option value="text">I need help with my Zomato online order.</Option>
                    <Option value="text">I found incorrect/outdated information on a page.</Option>
                    <Option value="text">There is a photo/review that is bothering me and I would like to report it.</Option>
                    <Option value="text">The website/app are not working the way they should.</Option>
                    <Option value="text">I would like to give feedback/suggestions.</Option>
                    <Option value="text">I need some help with my blog.</Option>
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
                name="emailAddress"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email Address!',
                    },
                ]}
            >
                <Input placeholder="Email Address" className='box' />
            </Form.Item>
            <Form.Item name="mobileNumber">
                <Input placeholder="Mobile Number(optional)" className='box' />
            </Form.Item>
            <Form.Item
                name="helpText"
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
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Submit feedback
                </Button>
            </Form.Item>
        </Form>
    );
};
export default ContactForm;