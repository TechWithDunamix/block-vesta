// src/components/BuyPlanPage.js
import React, { useState, useEffect } from 'react';
import { Card, Button, message } from 'antd';
import { callMainApi } from '../utils';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layouts'
const PlanPage = () => {
  const [plans, setPlans] = useState([]);


  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await callMainApi('/plans');
      if (response.data) {
        setPlans(response.data);
      } else {
        message.error(response.error || 'Failed to fetch plans');
      }
    } catch (error) {
      console.error('Error fetching plans:', error);
      message.error('Error fetching plans');
    }
  };

  return (
    <Layout>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-5">
        <h1 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} title={plan.name} bordered={false} className="shadow-lg">
              <p className="text-2xl font-bold mb-4">${plan.price}</p>
              <p className="text-blue-800">Duration: {plan.duration}</p>
              <ul className="mb-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">{feature}</li>
                ))}
              </ul>
              <a href={`/buy-plan?id=${plan.id}&int=${plan.pir}&period=${plan.duration}&name=${plan.name}&amount=${plan.price}`} className="hover:mr-20 hover:text-white w-full bg-blue-600 px-3 py-2 rounded-b-lg rounded-r-lg">Buy Now</a>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default PlanPage;
