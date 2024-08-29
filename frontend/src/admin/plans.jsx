import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Input, InputNumber, Card, Row, Col, Select, message, Tag } from 'antd';
import AdminLayout from './layout';
import { callMainApi } from '../utils';
import { DeleteOutlined } from '@ant-design/icons';
const { Option } = Select;

const AdminPlans = () => {
  const [plans, setPlans] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [duration, setDuration] = useState({ value: 0, unit: 'days' });
  const [features, setFeatures] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await callMainApi('/admin/plans/');
      response.data && setPlans(response.data);
      console.log(response)
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = async (values) => {
    const { value, unit } = duration;
    let durationString;

    switch (unit) {
      case 'years':
        durationString = `${value} year${value > 1 ? 's' : ''}`;
        break;
      case 'months':
        durationString = `${value} month${value > 1 ? 's' : ''}`;
        break;
      case 'days':
        durationString = `${value} day${value > 1 ? 's' : ''}`;
        break;
      default:
        durationString = '0 days';
    }
    const _features = JSON.stringify(features)
    const planData = {
      ...values,
      duration: durationString,
      features,
    };

    console.log(planData);
    
    const response = await callMainApi('/admin/plans/', {
      // console.log(response)
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(planData)
    });
    console.log(response)

    if (!response.data) {
      message.error(response.error)
      return ;
    }

    fetchPlans();
    setIsModalVisible(false);
    form.resetFields();
    setFeatures([]);
  };

  const handleDelete = async (id) => {
    try {
      await callMainApi(`/admin/plans/${id}/`, { method: 'DELETE' });
      message.success('Success');
      fetchPlans();
    } catch (error) {
      console.error('Error deleting plan:', error);
      message.error('Error deleting plan');
    }
  };

  const handleDurationChange = (value) => {
    setDuration((prev) => ({ ...prev, value }));
  };

  const handleUnitChange = (unit) => {
    setDuration((prev) => ({ ...prev, unit }));
  };

  const displayDuration = `${duration.value} ${duration.unit}${duration.value > 1 ? 's' : ''}`;

  const handleFeatureInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddFeature = () => {
    if (inputValue && !features.includes(inputValue)) {
      setFeatures([...features, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveFeature = (feature) => {
    setFeatures(features.filter((item) => item !== feature));
  };

  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Plans</h1>
        <Button type="primary" onClick={showModal}>
          Add Plan
        </Button>
        <Modal
          title="Add Plan"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width="90%"
          style={{ maxWidth: 600 }}
        >
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input the plan name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="pir"
              label="Percentage Return Rate"
            >
              <InputNumber min={0} className="w-full" />
            </Form.Item>

            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: 'Please input the plan price!' }]}
            >
              <InputNumber min={0} className="w-full" />
            </Form.Item>
            
            <Form.Item label="Duration" required>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <InputNumber
                  min={0}
                  placeholder="Number"
                  onChange={handleDurationChange}
                  className="mb-2 md:mb-0"
                />
                <Select
                  defaultValue="days"
                  style={{ width: 120 }}
                  onChange={handleUnitChange}
                >
                  <Option value="days">Days</Option>
                  <Option value="months">Months</Option>
                  <Option value="years">Years</Option>
                </Select>
              </div>
            </Form.Item>
            <p>Selected Duration: {displayDuration}</p>

            <Form.Item label="Features">
              <Input
                value={inputValue}
                onChange={handleFeatureInputChange}
                // onPressEnter={handleAddFeature}
                placeholder="Enter feature and press Enter"
              />
              <Button onClick={handleAddFeature}>Add feature</Button>
              <div style={{ marginTop: 8 }}>
                {features.map((feature, index) => (
                  <Tag
                    key={index}
                    closable
                    onClose={() => handleRemoveFeature(feature)}
                  >
                    {feature}
                  </Tag>
                ))}
              </div>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <div className="mt-4">
          <Row gutter={[16, 16]}>
            {plans.map((plan) => (
              <Col xs={24} sm={12} md={8} lg={6} key={plan.id}>
                <Card title={plan.name} bordered={false}>
                  <p>Price: ${plan.price}</p>
                  <p className="text-blue-800">Duration: {plan.duration}</p>
                  <p className='text-slate-600 font-extrabold mt-5'>Features:</p>
                  <ul className='ml-2'>
                    {plan.features.map(feature => {
                      
                      return <li>{feature}</li>
                    })}
                  </ul>
                  <DeleteOutlined
                    onClick={() => handleDelete(plan.id)}
                    className="cursor-pointer inline-block absolute right-0 mx-2 text-red-500"
                  >
                    Delete
                  </DeleteOutlined>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPlans;
