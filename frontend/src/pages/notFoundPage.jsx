// src/components/NotFoundPage.js
import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { FrownOutlined } from '@ant-design/icons';
// import './animations.css';  // Make sure to create this file and add the necessary animations

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg animate-fadeIn">
        <FrownOutlined className="text-6xl text-red-500 animate-bounce" />
        <h1 className="text-4xl font-bold mt-4">404</h1>
        <p className="text-xl mt-2">Page Not Found</p>
        <Link to="/">
          <Button type="primary" className="mt-4 animate-pulse">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
