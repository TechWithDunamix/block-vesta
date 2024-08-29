import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Input, InputNumber, Card, Row, Col, Select, message, Tag } from 'antd';
import AdminLayout from './layout';
import { callMainApi } from '../utils';
import { DeleteOutlined } from '@ant-design/icons';

const Investments = () => {
  const [investments, setInvestments] = useState([]);
  

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await callMainApi('/admin/investments');
      setInvestments(response.data);
      console.log(investments)
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
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

  

  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
       
        <div className="mt-4">
          <Row gutter={[16, 16]}>
            {investments && investments.map((investment) => (
              <Col xs={24} sm={12} md={8} lg={6} key={investment.user}>
                <Card title={investment.name} bordered={false} className='border-2'>
                  <p>Price: ${investment.price.toLocaleString()}</p>
                  <p className="text-blue-800">Started on: {investment.start}</p>
                  <p className='text-slate-400'>{investment.user}</p>
                  <p className='text-slate-600 font-extrabold mt-5'>Features:</p>
                  
                  {/* <DeleteOutlined
                    onClick={() => handleDelete(investment.id)}
                    className="cursor-pointer inline-block absolute right-0 mx-2 text-red-500"
                  >
                    Delete
                  </DeleteOutlined> */}
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Investments;
